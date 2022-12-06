import { Paper } from "@mui/material";

const ProductCanvas = ({ children }) => {
  return (
    <Paper
      elevation={12}
      sx={{
        minWidth: "40vw",
        minHeight: "600px",
      }}
    >
      {children}
    </Paper>
  );
};

export default ProductCanvas;
