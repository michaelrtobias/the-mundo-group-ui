import { Grid } from "@mui/material";
import FilterInventory from "./FilterInventory/index";
import AddInventory from "./AddInventory";
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
      noWrap
      flexDirection="row"
      sx={{ padding: "0 2vw" }}
    >
      <Grid item xs={4} FullWidth>
        <AddInventory />
      </Grid>
      <Grid item xs={4}>
        <FilterInventory
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
        />
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
