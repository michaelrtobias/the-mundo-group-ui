import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { LoadingButton } from "@mui/lab";
import axios from "axios";

export default function UploadImage({
  handleImageChange,
  pathKey,
  validationErrors = null,
  gridSizes,
}) {
  // const [URL, setUrl] = useState("");
  const [success, setSuccess] = useState(false);
  const [uploadInput, setUploadInput] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploadError, setUploadError] = useState(false);
  const [fileSelected, setFileSelected] = useState(false);
  const handleFileSelected = (files) => {
    setUploadInput(files);
    setFileSelected(true);
    setSuccess(false);
    setUploadError(false);
  };

  const handleButtonClick = (event) => {
    uploadImage();
    event.preventDefault();
  };

  const uploadImage = () => {
    var file = uploadInput[0];
    var fileParts = uploadInput[0].name.split(".");
    var fileName = `${fileParts[0]}`;
    setSuccess(false);
    setUploadError(false);
    setLoading(true);
    let headersConfig = {
      headers: {
        "Content-Type": file.type,
      },
    };
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

        var options = {
          headers: {
            "Content-Type": file.type,
          },
        };
        axios
          .put(signedRequest, file, options)
          .then(() => {
            setSuccess(true);
            setLoading(false);
          })
          .then(() => {
            handleImageChange(url, fileName);
          })
          .catch((error) => {
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
      <Grid item {...gridSizes}>
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
      <Grid item {...gridSizes}>
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
