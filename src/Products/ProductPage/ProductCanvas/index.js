import { Paper } from "@mui/material";

const ProductCanvas = ({
  children,
  minHeight,
  minWidth,
  maxWidth,
  padding = 0,
}) => {
  return (
    <Paper
      elevation={12}
      sx={{
        minWidth,
        minHeight,
        maxWidth,
        padding,
      }}
    >
      {children}
    </Paper>
  );
};

export default ProductCanvas;
