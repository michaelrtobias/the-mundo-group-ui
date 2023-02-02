import { Grid, Stack, TextField, Typography } from "@mui/material";
import { useCallback, useState } from "react";
import { LoadingButton } from "@mui/lab";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import React from "react";
import { sendMessageSchema } from "../../../utils/validate";
import { useSendLeadMessage } from "../../../api/index";
const defaultContactPayload = ({
  brand,
  model,
  model_number,
  size,
  bracelet,
  images,
  colorway,
}) => ({
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

const ProductContact = ({ watch }) => {
  const defaultMessageData = defaultContactPayload(watch);
  const [messageData, setMessageData] = useState(defaultMessageData);
  const [validationErrors, setValidationErrors] = useState({});

  const {
    mutate: sendLeadMessage,
    reset,
    isLoading,
    isSuccess,
    isIdle,
  } = useSendLeadMessage({
    onSuccess: async () => {
      setMessageData(defaultMessageData);
      setValidationErrors({});
      await setTimeout(() => {
        reset();
      }, 5000);
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

  return (
    <Stack
      spacing={2}
      alignItems="center"
      justifyContent={isSuccess ? "center" : "end"}
    >
      <Typography variant="h5">Send Us A Message!</Typography>

      {(!isSuccess || isIdle || isLoading) && (
        <>
          <Grid container justifyContent="space-around">
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                name="first_name"
                value={messageData.first_name}
                onChange={handleChange}
                error={!!validationErrors.first_name}
                helperText={validationErrors.first_name}
                disabled={isLoading}
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                name="last_name"
                value={messageData.last_name}
                onChange={handleChange}
                error={!!validationErrors.last_name}
                helperText={validationErrors.last_name}
                disabled={isLoading}
              ></TextField>
            </Grid>
          </Grid>

          <TextField
            fullWidth
            label="Phone"
            name="phone"
            value={messageData.phone}
            onChange={handleChange}
            error={!!validationErrors.phone}
            helperText={validationErrors.phone}
            disabled={isLoading}
          ></TextField>

          <TextField
            fullWidth
            label="Email"
            name="email"
            value={messageData.email}
            onChange={handleChange}
            error={!!validationErrors.email}
            helperText={validationErrors.email}
            disabled={isLoading}
          ></TextField>
        </>
      )}
      {isSuccess && (
        <>
          <MarkEmailReadIcon
            fontSize="large"
            color="success"
          ></MarkEmailReadIcon>

          <Typography align="center">Message Succesfull</Typography>

          <Typography align="center">
            We will reach put as soon as we can!
          </Typography>
        </>
      )}
      <LoadingButton
        variant="contained"
        onClick={handleSave}
        loading={isLoading}
        disabled={isSuccess}
      >
        Send message
      </LoadingButton>
    </Stack>
  );
};

export default ProductContact;
