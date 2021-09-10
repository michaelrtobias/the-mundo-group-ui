import React, { useState } from "react";
import axios from "axios";
import { Col, Container, Spinner } from "react-bootstrap";
import { TextField, makeStyles, Button, colors } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";

// import Row from "react-bootstrap/Row";

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
  doneicon: {
    color: colors.green[500],
  },
}));
export default function UploadImage(Props: UploadButtonProps) {
  const [URL, setUrl] = useState("");
  const [success, setSuccess] = useState(false);
  const [uploadInput, setUploadInput] = useState([]);
  const [loading, setLoading] = useState(false);

  const [fileSelected, setFileSelected] = useState(false);
  const classes = useStyles();

  const handleFileSelected = (files, e) => {
    setUploadInput(files);
    setFileSelected(true);
  };

  const handleButtonClick = (e) => {
    uploadImage();
    e.preventDefault();
  };

  const uploadImage = (e) => {
    var file = uploadInput[0];
    console.log("file:");
    console.log(file);
    var fileParts = uploadInput[0].name.split(".");
    console.log("file parts: " + fileParts);
    var fileName = fileParts[0];
    console.log("filename: " + fileName);
    var fileType = fileParts[1];
    console.log("file type: " + fileType);
    setSuccess(false);
    setLoading(true);
    let headersConfig = {
      headers: {
        "Content-Type": file.type,
      },
    };
    console.log("Preparing the upload");
    axios
      .post(
        "https://omv9j6woq7.execute-api.us-east-1.amazonaws.com/dev/wishlist/images",
        {
          fileName: file.name,
          fileType: file.type,
        },
        headersConfig
      )
      .then((response) => {
        var returnedData = response.data;
        var signedRequest = returnedData.signedRequest;
        var url = returnedData.url;
        setUrl(url);
        console.log("Recieved a signed request " + signedRequest);
        var options = {
          headers: {
            "Content-Type": file.type,
          },
        };
        axios
          .put(signedRequest, file, options)
          .then((result) => {
            console.log("Response from s3");
            setSuccess(true);
            setLoading(false);
          })
          .then((e) => {
            Props.setWishlistEnty({
              ...Props.wishlistEntry,
              image_URL: URL,
            });
            e.preventDefault();
          })
          .catch((error) => {
            throw error;
          });
      })
      .catch((err) => {
        throw err;
      });
  };
  return (
    <div>
      <TextField
        id="productFormImageUplaod"
        type="file"
        onChange={(e) => {
          handleFileSelected(e.target.files, e);
        }}
      ></TextField>
      {loading ? (
        <Button variant="contained" color="primary" disabled>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          <span className="visually-hidden">Loading...</span>
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          type="button"
          disabled={!fileSelected || loading}
          onClick={(e) => {
            handleButtonClick(e);
          }}
        >
          Upload Image
        </Button>
      )}
      {success && <DoneIcon className={classes.doneicon} fontSize="large" />}
    </div>
  );
}
