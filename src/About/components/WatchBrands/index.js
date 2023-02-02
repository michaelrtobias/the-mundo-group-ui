import { BrandList, BrandsSection } from "./style.js";
import { Card, CardContent, Grid, Paper, Typography } from "@mui/material/";
import { Brands } from "./brandsList";
import React from "react";
export default function WatchBrands() {
  return (
    <Paper elevation={8}>
      <BrandsSection>
        <h2>Some of the brands that we have provided our clients with:</h2>
        <BrandList>
          <Grid
            container
            spacing={1.5}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {Brands.map((brand, i) => (
              <Grid item xs={6} md={4} key={i}>
                <Card sx={{ height: "100%" }}>
                  <CardContent>
                    <Typography variant="h7">{brand.name}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </BrandList>
      </BrandsSection>
    </Paper>
  );
}
