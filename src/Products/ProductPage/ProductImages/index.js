import { ImageList, ImageListItem } from "@mui/material";
import React from "react";

const ProductImages = ({ images, isSuccess }) => {
  return (
    <>
      {isSuccess && (
        <ImageList sx={{ width: "100%", maxHeight: "600px" }} cols={1}>
          {images.length > 0 ? (
            images.map((image, i) => (
              <ImageListItem key={i}>
                <img src={image.image_url} alt={image.alt} loading="lazy" />
              </ImageListItem>
            ))
          ) : (
            <ImageListItem>
              <img
                src={
                  "https://southwest-watches-media.s3.amazonaws.com/southwest-watches-logo-plain-01.png"
                }
                alt={"SWW Logo"}
                loading="lazy"
              />
            </ImageListItem>
          )}
        </ImageList>
      )}
    </>
  );
};

export default ProductImages;
