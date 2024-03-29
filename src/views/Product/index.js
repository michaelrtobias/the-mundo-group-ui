import { Grid, Skeleton, Stack } from "@mui/material";
import ProductCanvas from "./ProductCanvas";
import ProductContact from "./ProductContact";
import ProductHeader from "./ProductHeader";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import React from "react";
import { useGetInventoryByColorway } from "../../api/hooks/useGetInventoryByColorway";
import { useParams } from "react-router-dom";
const ProductPage = () => {
  const { brand, colorway } = useParams();
  const { data, isSuccess, isLoading } = useGetInventoryByColorway({
    brand,
    colorway,
  });

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, sm: 4 }}
        justifyContent="center"
        alignItems="center"
        sx={{
          padding: "0vh 2vw 5vh 2vw",
        }}
      >
        <Grid item xs={12}>
          {isLoading ? (
            <Skeleton
              width="100%"
              height="30vh"
              variant="rectangular"
              align="center"
            />
          ) : (
            <ProductHeader data={data} />
          )}
        </Grid>
        <Grid item xs={12} md={8}>
          {isLoading ? (
            <Skeleton width="100%" height="50vh" variant="rectangular" />
          ) : (
            <ProductCanvas minHeight="620px">
              <ProductImages
                isSuccess={isSuccess}
                images={data.images}
                data={data}
                isLoading={isLoading}
              />
            </ProductCanvas>
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack spacing={2}>
            {isLoading ? (
              <Skeleton width="100%" height="25vh" variant="rectangular" />
            ) : (
              <ProductCanvas minHeight="200px" padding="10px">
                <ProductInfo watch={data} isLoading={isLoading} />
              </ProductCanvas>
            )}
            {isLoading ? (
              <Skeleton width="100%" height="25vh" variant="rectangular" />
            ) : (
              <ProductCanvas minHeight="24vh" padding="10px">
                <ProductContact watch={data} isLoading={isLoading} />
              </ProductCanvas>
            )}
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductPage;
