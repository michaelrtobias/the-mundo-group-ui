import { Grid, Skeleton } from "@mui/material";
import InventoryCard from "./InventoryItem/index";
import NoItemsAlert from "../../../../Common/NoItemsAlert";
import React from "react";
import _ from "lodash";
import { useGetAllInventory } from "../../../../api/index";
const InventoryList = ({ searchTerm, showDrafts, showOnlyDrafts }) => {
  const {
    data: items = [],
    isSuccess,
    isLoading,
    isError,
  } = useGetAllInventory();

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
        {isLoading &&
          Array.from(new Array(9)).map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Skeleton height="30vh" width="100%" variant="rectangular" />
            </Grid>
          ))}
        {isSuccess &&
          items.filter((item) => {
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
          }).length > 0 &&
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
        {isSuccess &&
          items.filter((item) => {
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
          }).length === 0 && <NoItemsAlert isError={isError} />}

        {isError && <NoItemsAlert isError={isError} />}
      </Grid>
    </>
  );
};

export default InventoryList;
