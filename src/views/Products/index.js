import { Box, Paper, Stack, Typography } from "@mui/material";
import ProductList from "./ProductsList";
import React from "react";
import SearchFilter from "../../components/SearchFilter";
import { useState } from "react";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Stack>
      <Box
        display="flex"
        sx={{ display: "flex", justifyContent: "center", marginBottom: "2vh" }}
      >
        <Typography variant="h2" align="center">
          Pre-Owned Watches
        </Typography>
      </Box>
      <Paper sx={{ margin: "0px 1.5vw" }} elevation={1}>
        <SearchFilter
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
          fullWidth
        />
      </Paper>
      <ProductList searchTerm={searchTerm} />
    </Stack>
  );
};

export default Products;
