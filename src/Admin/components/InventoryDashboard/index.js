import { useState } from "react";
import { Grid } from "@mui/material";
import InventoryList from "./InventoryList/index";
import AddInventory from "../InventoryDashboard/AddInventory/index";
import FilterInventory from "./FilterInventory/index";
const InventoryDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Grid container spacing={2} sx={{ padding: 3 }}>
        <Grid
          item
          xs={12}
          sx={{ textAlign: "center" }}
          alignItems="center"
          direction="column"
          justifyContent="center"
        >
          <h1>Inventory Dashboard</h1>
        </Grid>
        <Grid item>
          {/* //one line
              //search bar, add item and

            */}
          <AddInventory />
        </Grid>
        <Grid item>
          <FilterInventory setSearchTerm={setSearchTerm} />
        </Grid>
      </Grid>
      <InventoryList searchTerm={searchTerm} />
    </>
  );
};

export default InventoryDashboard;
