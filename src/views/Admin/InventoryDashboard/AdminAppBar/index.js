import AddInventory from "./AddInventory";
import { Grid } from "@mui/material";
import React from "react";
import SearchFilter from "../../../../components/SearchFilter";
import ShowDrafts from "./ShowDrafts";
const AdminAppBar = ({
  setSearchTerm,
  setShowDrafts,
  searchTerm,
  showDrafts,
  showOnlyDrafts,
  setShowOnlyDrafts,
}) => {
  return (
    <Grid
      container
      spacing={2}
      wrap="nowrap"
      flexDirection="row"
      sx={{ padding: "0 2vw" }}
    >
      <Grid item xs={4}>
        <AddInventory />
      </Grid>
      <Grid item xs={4}>
        <SearchFilter setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      </Grid>
      <Grid item xs={4}>
        <ShowDrafts
          setShowDrafts={setShowDrafts}
          showDrafts={showDrafts}
          showOnlyDrafts={showOnlyDrafts}
          setShowOnlyDrafts={setShowOnlyDrafts}
        />
      </Grid>
    </Grid>
  );
};

export default AdminAppBar;
