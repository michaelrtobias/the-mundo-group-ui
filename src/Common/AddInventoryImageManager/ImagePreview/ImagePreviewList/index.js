import { List, Paper } from "@mui/material";
import ImagePreviewCard from "./ImagePreviewCard/index";
import React from "react";

const ImagePreviewList = ({
  images,
  setSelectedImageIndex,
  selectedImageIndex,
  handleDeleteImage,
  handleMoveImage,
  isEdit,
}) => {
  return (
    <>
      <Paper
        sx={{
          height: isEdit ? "40vh" : "20vh",
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
              isEdit={isEdit}
              length={images.length}
              handleMoveImage={handleMoveImage}
            />
          ))}
        </List>
      </Paper>
    </>
  );
};

export default ImagePreviewList;
