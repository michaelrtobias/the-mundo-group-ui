import { Paper } from "@mui/material";

const Preview = ({ images, selectedImageIndex = 0, isEdit }) => {
  console.log("selectedImageIndex", selectedImageIndex);
  console.log("preview images", images);
  console.log("image", images[selectedImageIndex]);
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
        {selectedImageIndex < 0 ? (
          <img
            src="https://southwest-watches-media.s3.amazonaws.com/southwest-watches-logo-plain-01.png"
            alt="logo"
            style={{ maxHeight: "40vh", width: "auto" }}
          />
        ) : (
          <img
            src={images[selectedImageIndex]?.image_url}
            alt={images[selectedImageIndex]?.image_url}
            style={{ maxHeight: "40vh", width: "auto" }}
          />
        )}
      </Paper>
    </>
  );
};

export default Preview;
