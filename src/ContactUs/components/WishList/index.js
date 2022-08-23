import React, { useState, useEffect } from "react";

import axios from "axios";
import { useHistory } from "react-router";
import UploadImage from "../../../Common/UploadImage/index";
import { makeStyles } from "@mui/styles";
import { TextField, Paper, Button } from "@mui/material";
import { ContactFormWrapper, WishListCard } from "./style.js";

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

export default function WishList() {
  const [wishlistEntry, setWishlistEntry] = useState({});
  const [loading, setLoading] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [formError, setFormError] = useState(false);

  const history = useHistory();
  const classes = useStyles();

  const handleSubmit = (e) => {
    addWishlistEntry();
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
  const addWishlistEntry = () => {
    setLoading(true);
    setFormError(false);
    axios
      .post(
        "https://8zrqystn2h.execute-api.us-east-1.amazonaws.com/prod/wishlist",
        {
          first_name: wishlistEntry.first_name,
          last_name: wishlistEntry.last_name,
          email: wishlistEntry.email,
          phone: wishlistEntry.phone,
          type: wishlistEntry.type,
          make: wishlistEntry.make,
          model: wishlistEntry.model,
          description: wishlistEntry.description,
          image_URL: wishlistEntry.image_URL,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        setLoading(false);
        history.push("/contact/success");
        console.log("should have redirected");
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
        setFormError(true);
      });
  };

  useEffect(() => {
    const isPhoneSet = !!wishlistEntry.phone;
    const isFirstNameSet = !!wishlistEntry.first_name;
    const isDescriptionSet = !!wishlistEntry.description;
    const isEmailSet = !!wishlistEntry.email;

    setFormValid(
      isPhoneSet && isFirstNameSet && isDescriptionSet && isEmailSet
    );
  }, [wishlistEntry]);

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
          type="text"
          name="first_name"
          value={wishlistEntry.first_name}
          placeholder="Enter First Name"
          onChange={handleChange}
          helperText="First Name"
        ></TextField>

        <TextField
          required
          variant="filled"
          color="primary"
          type="text"
          name="last_name"
          placeholder="Enter Last Name"
          value={wishlistEntry.last_name}
          onChange={handleChange}
          helperText="Last Name"
        ></TextField>
        <TextField
          required
          variant="filled"
          color="primary"
          type="phone"
          name="phone"
          placeholder="Enter Phone Number"
          value={wishlistEntry.phone}
          onChange={handleChange}
          helperText="Phone Number"
        ></TextField>
        <TextField
          required
          variant="filled"
          color="primary"
          type="email"
          name="email"
          placeholder="Enter Email"
          value={wishlistEntry.email}
          onChange={handleChange}
          helperText="Email"
        ></TextField>
        <TextField
          required
          variant="filled"
          color="primary"
          type="text"
          name="text"
          placeholder="Enter Description"
          value={wishlistEntry.description}
          onChange={handleChange}
          helperText="What are you looking for? Add any extra details about item. Bracelets, Materials, Dials, Bezel,
          etc..."
        />
        <UploadImage
          setWishlistEntry={setWishlistEntry}
          {...wishlistEntry}
          handleImageChange={handleImageChange}
          loading={loading}
          wishlistEntry={wishlistEntry}
          pathKey="contactformupload"
          handleChange={handleChange}
        />
        <Button
          variant="contained"
          color={formError ? "error" : "primary"}
          type="button"
          disabled={!formValid || loading}
          onClick={(e) => handleSubmit(e)}
        >
          {formError ? "There was an error. Please try again" : "Submit"}
        </Button>
      </Paper>
    </ContactFormWrapper>
  );
}
