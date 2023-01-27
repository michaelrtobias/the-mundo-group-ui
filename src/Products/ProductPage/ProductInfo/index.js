import {
  Typography,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
const ProductInfo = ({ watch }) => {
  const ContentFilter = (obj) => {
    const order = [
      "brand",
      "model",
      "model_number",
      "size",
      "dial",
      "bezel",
      "bracelet",
      "description",
    ];
    const filteredList = Object.keys(obj).filter(
      (key) =>
        key !== "images" &&
        key !== "colorway" &&
        key !== "timestamp" &&
        key !== "draft" &&
        key !== "brand" &&
        key !== "description"
    );
    let orderedList = filteredList.sort(
      (a, b) => order.indexOf(a) - order.indexOf(b)
    );

    return filteredList;
  };
  const formatKey = (key) => {
    let tempKey = key
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    if (key === "brand") {
      return "Manufacturer";
    } else {
      return tempKey.join(" ");
    }
  };
  return (
    <>
      <List>
        <ListItem disablePadding>
          <Typography variant="h6" color="text">
            <Typography variant="h6" color="text" display="inline">
              {`Manufacturer: `}
            </Typography>

            {`${watch.brand}`}
          </Typography>
        </ListItem>
      </List>
      <Divider />
      <List>
        {ContentFilter(watch).map((data, i) => (
          <ListItem disablePadding>
            <Typography variant="h6" color="text" key={i}>
              <Typography variant="h6" color="text" display="inline" key={i}>
                {`${formatKey(data)}: `}
              </Typography>

              {`${watch[data]}`}
            </Typography>
          </ListItem>
        ))}
      </List>
      <Divider />
    </>
  );
};

export default ProductInfo;
