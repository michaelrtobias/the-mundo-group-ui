import { useState } from "react";
import {
  Button,
  IconButton,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDeleteInventory } from "../../../../api/index";
const DeleteInventory = ({ watch }) => {
  const [open, setOpen] = useState(false);

  const {
    mutate: deleteInventory,
    isLoading,
    isSuccess,
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
    deleteInventory({ brand: watch.brand, colorway: watch.colorway });
  };

  return (
    <>
      <IconButton aria-label="delete" onClick={handleClickOpen}>
        <DeleteIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete {watch.brand} {watch.model}
            {watch.colorway}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <LoadingButton onClick={handleDelete}>Yes</LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteInventory;
