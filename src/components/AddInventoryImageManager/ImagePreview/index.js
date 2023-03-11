import { Grid } from "@mui/material";
import ImagePreviewList from "./ImagePreviewList/index";
import Preview from "./Preview/index";
import React from "react";

const ImagePreview = ({
  images,
  handleDeleteImage,
  isEdit,
  selectedImageIndex,
  setSelectedImageIndex,
  handleMoveImage,
}) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} lg={4}>
        <ImagePreviewList
          images={images}
          setSelectedImageIndex={setSelectedImageIndex}
          selectedImageIndex={selectedImageIndex}
          handleDeleteImage={handleDeleteImage}
          isEdit={isEdit}
          handleMoveImage={handleMoveImage}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={8}>
        <Preview
          images={images}
          selectedImageIndex={selectedImageIndex}
          isEdit={isEdit}
        />
      </Grid>
    </Grid>
  );
};

export default ImagePreview;
