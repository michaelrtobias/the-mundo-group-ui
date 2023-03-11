import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ProductInquiryModal from "../../ProductInquiryModal/index";
import React from "react";
import { useHistory } from "react-router";
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
  const history = useHistory();
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

  const handleNavigateToProductPage = () => {
    history.push(`/watches/${brandDefault}/${colorway}`);
  };
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
        onClick={handleNavigateToProductPage}
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
          <ProductInquiryModal
            brand={brand}
            model={model}
            model_number={modelNumber}
            size={size}
            bracelet={bracelet}
            images={images}
            colorway={colorway}
          />
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
