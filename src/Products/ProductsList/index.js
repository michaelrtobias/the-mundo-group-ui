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
            <Grid item xs={4} key={i}>
              <ProductCard watch={watch} />
            </Grid>
          ))}
    </Grid>
  );
};

export default ProductList;

// model: ""
// colorway: "cubs-blue-white"
// model_number: "cubs"
// timestamp: "2022-10-01T04:30:30.703Z"
// brand: "chicago"
// draft: false
// dial: "blue"
// bracelet: ""
// bezel: "white"
// ▶ images 2 items
// description: ""
