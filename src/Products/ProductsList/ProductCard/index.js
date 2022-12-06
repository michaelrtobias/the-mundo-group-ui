import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActions,
  Button,
  Box,
} from "@mui/material";

const ProductCard = ({
  watch: {
    brand: brandDefault,
    model: modelDefault,
    size,
    colorway,
    model_number: modelNumber,
    timestamp,
    dial: dialDefault,
    bracelet: braceletDefault,
    bezel: bezelDefault,
    images,
    description,
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
  const { brand, model, dial, bracelet, bezel } = formatData({
    brand: brandDefault,
    model: modelDefault,
    dial: dialDefault,
    bracelet: braceletDefault,
    bezel: bezelDefault,
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
            href={`/watches/${brand}/${colorway}`}
          >
            Learn More
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};

export default ProductCard;
