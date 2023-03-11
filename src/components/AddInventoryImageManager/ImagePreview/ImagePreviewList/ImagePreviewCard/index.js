import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import DeleteImage from "./DeleteImage/index";
import ImageOrderButtons from "./ImageOrderButtons";
import React from "react";
import { makeStyles } from "@mui/styles";

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
    console.log("clicked index: ", index);
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
            primary={url.split("Z-")[1]}
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
