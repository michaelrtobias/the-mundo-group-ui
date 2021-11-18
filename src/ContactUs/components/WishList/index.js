import React, { useState, useEffect } from "react";

import axios from "axios";
import { useHistory } from "react-router";
import UploadImage from "./components/UploadImage/index";
import { makeStyles } from "@mui/styles";
import { TextField, Paper, Button, MenuItem } from "@mui/material";
import { ContactFormWrapper, WishListCard } from "./style.js";

const useStyles = makeStyles(() => ({
  root: {
    margin: "8px",
    padding: "8px",
    display: "grid",
    gridTemplateColumns: "3fr 3fr 3fr",
    gridColumnGap: "30px",
    gridRowGap: "10px",
    background: "blue",
  },
}));

const leadType = [
  "Watch",
  "Parts & Accessories",
  "Diamonds",
  "Bracelets",
  "Gold Link",
  "Belts & Buckels",
  "Leather Goods",
  "Other",
];
export default function WishList() {
  const [wishlistEntry, setWishlistEnty] = useState({});
  const [loading, setLoading] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const history = useHistory();
  const classes = useStyles();

  const handleSubmit = (e) => {
    addWishlistEntry();
  };

  const addWishlistEntry = () => {
    setLoading(true);
    axios
      .post(
        "https://omv9j6woq7.execute-api.us-east-1.amazonaws.com/dev/wishlist",
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
        //setError(true)
        setLoading(false);
      });
  };

  useEffect(() => {
    const isEmailSet = !!wishlistEntry.email;
    const isPhoneSet = !!wishlistEntry.phone;
    const isFirstNameSet = !!wishlistEntry.first_name;
    const isLastNameSet = !!wishlistEntry.last_name;
    const isTypeSet = !!wishlistEntry.type;
    const isMakeSet = !!wishlistEntry.make;
    const isModelSet = !!wishlistEntry.model;
    const isDescriptionSet = !!wishlistEntry.description;
    const isImageURLSet = !!wishlistEntry.image_URL;
    setFormValid(
      isEmailSet &&
        isPhoneSet &&
        isFirstNameSet &&
        isLastNameSet &&
        isTypeSet &&
        isMakeSet &&
        isModelSet &&
        isDescriptionSet &&
        isImageURLSet
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
          value={wishlistEntry.first_name}
          placeholder="Enter First Name"
          onChange={(e) =>
            setWishlistEnty({
              ...wishlistEntry,
              first_name: e.target.value,
            })
          }
          helperText="First Name"
        ></TextField>

        <TextField
          required
          variant="filled"
          color="primary"
          type="text"
          placeholder="Enter Last Name"
          value={wishlistEntry.last_name}
          onChange={(e) =>
            setWishlistEnty({
              ...wishlistEntry,
              last_name: e.target.value,
            })
          }
          helperText="Last Name"
        ></TextField>
        <TextField
          required
          variant="filled"
          color="primary"
          type="email"
          placeholder="Enter Email"
          value={wishlistEntry.email}
          onChange={(e) =>
            setWishlistEnty({
              ...wishlistEntry,
              email: e.target.value,
            })
          }
          helperText="Email"
        ></TextField>
        <TextField
          required
          variant="filled"
          color="primary"
          type="phone"
          placeholder="Enter Phone Number"
          value={wishlistEntry.phone}
          onChange={(e) =>
            setWishlistEnty({
              ...wishlistEntry,
              phone: e.target.value,
            })
          }
          helperText="Phone Number"
        ></TextField>

        <TextField
          required
          variant="filled"
          color="primary"
          select
          label="Please select an option"
          placeholder="What type of goods are you looking for?"
          defaultValue=""
          value={wishlistEntry.type}
          onChange={(e) =>
            setWishlistEnty({
              ...wishlistEntry,
              type: e.target.value,
            })
          }
          helperText="What type of goods are you looking for?"
        >
          {leadType.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          required
          variant="filled"
          color="primary"
          type="text"
          placeholder="Enter Make"
          value={wishlistEntry.make}
          onChange={(e) =>
            setWishlistEnty({
              ...wishlistEntry,
              make: e.target.value,
            })
          }
          helperText="Make or Brand"
        ></TextField>

        <TextField
          required
          variant="filled"
          color="primary"
          type="text"
          placeholder="Enter Model"
          value={wishlistEntry.model}
          onChange={(e) =>
            setWishlistEnty({
              ...wishlistEntry,
              model: e.target.value,
            })
          }
          helperText="Model"
        ></TextField>

        <TextField
          required
          variant="filled"
          color="primary"
          type="text"
          placeholder="Enter Description"
          value={wishlistEntry.description}
          onChange={(e) =>
            setWishlistEnty({
              ...wishlistEntry,
              description: e.target.value,
            })
          }
          helperText="Add any extra details about item. Bracelets, Materials, Dials, Bezel,
          etc..."
        />
        <UploadImage
          setWishlistEnty={setWishlistEnty}
          {...wishlistEntry}
          loading={loading}
          wishlistEntry={wishlistEntry}
        />
        <Button
          variant="contained"
          color="primary"
          type="button"
          disabled={!formValid || loading}
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </Button>
      </Paper>
    </ContactFormWrapper>
  );
}
