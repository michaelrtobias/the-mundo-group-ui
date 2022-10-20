import { useState } from "react";
import DraftSwitch from "../../../../../../Common/DraftSwitch/index";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";
const CancelModal = ({
  isCancelModalOpen,
  handleConfirmCancelModal,
  setIsCancelModalOpen,
  handleClose,
  isEdited,
  setIsDraft,
  isDraft,
  handleSave,
}) => {
  const handleCloseCancelModal = () => {
    setIsCancelModalOpen(false);
  };

  const handleSaveDraft = () => {
    handleSave();
    setIsCancelModalOpen(false);
  };
  return (
    <>
      <Button
        onClick={handleClose}
        variant="contained"
        color={isEdited ? "warning" : "primary"}
      >
        Cancel
      </Button>
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
          <Grid container spacing={2} direction="column">
            <Grid item>
              <h6>
                Are you sure you want to cancel adding this item? All work will
                be lost.
              </h6>
            </Grid>
            <Grid item>
              <Grid container spacing={2}>
                <Grid item>
                  <h6>Would you like to save as a draft?</h6>
                </Grid>
                <Grid item>
                  <DraftSwitch setIsDraft={setIsDraft} isDraft={isDraft} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          {!isDraft && (
            <Button
              onClick={handleCloseCancelModal}
              variant="contained"
              color="primary"
            >
              No
            </Button>
          )}
          {isDraft ? (
            <Button
              onClick={handleSaveDraft}
              variant="contained"
              color="secondary"
              autoFocus
            >
              Save Draft
            </Button>
          ) : (
            <Button
              onClick={handleConfirmCancelModal}
              variant="contained"
              color="error"
              autoFocus
            >
              Yes
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CancelModal;
