import { Grid } from "@mui/material";
import _ from "lodash";

import { useGetAllInventory } from "../../../../api/index";
import InventoryCard from "./InventoryItem/index";
const InventoryList = ({ searchTerm, showDrafts, showOnlyDrafts }) => {
  const { data: items = [], isSuccess } = useGetAllInventory();

  const toLowerCaseObjStringValues = (item) => {
    return Object.fromEntries(
      Object.entries(item).map(([key, value]) => [
        key,
        typeof value == "string" ? value.toLowerCase() : value,
      ])
    );
  };
  const includesValue = (val, obj) =>
    _.some(toLowerCaseObjStringValues(obj), (v) =>
      _.includes(v, val.toLowerCase())
    );
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
              <Grid item xs={12} sm={6} lg={4} key={i}>
                <InventoryCard watch={watch} />
              </Grid>
            ))}
      </Grid>
    </>
  );
};

export default InventoryList;
