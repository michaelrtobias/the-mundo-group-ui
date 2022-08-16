import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
const CancelModal = ({
  isCancelModalOpen,
  handleConfirmCancelModal,
  setIsCancelModalOpen,
}) => {
  const [saveAsDraft, setSaveAsDraft] = useState(false);
  const handleClose = () => {
    setIsCancelModalOpen(false);
  };
  return (
    <Dialog
      open={isCancelModalOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{ minWidth: "50%" }}
      maxWidth="lg"
    >
      <DialogTitle id="alert-dialog-title">Add Inventory</DialogTitle>
      <DialogContent>
        <h6>
          Are you sure you want to cancel adding this item? all work will be
          lost
        </h6>
        <h6>Would you like to save as a draft?</h6>
      </DialogContent>
      <DialogActions>
        {/* <Button
          // onClick={handleSave} handle close all
          variant="contained"
          color="primary"
          autoFocus
        >
          Save As Draft
        </Button> */}
        <Button onClick={handleClose} variant="contained" color="success">
          No
        </Button>
        <Button
          onClick={handleConfirmCancelModal}
          variant="contained"
          color="error"
          autoFocus
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CancelModal;
