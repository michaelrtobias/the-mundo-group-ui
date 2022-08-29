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
  isEdit,
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
    if (!isEdit) {
      deleteImage({
        item: [{ fileName: url.split("inventory/")[1], pathKey: "inventory" }],
      });
    }
    handleDeleteImage(index, url);
    setSelectedImageIndex(0);
    setIsDeleteImageModalOpen(false);
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
            Are you sure you want to delete {url.split("inventory/")[1]}? Image
            will be permenantly deleted, even if you exit out of the edit modal
            before saving.
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
