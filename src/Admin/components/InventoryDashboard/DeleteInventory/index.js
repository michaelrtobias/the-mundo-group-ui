import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { LoadingButton } from "@mui/lab";
import { useDeleteInventory } from "../../../../api/index";
const DeleteInventory = ({ watch }) => {
  const [open, setOpen] = useState(false);

  const {
    mutate: deleteInventory,
    isLoading,
    isError,
  } = useDeleteInventory({
    onSuccess: () => {
      setOpen(false);
    },
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    deleteInventory({ item: { brand: watch.brand, colorway: watch.colorway } });
  };

  return (
    <>
      <IconButton
        aria-label="delete"
        onClick={handleClickOpen}
        color={isError ? "error" : "default"}
      >
        <DeleteIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete {watch.brand} {watch.model}
            {watch.colorway}? All Information and data will be lost.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary">
            Cancel
          </Button>
          <LoadingButton
            loading={isLoading}
            onClick={handleDelete}
            variant="contained"
            color="warning"
          >
            Yes
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteInventory;
