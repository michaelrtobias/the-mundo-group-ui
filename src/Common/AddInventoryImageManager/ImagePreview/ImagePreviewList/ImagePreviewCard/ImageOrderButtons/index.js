import { IconButton } from "@mui/material";
import { ArrowUpwardRounded, ArrowDownwardRounded } from "@mui/icons-material/";
const ImageOrderButtons = ({ index, length, handleMoveImage }) => {
  return (
    <>
      {index !== 0 && (
        <IconButton onClick={() => handleMoveImage(index - 1, index)}>
          <ArrowUpwardRounded />
        </IconButton>
      )}
      {index !== length - 1 && (
        <IconButton onClick={() => handleMoveImage(index + 1, index)}>
          <ArrowDownwardRounded />
        </IconButton>
      )}
    </>
  );
};
export default ImageOrderButtons;
