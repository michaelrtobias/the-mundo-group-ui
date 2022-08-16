import { useState } from "react";
import { Grid } from "@mui/material";
import InventoryList from "./InventoryList/index";
import AddInventory from "../InventoryDashboard/AddInventory/index";
import FilterInventory from "./FilterInventory/index";
const InventoryDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <h1>Inventory Dashboard</h1>
      {/* //one line
            //search bar, add item and

      */}
      <Grid container spacing={2}>
        <Grid item>
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
