import { Grid, ImageList, ImageListItem } from "@mui/material";

const ProductImages = ({ images, isSuccess, data }) => {
  return (
    // <Grid
    //   container
    //   spacing={2}
    //   direction="column"
    //   alignItems="center"
    //   justifyContent="center"
    // >
    //   <Grid item>
    //     <img
    //       src={images[0].image_url}
    //       alt={images[0].alt}
    //       style={{ maxWidth: "35vw" }}
    //     ></img>
    //   </Grid>
    //   <Grid item>
    //     <h4>{data.brand}</h4>
    //   </Grid>
    // </Grid>
    <>
      {isSuccess && (
        <ImageList sx={{ width: "100%", maxHeight: "600px" }} cols={1}>
          {images.map((image) => (
            <ImageListItem key={image.img}>
              <img
                src={image.image_url}
                // srcSet={`${image.image_url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={image.alt}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </>
  );
};

export default ProductImages;
