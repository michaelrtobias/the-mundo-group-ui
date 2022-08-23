import { Paper } from "@mui/material";

const Preview = ({ images, selectedImageIndex }) => {
  return (
    <>
      <Paper
        sx={{
          height: "20vh",
          overflow: "auto",
          display: "flex",
          justifyContent: "center;",
        }}
        elevation={4}
      >
        <img
          src={images[selectedImageIndex].image_url}
          alt={images[selectedImageIndex].image_url}
          style={{ maxHeight: "30vh", width: "auto" }}
        />
      </Paper>
    </>
  );
};

export default Preview;
