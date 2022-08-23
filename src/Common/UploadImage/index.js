import React, { useState } from "react";
import axios from "axios";
import { TextField, colors, Grid } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  doneicon: {
    color: colors.green[500],
  },
}));
export default function UploadImage({
  handleImageChange,
  pathKey,
  validationErrors = null,
}) {
  const [URL, setUrl] = useState("");
  const [success, setSuccess] = useState(false);
  const [uploadInput, setUploadInput] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploadError, setUploadError] = useState(false);
  const [fileSelected, setFileSelected] = useState(false);
  const handleFileSelected = (files, e) => {
    setUploadInput(files);
    setFileSelected(true);
    setSuccess(false);
    setUploadError(false);
  };

  const handleButtonClick = (event) => {
    uploadImage();
    console.log("before");
    event.preventDefault();
    console.log("after");
  };

  const uploadImage = () => {
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
    setUploadError(false);
    setLoading(true);
    let headersConfig = {
      headers: {
        "Content-Type": file.type,
      },
    };
    console.log("Preparing the upload");
    axios
      .post(
        "https://8zrqystn2h.execute-api.us-east-1.amazonaws.com/prod/images",
        {
          fileName: file.name,
          fileType: file.type,
          pathKey: pathKey,
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
          .then(() => {
            console.log("URL", URL);
            console.log("url", url);
            handleImageChange(url, fileName);
          })
          .catch((error) => {
            console.log(error.message);
            throw error.message;
          });
      })
      .catch((err) => {
        setLoading(false);
        setUploadError(true);
        throw err;
      });
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <TextField
          id="productFormImageUplaod"
          type="file"
          variant="filled"
          disabled={loading}
          fullWidth
          error={!!validationErrors}
          helperText={
            uploadError
              ? "Error with image upload. Please try again."
              : validationErrors
              ? validationErrors
              : "Please upload a picture of item (Optional)"
          }
          onChange={(e) => {
            handleFileSelected(e.target.files, e);
          }}
        ></TextField>
      </Grid>
      <Grid item xs={12} md={6}>
        <LoadingButton
          fullWidth
          loading={loading}
          disabled={!fileSelected}
          variant="contained"
          sx={{ padding: "1em 0px" }}
          onClick={(e) => {
            handleButtonClick(e);
          }}
          color={
            success ? "success" : !success && uploadError ? "error" : "primary"
          }
        >
          Upload Image
        </LoadingButton>
      </Grid>
    </Grid>
  );
}
