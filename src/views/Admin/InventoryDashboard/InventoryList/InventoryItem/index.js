import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import CardImagePreview from "./CardImagePreview";
import DeleteInventory from "../../DeleteInventory/index";
import EditImages from "../../EditImages/index";
import EditInventory from "../../EditInventory/index";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import React from "react";
import { red } from "@mui/material/colors";
const ContentFilter = (obj) => {
  return Object.keys(obj).filter(
    (key) =>
      key !== "images" &&
      key !== "colorway" &&
      key !== "timestamp" &&
      key !== "draft"
  );
};

const InventoryItem = ({ watch }) => {
  return (
    <Card sx={{ minHeight: "100%" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {watch.brand.charAt(0).toUpperCase()}
          </Avatar>
        }
        action={
          <>
            <EditInventory watch={watch} />
            <EditImages watch={watch} />
            <DeleteInventory watch={watch} />
            <IconButton
              aria-label="preview"
              href={`/watches/${watch.brand}/${watch.colorway}`}
            >
              <OpenInNewIcon />
            </IconButton>
          </>
        }
        title={`${watch.brand} ${watch.model}`}
        subheader={watch.model_number}
      />

      {watch.images.length > 0 && <CardImagePreview images={watch.images} />}
      <CardContent>
        <Grid container spacing={1}>
          {ContentFilter(watch).map((data, i) => (
            <Grid item xs={12} sm={6} key={i}>
              <Typography variant="body2" color="text" key={i}>
                {`${data}: ${watch[data]}`}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default InventoryItem;
