import { Grid } from "@mui/material";
import ImagePreview from "./ImagePreview/index";
import React from "react";
import UploadImage from "../UploadImage/index";
const uploadImageGridSizes = { xs: 12, sm: 6, lg: 4 };
const AddInventoryImageManager = ({
  handleAddImage,
  validationErrors,
  images,
  handleDeleteImage,
  isEdit,
  selectedImageIndex,
  setSelectedImageIndex,
  handleMoveImage,
}) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {images.length > 0 && (
            <ImagePreview
              images={images}
              handleDeleteImage={handleDeleteImage}
              isEdit={isEdit}
              selectedImageIndex={selectedImageIndex}
              setSelectedImageIndex={setSelectedImageIndex}
              handleMoveImage={handleMoveImage}
            />
          )}
        </Grid>
        <Grid item xs={12}>
          <UploadImage
            handleImageChange={handleAddImage}
            validationErrors={validationErrors}
            pathKey="inventory"
            gridSizes={uploadImageGridSizes}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default AddInventoryImageManager;
