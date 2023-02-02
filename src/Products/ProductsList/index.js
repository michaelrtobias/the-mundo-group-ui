import { Alert, Grid, Skeleton } from "@mui/material";
import ProductCard from "./ProductCard";
import React from "react";
import _ from "lodash";
import { useGetAllInventory } from "../../api";

const ProductList = ({ searchTerm }) => {
  const { data: items = [], isSuccess, isLoading } = useGetAllInventory();
  const toLowerCaseObjStringValues = (item) => {
    return Object.fromEntries(
      Object.entries(item).map(([key, value]) => [
        key,
        typeof value == "string" ? value.toLowerCase() : value,
      ])
    );
  };
  const includesValue = (val, obj) =>
    _.some(toLowerCaseObjStringValues(obj), (v) =>
      _.includes(v, val.toLowerCase())
    );
  return (
    <Grid container spacing={2} sx={{ padding: 3 }}>
      {isLoading &&
        Array.from(new Array(9)).map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Skeleton height="45vh" width="100%" variant="rectangular" />
          </Grid>
        ))}
      {isSuccess &&
        items.filter(
          (item) => item.draft !== true && includesValue(searchTerm, item)
        ).length > 0 &&
        items
          .filter(
            (item) => item.draft !== true && includesValue(searchTerm, item)
          )
          .map((watch, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <ProductCard watch={watch} />
            </Grid>
          ))}
      {isSuccess &&
        items.filter(
          (item) => item.draft !== true && includesValue(searchTerm, item)
        ).length === 0 && (
          <Alert severity="info">There is no current inventory</Alert>
        )}
    </Grid>
  );
};

export default ProductList;
