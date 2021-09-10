import React, { useState, useEffect } from "react";

// import Row from "react-bootstrap/Row";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router";
import UploadImage from "./components/UploadImage/index";
import { TextField, Paper, makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   // display: "flex",
  //   // flexWrap: "wrap",
  //   // "& > *": {
  //   //   margin: theme.spacing(1),
  //   //   padding: theme.spacing(1),
  //   // },
  //
  // },
  root: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    display: "grid",
    gridTemplateColumns: "3fr 3fr 3fr",
    gridColumnGap: "30px",
    gridRowGap: "10px",
  },
}));

export default function ContactUs() {
  const [wishlistEntry, setWishlistEnty] = useState({});
  const [loading, setLoading] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [leadType, setLeadType] = useState([
    "watch",
    "Parts & Accessories",
    "Diamonds",
    "Bracelets",
    "Gold Link",
    "Belts & Buckels",
    "Leather Goods",
    "Other",
  ]);
  const history = useHistory();
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
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
        history.push("/");
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
    setFormValid(isEmailSet && isPhoneSet);
  }, [wishlistEntry]);

  return (
    <>
      <Paper className={classes.root}>
        <div>
          <h2>Wishlist</h2>
          <p>Please fill out the form below to help us find your next piece</p>
        </div>
        <TextField
          type="text"
          value={wishlistEntry.first_name || ""}
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
          type="text"
          placeholder="Enter Last Name"
          value={wishlistEntry.last_name || ""}
          onChange={(e) =>
            setWishlistEnty({
              ...wishlistEntry,
              last_name: e.target.value,
            })
          }
          helperText="Last Name"
        ></TextField>
        <TextField
          type="email"
          placeholder="Enter Email"
          value={wishlistEntry.email || ""}
          onChange={(e) =>
            setWishlistEnty({
              ...wishlistEntry,
              email: e.target.value,
            })
          }
          helperText="Email"
        ></TextField>
        <TextField
          type="phone"
          placeholder="Enter Phone Number"
          value={wishlistEntry.phone || ""}
          onChange={(e) =>
            setWishlistEnty({
              ...wishlistEntry,
              phone: e.target.value,
            })
          }
          helperText="Phone Number"
        ></TextField>

        <TextField
          as="select"
          defaultValue="Type..."
          value={wishlistEntry.type || ""}
          onChange={(e) =>
            setWishlistEnty({
              ...wishlistEntry,
              type: e.target.value,
            })
          }
          helperText="What type of goods are you looking for?"
        >
          <option>Type...</option>
          {leadType.map((type) => {
            <option>{type}</option>;
          })}
        </TextField>

        <TextField
          type="text"
          placeholder="Enter Make"
          value={wishlistEntry.make || ""}
          onChange={(e) =>
            setWishlistEnty({
              ...wishlistEntry,
              make: e.target.value,
            })
          }
          helperText="Make or Brand"
        ></TextField>

        <TextField
          type="text"
          placeholder="Enter Model"
          value={wishlistEntry.model || ""}
          onChange={(e) =>
            setWishlistEnty({
              ...wishlistEntry,
              model: e.target.value,
            })
          }
          helperText="Model"
        ></TextField>

        <TextField
          type="text"
          placeholder="Enter Description"
          value={wishlistEntry.description || ""}
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
    </>
  );
}
