import { BrandList, BrandsSection } from "./style.js";
import { Paper, Card, CardContent, Typography, Grid } from "@mui/material/";
import { Brands } from "./brandsList";
export default function WatchBrands() {
  return (
    <Paper>
      <BrandsSection>
        <h2>Some of the brands that we have provided our clients with:</h2>
        <BrandList>
          <Grid container spacing={2}>
            {Brands.map((brand) => (
              <Grid item xs={4}>
                <Card>
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
