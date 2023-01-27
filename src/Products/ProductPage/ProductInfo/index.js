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
    console.log("object", obj);
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
    console.log("filteredList", filteredList);
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
          <Typography variant="h6" color="text">
            <Typography variant="h6" color="text" display="inline">
              {`Manufacturer: `}
            </Typography>

            {`${watch.brand}`}
          </Typography>
        </ListItem>
        <Divider component="li" />
        {ContentFilter(watch).map((key, i) => (
          <ListItem disablePadding>
            <Typography variant="h6" color="text" key={i}>
              <Typography variant="h6" color="text" display="inline" key={i}>
                {`${formatKey(key)}: `}
              </Typography>

              {`${watch[key]}`}
            </Typography>
          </ListItem>
        ))}
      </List>
      <Divider />
    </>
  );
};

export default ProductInfo;
