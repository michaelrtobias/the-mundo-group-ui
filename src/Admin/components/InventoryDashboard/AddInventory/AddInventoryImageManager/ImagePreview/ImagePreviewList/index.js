import ImagePreviewCard from "./ImagePreviewCard/index";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Paper,
  List,
  Grid,
  FormControlLabel,
} from "@mui/material";

const ImagePreviewList = ({ images, setSelectedImage }) => {
  return (
    <>
      <Paper
        sx={{
          minHeight: "30vh",
          maxHeight: "30vh",
          overflow: "auto",
        }}
        elevation={4}
      >
        <List>
          {images.map((image) => (
            <ImagePreviewCard
              url={image.image_url}
              setSelectedImage={setSelectedImage}
            />
          ))}
        </List>
      </Paper>
    </>
  );
};

export default ImagePreviewList;
