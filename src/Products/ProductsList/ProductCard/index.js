import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const ProductCard = ({
  watch: {
    brand: brandDefault,
    model: modelDefault,
    size,
    colorway,
    model_number: modelNumber,
    bracelet: braceletDefault,
    images,
  },
}) => {
  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);
  const formatData = (obj) => {
    let results = {};
    const keys = Object.keys(obj);
    keys.forEach((key) => {
      results[key] = capitalizeFirstLetter(obj[key]);
    });
    return results;
  };
  const { brand, model, bracelet } = formatData({
    brand: brandDefault,
    model: modelDefault,
    bracelet: braceletDefault,
  });

  return (
    <Card sx={{ minHeight: "100%" }}>
      <CardMedia
        component="img"
        height="300"
        image={
          images.length > 0
            ? images[0].image_url
            : "https://southwest-watches-media.s3.amazonaws.com/southwest-watches-logo-plain-01.png"
        }
        alt={images.length > 0 ? images[0].alt : "alt-text"}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom component="div" noWrap>
            {`${brand} ${model}`}
          </Typography>

          <Typography variant="body" color="text.secondary" noWrap>
            {`${modelNumber} ${size} ${bracelet}`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" size="small" href="/contact">
            Inquire
          </Button>
          <Button
            variant="outlined"
            size="small"
            href={`/watches/${brandDefault}/${colorway}`}
          >
            Learn More
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};

export default ProductCard;
