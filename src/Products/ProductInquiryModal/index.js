import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import { LoadingButton } from "@mui/lab";
import { sendMessageSchema } from "../../utils/validate";
import { useSendLeadMessage } from "../../api/hooks/useSendLeadMessage";

const defaultContactPayload = (
  brand,
  model,
  model_number,
  size,
  bracelet,
  images,
  colorway
) => ({
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  type: "watch",
  make: brand,
  model: model,
  description: `Serial Number: ${model_number}. Size: ${size}. Bracelet: ${bracelet}. Colorway: ${colorway}`,
  image_URL: images[0].image_url,
});

const ProductInquiryModal = ({
  brand,
  model,
  model_number,
  size,
  bracelet,
  images,
  colorway,
}) => {
  const defaultMessageData = defaultContactPayload(
    brand,
    model,
    model_number,
    size,
    bracelet,
    images,
    colorway
  );
  const [open, setOpen] = useState(false);
  const [messageData, setMessageData] = useState(defaultMessageData);
  const [validationErrors, setValidationErrors] = useState({});

  const { mutate: sendLeadMessage, isLoading } = useSendLeadMessage({
    onSuccess: async () => {
      setOpen(false);
      setMessageData(defaultMessageData);
      setValidationErrors({});
    },
  });

  const isValid = async () => {
    try {
      await sendMessageSchema.validate(messageData, {
        abortEarly: false,
      });

      setValidationErrors({});
      return true;
    } catch (e) {
      if (e.inner) {
        const errors = e.inner.reduce((obj, error) => {
          obj[error.path] = error.message;
          return obj;
        }, {});
        setValidationErrors(errors);
      }
      return false;
    }
  };
  const handleSave = async () => {
    if (await isValid()) {
      sendLeadMessage({ body: messageData });
    }
  };

  const handleChange = useCallback(
    (e) => {
      setMessageData({
        ...messageData,
        [e.target.name]: e.target.value,
      });
    },
    [messageData]
  );
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button variant="outlined" size="small" onClick={handleOpen}>
        Inquire
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          Interested in a {brand} {model} {model_number}?
        </DialogTitle>
        <DialogContent>
          <DialogContentText gutterBottom>
            Please enter your contact information we will respond back to you as
            soon as possible.
          </DialogContentText>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoFocus
                label="First Name"
                name="first_name"
                value={messageData.first_name}
                onChange={handleChange}
                error={!!validationErrors.first_name}
                helperText={validationErrors.first_name}
                disabled={isLoading}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                name="last_name"
                value={messageData.last_name}
                onChange={handleChange}
                error={!!validationErrors.last_name}
                helperText={validationErrors.last_name}
                disabled={isLoading}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone"
                name="phone"
                value={messageData.phone}
                onChange={handleChange}
                error={!!validationErrors.phone}
                helperText={validationErrors.phone}
                disabled={isLoading}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                name="email"
                value={messageData.email}
                onChange={handleChange}
                error={!!validationErrors.email}
                helperText={validationErrors.email}
                disabled={isLoading}
                fullWidth
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <LoadingButton
            variant="contained"
            onClick={handleSave}
            loading={isLoading}
          >
            Send
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProductInquiryModal;
