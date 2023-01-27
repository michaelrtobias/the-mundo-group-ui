import { useGetAllInventory } from "../../api";
import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import _ from "lodash";

const ProductList = ({ searchTerm }) => {
  const { data: items = [], isSuccess } = useGetAllInventory();
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
      {isSuccess &&
        items
          .filter(
            (item) => item.draft !== true && includesValue(searchTerm, item)
          )
          .map((watch, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <ProductCard watch={watch} />
            </Grid>
          ))}
    </Grid>
  );
};

export default ProductList;
