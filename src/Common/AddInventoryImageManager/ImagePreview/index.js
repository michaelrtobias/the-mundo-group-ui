import React from "react";

import { useEffect } from "react";
import ImagePreviewList from "./ImagePreviewList/index";
import Preview from "./Preview/index";
import { Grid } from "@mui/material";
const ImagePreview = ({
  images,
  handleDeleteImage,
  isEdit,
  selectedImageIndex,
  setSelectedImageIndex,
  handleMoveImage,
  setIsMove,
  isMove,
}) => {
  useEffect(() => {
    if (!isMove && selectedImageIndex >= 0) {
      setSelectedImageIndex(images.length - 1);
    }
    setIsMove(false);
  }, [images]);

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
