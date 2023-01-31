import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import UploadImage from "../../../Common/UploadImage/index";
import { makeStyles } from "@mui/styles";
import { TextField, Paper } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { ContactFormWrapper, WishListCard } from "./style.js";
import { sendMessageSchema } from "../../../utils/validate";
import { useSendLeadMessage } from "../../../api/index";
const uploadImageGridSizes = { xs: 12, md: 6 };

const useStyles = makeStyles(() => ({
  root: {
    margin: "8px 8px 40px 8px",
    padding: "8px",
    display: "grid",
    gridTemplateColumns: "3fr 3fr 3fr",
    gridColumnGap: "30px",
    gridRowGap: "10px",
  },
}));

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
  const classes = useStyles();

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
      <Paper className={classes.root}>
        <TextField
          required
          variant="filled"
          color="primary"
          label="First Name"
          name="first_name"
          value={wishlistEntry.first_name}
          error={!!validationErrors.first_name}
          helperText={validationErrors.first_name}
          onChange={handleChange}
        ></TextField>

        <TextField
          required
          variant="filled"
          color="primary"
          name="last_name"
          label="Last Name"
          value={wishlistEntry.last_name}
          error={!!validationErrors.last_name}
          helperText={validationErrors.last_name}
          onChange={handleChange}
        ></TextField>
        <TextField
          required
          variant="filled"
          color="primary"
          label="Phone Number"
          name="phone"
          value={wishlistEntry.phone}
          error={!!validationErrors.phone}
          helperText={validationErrors.phone}
          onChange={handleChange}
        ></TextField>
        <TextField
          required
          variant="filled"
          color="primary"
          label="Email"
          name="email"
          value={wishlistEntry.email}
          error={!!validationErrors.email}
          helperText={validationErrors.email}
          onChange={handleChange}
        ></TextField>
        <TextField
          variant="filled"
          color="primary"
          name="description"
          label="Description"
          value={wishlistEntry.description}
          error={!!validationErrors.description}
          helperText={validationErrors.description}
          onChange={handleChange}
        />
        <UploadImage
          handleImageChange={handleImageChange}
          pathKey="contactformupload"
          gridSizes={uploadImageGridSizes}
        />
        <LoadingButton
          variant="contained"
          loading={isLoading}
          color={formError ? "error" : "primary"}
          disabled={wishlistIsEmpty}
          onClick={() => handleSubmit()}
        >
          {formError ? "There was an error. Please try again" : "Submit"}
        </LoadingButton>
      </Paper>
    </ContactFormWrapper>
  );
}
