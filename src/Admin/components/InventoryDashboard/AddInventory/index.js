import { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Grid,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import CancelModal from "./CancelModal/index";
import { inventorySchema } from "../../../../utils/validate";
import { useAddInventory } from "../../../../api/index";
const defaultAddInventoryState = {
  brand: "",
  model: "",
  model_number: "",
  dial: "",
  bezel: "",
  bracelet: "",
  size: "",
  description: "",
};

const AddInventory = () => {
  const [open, setOpen] = useState(false);
  const [addInventoryData, setAddInventoryData] = useState(
    defaultAddInventoryState
  );
  const [isEdited, setIsEdited] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const handleClickOpen = () => {
    setOpen(true);
  };
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

  const isValid = async () => {
    try {
      await inventorySchema.validate(addInventoryData, {
        abortEarly: false,
      });
      setValidationErrors({});
      return true;
    } catch (e) {
      const errors = e.inner.reduce((obj, error) => {
        obj[error.path] = error.message;
        return obj;
      }, {});
      setValidationErrors(errors);
      return false;
    }
  };

  const {
    mutate: addInventory,
    isLoading,
    isSuccess,
  } = useAddInventory({
    onSuccess: () => {
      setIsEdited(false);
      setOpen(false);
      setAddInventoryData(defaultAddInventoryState);
    },
  });
  const handleConfirmCancelModal = () => {
    setIsEdited(false);
    setAddInventoryData(defaultAddInventoryState);
    setValidationErrors({});
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
      addInventory({ item: addInventoryData });
    }
  };
  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add Inventory
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="lg"
      >
        <DialogTitle id="alert-dialog-title">Add Inventory</DialogTitle>
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
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="warning">
            Cancel
          </Button>
          <CancelModal
            isCancelModalOpen={isCancelModalOpen}
            setIsCancelModalOpen={setIsCancelModalOpen}
            handleConfirmCancelModal={handleConfirmCancelModal}
          />
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
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddInventory;
