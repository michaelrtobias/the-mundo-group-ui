import { useState } from "react";
import ProductList from "./ProductsList";
import SearchFilter from "../Common/SearchFilter";
import { Typography, Stack, Box, Paper, Grid } from "@mui/material";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Stack>
      <Box
        display="flex"
        sx={{ display: "flex", justifyContent: "center", marginBottom: "2vh" }}
      >
        <Typography variant="h2" alignCenter>
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
