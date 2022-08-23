import UploadImage from "../../../../../Common/UploadImage/index";
import ImagePreview from "./ImagePreview/index";
import { Grid } from "@mui/material";
const uploadImageGridSizes = { xs: 12, sm: 6, lg: 4 };
const AddInventoryImageManager = ({
  handleImageChange,
  validationErrors,
  images,
}) => {
  return (
    <>
      {/*
    list of images
    carousel of images
    */}
      <Grid container spacing={2} direction="column">
        <Grid item>
          {images.length > 0 && <ImagePreview images={images} />}
        </Grid>
        <Grid item>
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
