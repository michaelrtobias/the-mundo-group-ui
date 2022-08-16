import { Paper } from "@mui/material";
import { Card, Grid } from "@mui/material";

import { useGetAllInventory } from "../../../../api/index";
import InventoryCard from "./InventoryItem/index";
const InventoryList = ({ searchTerm }) => {
  // read query hook
  const { data: items = [], isSuccess, isLoading } = useGetAllInventory();

  return (
    <>
      <Grid container spacing={2} sx={{ padding: 3 }}>
        {isSuccess &&
          items
            // .filter((item) => Object.keys(item).includes(searchTerm))
            .map((watch, i) => (
              <Grid item xs={4} key={i}>
                <InventoryCard watch={watch} />
              </Grid>
            ))}
      </Grid>
    </>
  );
};

export default InventoryList;
