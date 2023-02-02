import { ArrowDownwardRounded, ArrowUpwardRounded } from "@mui/icons-material/";
import { IconButton } from "@mui/material";
import React from "react";

const ImageOrderButtons = ({ index, length, handleMoveImage }) => {
  return (
    <>
      <IconButton
        disabled={index === 0}
        onClick={() => handleMoveImage(index - 1, index)}
      >
        <ArrowUpwardRounded />
      </IconButton>

      <IconButton
        disabled={index === length - 1}
        onClick={() => handleMoveImage(index + 1, index)}
      >
        <ArrowDownwardRounded />
      </IconButton>
    </>
  );
};
export default ImageOrderButtons;
