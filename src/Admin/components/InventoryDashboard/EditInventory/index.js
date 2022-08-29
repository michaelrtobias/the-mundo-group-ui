import { useState, useEffect } from "react";
import {
  IconButton,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  Tooltip,
  DialogTitle,
  Grid,
} from "@mui/material";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import { LoadingButton } from "@mui/lab";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import {
  useEditInventory,
  useGetAllInventory,
  useDeleteInventory,
} from "../../../../api/index";
import CancelEditModal from "./CancelEditModal/index";
import { inventorySchema } from "../../../../utils/validate";

const defaultEditInventoryDataSetter = (item) => ({
  brand: item?.brand ?? "",
  model: item?.model ?? "",
  model_number: item?.model_number ?? "",
  dial: item?.dial ?? "",
  bezel: item?.bezel ?? "",
  bracelet: item?.bracelet ?? "",
  size: item?.size ?? "",
  description: item?.description ?? "",
  images: item?.images ?? [],
});
const EditInventory = ({ watch }) => {
  const defaultEditInventoryData = defaultEditInventoryDataSetter(watch);

  const [isOpen, setIsOpen] = useState(false);
  const [editInventoryData, setEditInventoryData] = useState(
    defaultEditInventoryData
  );
  const [isEdited, setIsEdited] = useState(false);
  const [isBrandColorwayEdited, setIsBrandColorwayEdited] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const {
    mutate: editInventory,
    isLoading,
    isSuccess,
  } = useEditInventory({
    onSuccess: () => {
      setEditInventoryData(defaultEditInventoryData);
      setIsEdited(false);
      setIsBrandColorwayEdited(false);
      setValidationErrors({});
      setIsOpen(false);
    },
  });
  const {
    data: items = [],
    isGetInventorySuccess,
    isGetInventoryLoading,
  } = useGetAllInventory();

  const {
    mutate: deleteInventory,
    isDeleteInventoryLoading,
    isError,
  } = useDeleteInventory();
  const duplicateCheck = (newItem, items) => {
    const colorways = items.map((item) => `${item.brand}-${item.colorway}`);
    const newColorway = `${
      newItem.brand
    }-${newItem.model_number.toLowerCase()}-${newItem.dial.toLowerCase()}-${newItem.bezel.toLowerCase()}`;

    if (colorways.includes(newColorway)) {
      throw Error(
        `Item: ${
          newItem.brand
        } ${newItem.model_number.toLowerCase()} ${newItem.dial.toLowerCase()} ${newItem.bezel.toLowerCase()} already exists. The combination of Brand, Model Number, Bezel & Dial values must be unique across all inventory`
      );
    }
    return false;
  };

  const isValid = async () => {
    try {
      await inventorySchema.validate(editInventoryData, {
        abortEarly: false,
      });
      duplicateCheck(editInventoryData, items);

      setValidationErrors({});
      return true;
    } catch (e) {
      if (e.inner) {
        const errors = e.inner.reduce((obj, error) => {
          obj[error.path] = error.message;
          return obj;
        }, {});
        setValidationErrors(errors);
      } else {
        setValidationErrors({ brand: e.message });
      }
      return false;
    }
  };

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleConfirmCancelModal = () => {
    setIsEdited(false);
    setEditInventoryData(defaultEditInventoryData);
    setValidationErrors({});
    setIsCancelModalOpen(false);
    setIsOpen(false);
  };
  const handleClose = () => {
    if (isEdited) {
      setIsCancelModalOpen(true);
    } else {
      setEditInventoryData(defaultEditInventoryData);
      setValidationErrors({});
      setIsOpen(false);
    }
  };

  const handleSave = async () => {
    if (isBrandColorwayEdited && (await isValid())) {
      deleteInventory({
        item: { brand: watch.brand, colorway: watch.colorway },
      });
      editInventory({ item: { ...editInventoryData } });
    } else if (await isValid()) {
      editInventory({ item: { ...editInventoryData } });
    }
  };
  const handleResetChanges = () => {
    setEditInventoryData(defaultEditInventoryData);
    setValidationErrors({});
  };

  useEffect(() => {
    const BrandColorway = ["brand", "model_number", "dial", "bezel"];
    const editData = Object.keys(editInventoryData);
    for (let key = 0; editData.length > key; key++) {
      if (
        editInventoryData[editData[key]] !==
          defaultEditInventoryData[editData[key]] &&
        BrandColorway.includes(editData[key])
      ) {
        setIsEdited(true);
        setIsBrandColorwayEdited(true);
        break;
      } else if (
        editInventoryData[editData[key]] !==
        defaultEditInventoryData[editData[key]]
      ) {
        setIsEdited(true);
        break;
      } else {
        setIsEdited(false);
        setIsBrandColorwayEdited(false);
      }
    }
  }, [editInventoryData]);
  return (
    <>
      <IconButton aria-label="settings" onClick={handleClickOpen}>
        <AutoFixHighIcon />
      </IconButton>
      <Dialog open={isOpen} onClose={handleClose} maxWidth="lg">
        <DialogTitle>
          {`Edit ${watch.brand} ${watch.model}
            ${watch.colorway}`}
          <Tooltip title="Reset Changes" placement="left">
            <IconButton
              onClick={handleResetChanges}
              disabled={!isEdited}
              color="warning"
              sx={{
                position: "absolute",
                right: 24,
                top: 16,
              }}
            >
              <RotateLeftIcon />
            </IconButton>
          </Tooltip>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} lg={4}>
              <TextField
                fullWidth
                variant="filled"
                color="primary"
                type="text"
                label="Brand"
                value={editInventoryData.brand}
                error={!!validationErrors.brand}
                helperText={validationErrors.brand}
                onChange={(e) =>
                  setEditInventoryData({
                    ...editInventoryData,
                    brand: e.target.value,
                  })
                }
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <TextField
                fullWidth
                variant="filled"
                color="primary"
                type="text"
                label="Model"
                value={editInventoryData.model}
                error={!!validationErrors.model}
                helperText={validationErrors.model}
                onChange={(e) =>
                  setEditInventoryData({
                    ...editInventoryData,
                    model: e.target.value,
                  })
                }
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <TextField
                fullWidth
                required
                variant="filled"
                color="primary"
                type="text"
                label="Model Number"
                value={editInventoryData.model_number}
                error={!!validationErrors.model_number}
                helperText={validationErrors.model_number}
                onChange={(e) =>
                  setEditInventoryData({
                    ...editInventoryData,
                    model_number: e.target.value,
                  })
                }
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <TextField
                fullWidth
                required
                variant="filled"
                color="primary"
                type="text"
                label="Dial"
                value={editInventoryData.dial}
                error={!!validationErrors.dial}
                helperText={validationErrors.dial}
                onChange={(e) =>
                  setEditInventoryData({
                    ...editInventoryData,
                    dial: e.target.value,
                  })
                }
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <TextField
                fullWidth
                required
                variant="filled"
                color="primary"
                type="text"
                label="Bezel"
                value={editInventoryData.bezel}
                error={!!validationErrors.bezel}
                helperText={validationErrors.bezel}
                onChange={(e) =>
                  setEditInventoryData({
                    ...editInventoryData,
                    bezel: e.target.value,
                  })
                }
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <TextField
                fullWidth
                variant="filled"
                color="primary"
                type="text"
                label="Bracelet"
                value={editInventoryData.bracelet}
                error={!!validationErrors.bracelet}
                helperText={validationErrors.bracelet}
                onChange={(e) =>
                  setEditInventoryData({
                    ...editInventoryData,
                    bracelet: e.target.value,
                  })
                }
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <TextField
                fullWidth
                variant="filled"
                color="primary"
                type="text"
                label="Size"
                value={editInventoryData.size}
                error={!!validationErrors.size}
                helperText={validationErrors.size}
                onChange={(e) =>
                  setEditInventoryData({
                    ...editInventoryData,
                    size: e.target.value,
                  })
                }
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6} lg={8}>
              <TextField
                fullWidth
                variant="filled"
                color="primary"
                type="text"
                label="Description"
                value={editInventoryData.description}
                error={!!validationErrors.description}
                helperText={validationErrors.description}
                onChange={(e) =>
                  setEditInventoryData({
                    ...editInventoryData,
                    description: e.target.value,
                  })
                }
              ></TextField>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <CancelEditModal
            isEdited={isEdited}
            handleClose={handleClose}
            isCancelModalOpen={isCancelModalOpen}
            setIsCancelModalOpen={setIsCancelModalOpen}
            handleConfirmCancelModal={handleConfirmCancelModal}
          />
          <LoadingButton
            variant="contained"
            color="primary"
            loading={
              isBrandColorwayEdited
                ? isLoading || isDeleteInventoryLoading
                : isLoading
            }
            disabled={!isEdited}
            onClick={handleSave}
          >
            Save
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditInventory;