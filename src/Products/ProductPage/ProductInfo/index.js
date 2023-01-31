import { Typography, List, ListItem, Divider } from "@mui/material";
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
        key !== "description" &&
        obj[key] !== "" &&
        obj[key] !== null
    );
    filteredList.sort((a, b) => order.indexOf(a) - order.indexOf(b));

    return filteredList;
  };
  const formatKey = (key) => {
    let tempKey = key
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    return tempKey.join(" ");
  };
  return (
    <>
      <List>
        <ListItem disablePadding>
          <Typography variant="h6" color="text" display="inline">
            {`Manufacturer: ${watch.brand}`}
          </Typography>
        </ListItem>
        <Divider component="li" />
        {ContentFilter(watch).map((key, i) => (
          <ListItem disablePadding key={i}>
            <Typography variant="h6" color="text" display="inline">
              {`${formatKey(key)}: ${watch[key]}`}
            </Typography>
          </ListItem>
        ))}
      </List>
      <Divider />
    </>
  );
};

export default ProductInfo;
