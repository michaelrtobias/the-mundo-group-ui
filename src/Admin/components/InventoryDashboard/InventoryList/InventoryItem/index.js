import * as React from "react";
import {
  Card,
  Grid,
  CardContent,
  CardHeader,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  CardMedia,
} from "@mui/material";

import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteInventory from "../../DeleteInventory/index";
import EditInventory from "../../EditInventory/index";
import EditImages from "../../EditImages/index";
import CardImagePreview from "./CardImagePreview";
const ContentFilter = (obj) => {
  return Object.keys(obj).filter(
    (key) => key !== "images" && key !== "colorway" && key !== "timestamp"
  );
};

const InventoryItem = ({ watch }) => {
  //handle change image click
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
            <IconButton aria-label="preview">
              <VisibilityIcon />
            </IconButton>
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          </>
        }
        title={`${watch.brand} ${watch.model}`}
        subheader={watch.model_number}
      />

      <CardImagePreview images={watch.images} />
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
