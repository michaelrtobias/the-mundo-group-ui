import { ListItem, ListItemButton, ListItemText, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import DeleteImage from "./DeleteImage/index";
import ImageOrderButtons from "./ImageOrderButtons";
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
  handleMoveImage,
  index,
  isEdit,
  length,
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
          <>
            <ImageOrderButtons
              index={index}
              length={length}
              handleMoveImage={handleMoveImage}
            />
            <DeleteImage
              url={url}
              isEdit={isEdit}
              handleDeleteImage={handleDeleteImage}
              setSelectedImageIndex={setSelectedImageIndex}
              index={index}
            />
          </>
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
                maxWidth: "16vw",
              },
            }}
          />
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default ImagePreviewCard;
