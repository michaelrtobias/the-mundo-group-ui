import { useState, useEffect } from "react";
import ImagePreviewList from "./ImagePreviewList/index";
import Preview from "./Preview/index";
import { Grid } from "@mui/material";
const ImagePreview = ({ images, handleDeleteImage }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    console.log("images", images);
    if (selectedImageIndex >= 0) {
      setSelectedImageIndex(images.length - 1);
    }
  }, [images]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} lg={4}>
        <ImagePreviewList
          images={images}
          setSelectedImageIndex={setSelectedImageIndex}
          selectedImageIndex={selectedImageIndex}
          handleDeleteImage={handleDeleteImage}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={8}>
        <Preview images={images} selectedImageIndex={selectedImageIndex} />
      </Grid>
    </Grid>
  );
};

export default ImagePreview;
