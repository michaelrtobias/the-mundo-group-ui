import { ContactFormWrapper, WishListCard } from "./style.js";
import { Grid, Paper, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { LoadingButton } from "@mui/lab";
import React from "react";
import UploadImage from "../../../../components/UploadImage/index";
import { sendMessageSchema } from "../../../../utils/validate";
import { useHistory } from "react-router";
import { useSendLeadMessage } from "../../../../api/hooks/useSendLeadMessage";
const uploadImageGridSizes = { xs: 6 };

const defaultWishListPayload = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  type: "",
  make: "",
  model: "",
  description: "",
  image_URL: "",
};
export default function WishList() {
  const [wishlistEntry, setWishlistEntry] = useState(defaultWishListPayload);
  const [formError, setFormError] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [wishlistIsEmpty, setWishlistIsEmpty] = useState(true);
  const history = useHistory();

  const { mutate: sendLeadMessage, isLoading } = useSendLeadMessage({
    onSuccess: async () => {
      setWishlistEntry(defaultWishListPayload);
      setValidationErrors({});
      history.push("/contact/success");
    },
    onError: () => setFormError(true),
  });

  useEffect(() => {
    const nonEmptyValueCount = Object.values(wishlistEntry).filter(
      (value) => value !== ""
    ).length;
    if (nonEmptyValueCount > 0) {
      setWishlistIsEmpty(false);
    } else if (nonEmptyValueCount === 0) {
      setWishlistIsEmpty(true);
    }
  }, [wishlistEntry]);

  const isValid = async () => {
    try {
      await sendMessageSchema.validate(wishlistEntry, {
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

  const handleSubmit = async () => {
    if (await isValid()) {
      setFormError(false);
      sendLeadMessage({ body: wishlistEntry });
    }
  };

  const handleChange = (e) => {
    setWishlistEntry({
      ...wishlistEntry,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (url) => {
    setWishlistEntry({
      ...wishlistEntry,
      image_URL: url,
    });
  };

  return (
    <ContactFormWrapper>
      <WishListCard>
        <h2>Send Us A Message</h2>
        <p>
          Please fill out the form below with what you are looking for and we
          will contact you as soon as possible
        </p>
      </WishListCard>
      <Paper sx={{ margin: "8px 1vw 400px 1vw", padding: "8px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              required
              variant="filled"
              color="primary"
              label="First Name"
              name="first_name"
              value={wishlistEntry.first_name}
              error={!!validationErrors.first_name}
              helperText={validationErrors.first_name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              required
              variant="filled"
              color="primary"
              name="last_name"
              label="Last Name"
              value={wishlistEntry.last_name}
              error={!!validationErrors.last_name}
              helperText={validationErrors.last_name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              required
              variant="filled"
              color="primary"
              label="Phone Number"
              name="phone"
              value={wishlistEntry.phone}
              error={!!validationErrors.phone}
              helperText={validationErrors.phone}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              required
              variant="filled"
              color="primary"
              label="Email"
              name="email"
              value={wishlistEntry.email}
              error={!!validationErrors.email}
              helperText={validationErrors.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              variant="filled"
              color="primary"
              name="description"
              label="Description"
              value={wishlistEntry.description}
              error={!!validationErrors.description}
              helperText={validationErrors.description}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <UploadImage
              handleImageChange={handleImageChange}
              pathKey="contactformupload"
              gridSizes={uploadImageGridSizes}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <LoadingButton
              variant="contained"
              loading={isLoading}
              color={formError ? "error" : "primary"}
              disabled={wishlistIsEmpty}
              onClick={() => handleSubmit()}
              fullWidth
            >
              {formError ? "There was an error. Please try again" : "Submit"}
            </LoadingButton>
          </Grid>
        </Grid>
      </Paper>
    </ContactFormWrapper>
  );
}
