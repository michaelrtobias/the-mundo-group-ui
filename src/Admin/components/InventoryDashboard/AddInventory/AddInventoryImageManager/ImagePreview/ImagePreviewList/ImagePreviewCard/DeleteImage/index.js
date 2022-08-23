import { useState, useEffect } from "react";

import {
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useDeleteImage } from "../../../../../../../../../api/index";
import DeleteIcon from "@mui/icons-material/Delete";
const DeleteImage = ({
  url,
  handleDeleteImage,
  index,
  setSelectedImageIndex,
}) => {
  const [isDeleteImageModalOpen, setIsDeleteImageModalOpen] = useState(false);
  const {
    mutate: deleteImage,
    isLoading,
    isError,
  } = useDeleteImage({
    onSuccess: () => {
      setIsDeleteImageModalOpen(false);
    },
  });
  const handleClose = () => {
    setIsDeleteImageModalOpen(false);
  };
  const handleClickOpen = () => {
    setIsDeleteImageModalOpen(true);
  };
  const handleDelete = () => {
    deleteImage({
      item: { fileName: url.split("inventory/")[1], pathKey: "inventory" },
    });
    handleDeleteImage(index);
    setSelectedImageIndex(0);
  };
  return (
    <>
      <IconButton edge="end" aria-label="delete" onClick={handleClickOpen}>
        <DeleteIcon />
      </IconButton>
      <Dialog open={isDeleteImageModalOpen} onClose={handleClose}>
        <DialogTitle>Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete {url.split("inventory/")[1]}? All
            Information and data will be lost.
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
            color={isError ? "error" : "warning"}
          >
            Yes
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteImage;
