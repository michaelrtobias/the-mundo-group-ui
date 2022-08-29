import { Paper } from "@mui/material";

const Preview = ({ images, selectedImageIndex, isEdit }) => {
  return (
    <>
      <Paper
        sx={{
          height: isEdit ? "40vh" : "20vh",
          overflow: "auto",
          display: "flex",
          justifyContent: "center;",
        }}
        elevation={4}
      >
        <img
          src={images[selectedImageIndex].image_url}
          alt={images[selectedImageIndex].image_url}
          style={{ maxHeight: "40vh", width: "auto" }}
        />
      </Paper>
    </>
  );
};

export default Preview;
