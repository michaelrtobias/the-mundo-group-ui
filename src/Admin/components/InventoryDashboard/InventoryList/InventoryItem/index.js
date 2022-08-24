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
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteInventory from "../../DeleteInventory/index";
import EditInventory from "../../EditInventory/index";
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
            R
          </Avatar>
        }
        action={
          <>
            <EditInventory watch={watch} />
            <DeleteInventory watch={watch} />
            <IconButton aria-label="preview">
              <VisibilityIcon />
            </IconButton>
            <IconButton aria-label="images">
              <ImageSearchIcon />
            </IconButton>
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          </>
        }
        title={`${watch.brand} ${watch.model}`}
        subheader={watch.model_number}
      />
      {/* {watch.images.map((image) => (
        <CardMedia
          component="img"
          height="194"
          image={image.image_url}
          alt="Paella dish"
        />
      ))} */}
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
