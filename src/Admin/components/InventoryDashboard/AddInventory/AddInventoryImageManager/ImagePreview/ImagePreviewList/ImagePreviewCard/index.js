import { Card, ListItem, ListItemButton, ListItemText } from "@mui/material";
const ImagePreviewCard = ({ url, setSelectedImage }) => {
  console.log("image url", url);
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton onClick={() => setSelectedImage(url)}>
          <ListItemText primary={url} />
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default ImagePreviewCard;
