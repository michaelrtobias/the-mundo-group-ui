import { useParams } from "react-router-dom";
import { useGetInventoryByColorway } from "../../api";
import { Typography, Grid, Stack } from "@mui/material";
import ProductImages from "./ProductImages";
import ProductCanvas from "./ProductCanvas";
import ProductInfo from "./ProductInfo";
import ProductHeader from "./ProductHeader";
import ProductContact from "./ProductContact";
const ProductPage = () => {
  const { brand, colorway } = useParams();
  const { data, isSuccess } = useGetInventoryByColorway({
    brand,
    colorway,
  });

  return (
    <>
      {isSuccess && (
        <>
          <ProductHeader data={data} />

          <Grid
            container
            spacing={{ xs: 2, sm: 4 }}
            justifyContent="center"
            sx={{
              padding: "0vh 2vw 5vh 2vw",
            }}
          >
            <Grid item xs={12} sm={8}>
              <ProductCanvas minHeight="620px">
                <ProductImages
                  isSuccess={isSuccess}
                  images={data.images}
                  data={data}
                />
              </ProductCanvas>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Stack spacing={2}>
                <ProductCanvas minHeight="200px" padding="10px">
                  <ProductInfo watch={data} />
                </ProductCanvas>

                <ProductCanvas minHeight="200px" padding="10px">
                  <ProductContact watch={data} />
                </ProductCanvas>
              </Stack>{" "}
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default ProductPage;

// : {
//   // items: {
//   //   model,
//   //   model_number,
//   //   brand: itemBrand,
//   //   size,
//   //   bezel,
//   //   images,
//   //   description,
//   //   dial,
//   //   bracelet,
//   // },
// },
