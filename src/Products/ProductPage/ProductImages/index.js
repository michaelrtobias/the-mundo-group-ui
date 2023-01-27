import { ImageList, ImageListItem } from "@mui/material";

const ProductImages = ({ images, isSuccess, data }) => {
  return (
    <>
      {isSuccess && (
        <ImageList sx={{ width: "100%", maxHeight: "600px" }} cols={1}>
          {images.map((image) => (
            <ImageListItem key={image.img}>
              <img src={image.image_url} alt={image.alt} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </>
  );
};

export default ProductImages;
