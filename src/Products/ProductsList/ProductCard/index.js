import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActions,
  Button,
} from "@mui/material";

const ProductCard = ({
  watch: {
    brand,
    model,
    size,
    colorway,
    model_number: modelNumber,
    timestamp,
    dial,
    bracelet,
    bezel,
    images,
    description,
  },
}) => {
  return (
    <Card>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {brand}
        </Typography> */}
      </CardContent>
      <CardMedia
        component="img"
        height="300"
        image={images[0].image_url}
        alt={images[0].alt}
      />
      <CardContent>
        <Typography variant="h5" gutterBottom component="div">
          {`${brand} ${model}`}
        </Typography>

        <Typography variant="body" color="text.secondary">
          {`${modelNumber} ${description}`}
        </Typography>
        <br></br>
        <Typography variant="body" color="text.secondary">
          {`${size} ${bracelet}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
