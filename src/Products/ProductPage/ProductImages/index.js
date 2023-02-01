import React from "react";

import { ImageList, ImageListItem } from "@mui/material";

const ProductImages = ({ images, isSuccess }) => {
  return (
    <>
      {isSuccess && (
        <ImageList sx={{ width: "100%", maxHeight: "600px" }} cols={1}>
          {images.map((image, i) => (
            <ImageListItem key={i}>
              <img src={image.image_url} alt={image.alt} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </>
  );
};

export default ProductImages;
