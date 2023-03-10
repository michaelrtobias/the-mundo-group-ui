import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AddInventoryImageManager from "../../../../Common/AddInventoryImageManager/index";
import CancelModal from "../../CancelModal";
import DraftSwitch from "../../../../Common/DraftSwitch/index";
import LoadingButton from "@mui/lab/LoadingButton";
import { inventorySchema } from "../../../../utils/validate";
import { useAddInventory } from "../../../../api/hooks/useAddInventory";
import { useGetAllInventory } from "../../../../api/hooks/useGetAllInventory";
const defaultAddInventoryState = {
  brand: "",
  model: "",
  model_number: "",
  dial: "",
  bezel: "",
  bracelet: "",
  size: "",
  description: "",
  draft: false,
  images: [],
};

const AddInventory = () => {
  const [open, setOpen] = useState(false);
  const [addInventoryData, setAddInventoryData] = useState(
    defaultAddInventoryState
  );
  const [isDraft, setIsDraft] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isMove, setIsMove] = useState(false);

  const { mutate: addInventory, isLoading } = useAddInventory({
    onSuccess: () => {
      setIsEdited(false);
      setOpen(false);
      setIsDraft(false);
      setAddInventoryData(defaultAddInventoryState);
    },
  });
  const { data: items = [] } = useGetAllInventory();

  useEffect(() => {
    const addData = Object.keys(addInventoryData);
    for (let key = 0; addData.length > key; key++) {
      if (
        addInventoryData[addData[key]] !==
        defaultAddInventoryState[addData[key]]
      ) {
        setIsEdited(true);
        break;
      } else {
        setIsEdited(false);
      }
    }
  }, [addInventoryData]);

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
      await inventorySchema.validate(addInventoryData, {
        abortEarly: false,
      });
      duplicateCheck(addInventoryData, items);

      setValidationErrors({});
      return true;
    } catch (e) {
      if (e.inner) {
        const errors = e.inner.reduce((obj, error) => {
          obj[error.path] = error.message;
          return obj;
        }, {});
        setValidationErrors({ ...errors, images: validationErrors.images });
      } else {
        if (Object.keys(validationErrors).length === 0) {
          setValidationErrors({ brand: e.message });
        } else {
          setValidationErrors(...validationErrors, { brand: e.message });
        }
      }
      return false;
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const isDuplicateImage = (url) => {
    if (
      addInventoryData.images
        .map((image) => image.image_url.split("Z-")[1])
        .includes(url.split("Z-")[1])
    ) {
      return true;
    } else {
      return false;
    }
  };
  const handleAddImage = (url, fileName) => {
    if (!isDuplicateImage(url)) {
      setAddInventoryData({
        ...addInventoryData,
        images: [...addInventoryData.images, { image_url: url }],
      });
      const tempErrors = { ...validationErrors };
      delete tempErrors.images;
      setValidationErrors({ ...tempErrors });
    } else if (isDuplicateImage(url)) {
      setValidationErrors({
        ...validationErrors,
        images: `Image: ${fileName} has already been added to this inventory item. Please choose a different image.`,
      });
    }
  };

  const handleMoveImage = (destinationIndex, currentIndex) => {
    setIsMove(true);
    const tempImages = [...addInventoryData.images];
    const removedItem = tempImages.splice(currentIndex, 1)[0];
    tempImages.splice(destinationIndex, 0, removedItem);
    setAddInventoryData({
      ...addInventoryData,
      images: [...tempImages],
    });
    setSelectedImageIndex(destinationIndex);
  };

  const handleDeleteImage = (index) => {
    const tempImages = [...addInventoryData.images];
    tempImages.splice(index, 1);
    setAddInventoryData({
      ...addInventoryData,
      images: [...tempImages],
    });
  };
  const handleConfirmCancelModal = () => {
    setIsEdited(false);
    setAddInventoryData(defaultAddInventoryState);
    setValidationErrors({});
    setIsDraft(false);
    setIsCancelModalOpen(false);
    setOpen(false);
  };
  const handleClose = () => {
    if (isEdited) {
      setIsCancelModalOpen(true);
    } else {
      setOpen(false);
      setValidationErrors({});
    }
  };
  const handleSave = async () => {
    if (await isValid()) {
      if (addInventoryData.images.length === 0) {
        addInventory({ item: { ...addInventoryData, draft: true } });
      } else {
        addInventory({ item: { ...addInventoryData, draft: isDraft } });
      }
    }
  };
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        size="large"
        sx={{ minHeight: "4.25vh" }}
        fullWidth
      >
        Add Inventory
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="lg"
      >
        <DialogTitle id="alert-dialog-title">
          Add Inventory
          <FormControlLabel
            label="Draft"
            control={<DraftSwitch setIsDraft={setIsDraft} isDraft={isDraft} />}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          ></FormControlLabel>
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
                value={addInventoryData.brand}
                error={!!validationErrors.brand}
                helperText={validationErrors.brand}
                // placeholder="Enter Brand"
                onChange={(e) =>
                  setAddInventoryData({
                    ...addInventoryData,
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
                value={addInventoryData.model}
                error={!!validationErrors.model}
                helperText={validationErrors.model}
                // placeholder="Enter Brand"
                onChange={(e) =>
                  setAddInventoryData({
                    ...addInventoryData,
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
                value={addInventoryData.model_number}
                error={!!validationErrors.model_number}
                helperText={validationErrors.model_number}
                // placeholder="Enter Brand"
                onChange={(e) =>
                  setAddInventoryData({
                    ...addInventoryData,
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
                value={addInventoryData.dial}
                error={!!validationErrors.dial}
                helperText={validationErrors.dial}
                // placeholder="Enter Brand"
                onChange={(e) =>
                  setAddInventoryData({
                    ...addInventoryData,
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
                value={addInventoryData.bezel}
                error={!!validationErrors.bezel}
                helperText={validationErrors.bezel}
                // placeholder="Enter Brand"
                onChange={(e) =>
                  setAddInventoryData({
                    ...addInventoryData,
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
                value={addInventoryData.bracelet}
                error={!!validationErrors.bracelet}
                helperText={validationErrors.bracelet}
                // placeholder="Enter Brand"
                onChange={(e) =>
                  setAddInventoryData({
                    ...addInventoryData,
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
                value={addInventoryData.size}
                error={!!validationErrors.size}
                helperText={validationErrors.size}
                // placeholder="Enter Brand"
                onChange={(e) =>
                  setAddInventoryData({
                    ...addInventoryData,
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
                value={addInventoryData.description}
                error={!!validationErrors.description}
                helperText={validationErrors.description}
                // placeholder="Enter Brand"
                onChange={(e) =>
                  setAddInventoryData({
                    ...addInventoryData,
                    description: e.target.value,
                  })
                }
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <AddInventoryImageManager
                handleAddImage={handleAddImage}
                validationErrors={validationErrors.images}
                images={addInventoryData.images}
                handleDeleteImage={handleDeleteImage}
                isEdit={true}
                isMove={isMove}
                setIsMove={setIsMove}
                selectedImageIndex={selectedImageIndex}
                setSelectedImageIndex={setSelectedImageIndex}
                handleMoveImage={handleMoveImage}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <CancelModal
            isEdited={isEdited}
            isDraft={isDraft}
            setIsDraft={setIsDraft}
            handleClose={handleClose}
            isCancelModalOpen={isCancelModalOpen}
            setIsCancelModalOpen={setIsCancelModalOpen}
            handleConfirmCancelModal={handleConfirmCancelModal}
            handleSave={handleSave}
          />
          {!isDraft && (
            <LoadingButton
              onClick={handleSave}
              variant="contained"
              color="primary"
              loading={isLoading}
              disabled={!isEdited}
              autoFocus
            >
              Create
            </LoadingButton>
          )}
          {isDraft && (
            <LoadingButton
              onClick={handleSave}
              variant="contained"
              color="secondary"
              loading={isLoading}
              disabled={!isEdited}
              autoFocus
            >
              Save Draft
            </LoadingButton>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddInventory;
