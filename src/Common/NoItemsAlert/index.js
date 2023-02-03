import { Alert, Grid } from "@mui/material";
import React from "react";

const NoItemsAlert = ({ isError }) => {
  return (
    <Grid item xs={12}>
      <Alert severity={isError ? "error" : "info"} variant="filled">
        {isError
          ? "There has been an error loading items. Please try again."
          : "There is no current inventory."}
      </Alert>
    </Grid>
  );
};

export default NoItemsAlert;
