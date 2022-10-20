import { useEffect } from "react";
import { Paper } from "@mui/material";
import { Card, Grid } from "@mui/material";
import _ from "lodash";

import { useGetAllInventory } from "../../../../api/index";
import InventoryCard from "./InventoryItem/index";
const InventoryList = ({ searchTerm, showDrafts, showOnlyDrafts }) => {
  // read query hook
  const { data: items = [], isSuccess } = useGetAllInventory();

  const includesValue = (val, obj) => _.some(obj, (v) => _.includes(v, val));

  return (
    <>
      <Grid container spacing={2} sx={{ padding: 3 }}>
        {isSuccess &&
          items
            .filter((item) => {
              if (!showDrafts) {
                return item.draft !== true && includesValue(searchTerm, item);
              } else if (showDrafts && !showOnlyDrafts) {
                return (
                  (item.draft !== true || item.draft !== false) &&
                  includesValue(searchTerm, item)
                );
              } else if (showDrafts && showOnlyDrafts) {
                return item.draft === true && includesValue(searchTerm, item);
              }
              return item;
            })
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
