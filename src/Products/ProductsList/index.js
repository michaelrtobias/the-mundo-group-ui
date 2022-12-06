import { useGetAllInventory } from "../../api";
import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
const ProductList = () => {
  const { data: items = [], isSuccess } = useGetAllInventory();

  return (
    <Grid container spacing={2} sx={{ padding: 3 }}>
      {isSuccess &&
        items
          .filter(
            (item) => item.draft !== true
            //  && includesValue(searchTerm, item);
          )
          .map((watch, i) => (
            <Grid item xs={3} key={i}>
              <ProductCard watch={watch} />
            </Grid>
          ))}
    </Grid>
  );
};

export default ProductList;
