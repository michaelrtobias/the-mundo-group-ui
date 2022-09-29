import { CardMedia, Grid, Button } from "@mui/material";
import { useState } from "react";
const CardImagePreview = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handleImageChange = (direction) => {
    if (direction === "next" && currentImageIndex !== images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else if (
      direction === "next" &&
      currentImageIndex === images.length - 1
    ) {
      setCurrentImageIndex(0);
    } else if (direction === "previous" && currentImageIndex !== 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else if (direction === "previous" && currentImageIndex === 0) {
      setCurrentImageIndex(images.length - 1);
    }
  };
  return (
    <>
      <CardMedia
        component="img"
        height="180"
        image={images[currentImageIndex].image_url}
        alt="Paella dish"
      />
      {images.length > 1 && (
        <Grid
          container
          spacing={2}
          sx={{ marginTop: ".25vh", padding: "0 1vw" }}
        >
          <Grid item xs={6}>
            <Button
              variant="outlined"
              fullWidth
              size="small"
              color="primary"
              onClick={() => handleImageChange("previous")}
            >
              Previous Photo
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="outlined"
              fullWidth
              size="small"
              color="primary"
              onClick={() => handleImageChange("next")}
            >
              Next Photo
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default CardImagePreview;
