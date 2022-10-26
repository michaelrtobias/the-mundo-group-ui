import React from "react";
import ProductList from "./ProductsList";
import { Grid, Typography, Box, AppBar } from "@mui/material";

const Products = () => {
  return (
    <div>
      <Box
        display="flex"
        sx={{ display: "flex", justifyContent: "center", marginBottom: "2vh" }}
      >
        <Typography variant="h2" alignCenter>
          Pre-Owned Watches
        </Typography>
      </Box>
      <ProductList />
    </div>
  );
};

export default Products;
