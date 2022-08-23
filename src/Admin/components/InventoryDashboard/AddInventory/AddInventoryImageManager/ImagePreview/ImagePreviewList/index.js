import ImagePreviewCard from "./ImagePreviewCard/index";
import { Paper, List } from "@mui/material";

const ImagePreviewList = ({
  images,
  setSelectedImageIndex,
  selectedImageIndex,
  handleDeleteImage,
}) => {
  return (
    <>
      <Paper
        sx={{
          height: "20vh",
          width: "100%",
          overflow: "auto",
        }}
        elevation={4}
      >
        <List>
          {images.map((image, i) => (
            <ImagePreviewCard
              url={image.image_url}
              setSelectedImageIndex={setSelectedImageIndex}
              selectedImageIndex={selectedImageIndex}
              handleDeleteImage={handleDeleteImage}
              key={i}
              index={i}
            />
          ))}
        </List>
      </Paper>
    </>
  );
};

export default ImagePreviewList;
