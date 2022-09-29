import UploadImage from "../UploadImage/index";
import ImagePreview from "./ImagePreview/index";
import { Grid } from "@mui/material";
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
  isMove,
  setIsMove,
}) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={6}>
          {images.length > 0 && (
            <ImagePreview
              images={images}
              handleDeleteImage={handleDeleteImage}
              isEdit={isEdit}
              selectedImageIndex={selectedImageIndex}
              setSelectedImageIndex={setSelectedImageIndex}
              handleMoveImage={handleMoveImage}
              isMove={isMove}
              setIsMove={setIsMove}
            />
          )}
        </Grid>
        <Grid item xs={12} sx={6}>
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
