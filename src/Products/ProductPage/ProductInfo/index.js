import { Typography, Grid } from "@mui/material";

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
    let orderedList = [];
    const filteredList = Object.keys(obj).filter(
      (key) =>
        key !== "images" &&
        key !== "colorway" &&
        key !== "timestamp" &&
        key !== "draft"
    );

    console.log(orderedList);
    return filteredList;
  };
  const formatKey = (key) => {
    let tempKey = key
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    console.log("tempKey", tempKey);
    return tempKey.join(" ");
  };
  return (
    <>
      <Grid container spacing={1}>
        {ContentFilter(watch).map((data, i) => (
          <Grid item xs={12}>
            <Typography variant="body1" color="text" key={i}>
              <Typography variant="h6" color="text" display="inline" key={i}>
                {`${formatKey(data)}: `}
              </Typography>

              {`${watch[data]}`}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductInfo;
