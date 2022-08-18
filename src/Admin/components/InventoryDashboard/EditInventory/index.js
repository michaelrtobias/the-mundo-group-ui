import { useState, useEffect } from "react";
import {
  Button,
  IconButton,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import { useDeleteInventory } from "../../../../api/index";
const EditInventory = ({ watch }) => {
  const [open, setOpen] = useState(false);
  const [editInventoryData, setEditInventoryData] = useState(watch);
  const [startingEditInventoryData, setStartingEditInventoryData] =
    useState(watch);
  const [isEdited, setIsEdited] = useState(false);
  // const {
  //   mutate: editInventory,
  //   isLoading,
  //   isSuccess,
  // } = useEditInventory({
  //   onSuccess: () => {
  //     setOpen(false);
  //   },
  // });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    EditInventory({ brand: watch.brand, colorway: watch.colorway });
    setStartingEditInventoryData(editInventoryData);
  };

  useEffect(() => {
    const editData = Object.keys(editInventoryData);
    for (let key = 0; editData.length > key; key++) {
      if (
        editInventoryData[editData[key]] !==
        startingEditInventoryData[editData[key]]
      ) {
        setIsEdited(true);
        break;
      } else {
        setIsEdited(false);
      }
    }
  }, [editInventoryData]);
  return (
    <>
      <IconButton aria-label="settings" onClick={handleClickOpen}>
        <AutoFixHighIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <DialogTitle>{`Edit ${watch.brand} ${watch.model}
            ${watch.colorway}`}</DialogTitle>
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
                // error={!!validationErrors.brand}
                // helperText={validationErrors.brand}
                // placeholder="Enter Brand"
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
                // error={!!validationErrors.model}
                // helperText={validationErrors.model}
                // placeholder="Enter Brand"
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
                // error={!!validationErrors.model_number}
                // helperText={validationErrors.model_number}
                // placeholder="Enter Brand"
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
                // error={!!validationErrors.dial}
                // helperText={validationErrors.dial}
                // placeholder="Enter Brand"
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
                // error={!!validationErrors.bezel}
                // helperText={validationErrors.bezel}
                // placeholder="Enter Brand"
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
                // error={!!validationErrors.bracelet}
                // helperText={validationErrors.bracelet}
                // placeholder="Enter Brand"
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
                // error={!!validationErrors.size}
                // helperText={validationErrors.size}
                // placeholder="Enter Brand"
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
                // error={!!validationErrors.description}
                // helperText={validationErrors.description}
                // placeholder="Enter Brand"
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
          <Button variant="contained" color="primary" onClick={handleClose}>
            Cancel
          </Button>
          <LoadingButton
            variant="contained"
            color="primary"
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
