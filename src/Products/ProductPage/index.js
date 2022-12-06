import { useParams } from "react-router-dom";
import { useGetInventoryByColorway } from "../../api";
import { Typography, Grid } from "@mui/material";
import ProductImages from "./ProductImages";
import ProductCanvas from "./ProductCanvas";
import ProductInfo from "./ProductInfo";
import ProductHeader from "./ProductHeader";
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
            spacing={4}
            alignItems="center"
            justifyContent="center"
            sx={{
              padding: "0vh 25vw 5vh 5vw",
            }}
          >
            <Grid item xs={12} sm={8}>
              <ProductCanvas>
                <ProductImages
                  isSuccess={isSuccess}
                  images={data.images}
                  data={data}
                />
              </ProductCanvas>
            </Grid>
            <Grid item xs={12} sm={4}>
              <ProductCanvas>
                <ProductInfo watch={data} />
              </ProductCanvas>
            </Grid>
          </Grid>
          {/* <ProductImages images={images} /> */}
        </>
      )}
      {/* {isSuccess && <h2>{item.brand}</h2>} */}
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
