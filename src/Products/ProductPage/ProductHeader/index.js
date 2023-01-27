import { Typography, Grid, Box } from "@mui/material";

const ProductHeader = ({ data }) => {
  return (
    <Box sx={{ marginBottom: "5vh" }}>
      <Typography align="center" variant="h2">
        {data.brand} {data.model}
      </Typography>
      <Typography align="center" variant="h3">
        {data.model_number} {data.size}
      </Typography>
    </Box>
  );
};

export default ProductHeader;
