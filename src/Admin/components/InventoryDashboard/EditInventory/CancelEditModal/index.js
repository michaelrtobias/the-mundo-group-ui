import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";

const CancelEditModal = ({
  isEdited,
  handleClose,
  isCancelModalOpen,
  setIsCancelModalOpen,
  handleConfirmCancelModal,
}) => {
  const handleCloseCancelModal = () => {
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
        sx={{ minWidth: "50%" }}
        maxWidth="lg"
      >
        <DialogTitle id="alert-dialog-title">Add Inventory</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <h6>
                Are you sure you want to cancel editing this item? All work will
                be lost.
              </h6>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseCancelModal}
            variant="contained"
            color="primary"
          >
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
    </>
  );
};

export default CancelEditModal;
