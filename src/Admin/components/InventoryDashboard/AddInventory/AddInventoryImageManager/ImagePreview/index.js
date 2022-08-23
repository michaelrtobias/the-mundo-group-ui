import { useState } from "react";
import ImagePreviewList from "./ImagePreviewList/index";
import Preview from "./Preview/index";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Paper,
  Grid,
  FormControlLabel,
} from "@mui/material";
const ImagePreview = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0].image_url);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} lg={4}>
        <ImagePreviewList images={images} setSelectedImage={setSelectedImage} />
      </Grid>
      <Grid item xs={12} sm={6} lg={8}>
        <Preview url={selectedImage} />
      </Grid>
    </Grid>
  );
};

export default ImagePreview;
