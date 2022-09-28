import {
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { makeStyles } from "@mui/styles";
import DeleteImage from "./DeleteImage/index";
const useStyles = makeStyles({
  root: {
    "&$selected": {
      backgroundColor: "#ffa726",
      "&:hover": {
        backgroundColor: "#ffa726",
      },
    },
  },
  selected: {},
});
const ImagePreviewCard = ({
  url,
  setSelectedImageIndex,
  selectedImageIndex,
  handleDeleteImage,
  index,
  isEdit,
}) => {
  const classes = useStyles();
  const handleClick = () => {
    setSelectedImageIndex(index);
  };

  return (
    <>
      <ListItem
        disablePadding
        button
        divider
        selected={selectedImageIndex === index}
        classes={{ root: classes.root, selected: classes.selected }}
        secondaryAction={
          <DeleteImage
            url={url}
            isEdit={isEdit}
            handleDeleteImage={handleDeleteImage}
            setSelectedImageIndex={setSelectedImageIndex}
            index={index}
          />
        }
      >
        <ListItemButton onClick={handleClick}>
          <ListItemText
            primary={url.split("inventory/")[1]}
            primaryTypographyProps={{
              variant: "subtitle2",
              style: {
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              },
            }}
          />
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default ImagePreviewCard;
