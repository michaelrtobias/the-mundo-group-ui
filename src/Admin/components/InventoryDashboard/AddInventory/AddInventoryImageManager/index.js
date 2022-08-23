import UploadImage from "../../../../../Common/UploadImage/index";
import ImagePreview from "./ImagePreview/index";
import { Grid } from "@mui/material";
const uploadImageGridSizes = { xs: 12, sm: 6, lg: 4 };
const AddInventoryImageManager = ({
  handleImageChange,
  validationErrors,
  images,
  handleDeleteImage,
}) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={6}>
          {images.length > 0 && (
            <ImagePreview
              images={images}
              handleDeleteImage={handleDeleteImage}
            />
          )}
        </Grid>
        <Grid item xs={12} sx={6}>
          <UploadImage
            handleImageChange={handleImageChange}
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
