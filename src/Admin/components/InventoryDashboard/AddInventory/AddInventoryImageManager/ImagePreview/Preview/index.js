import { Paper } from "@mui/material";
const Preview = ({ url }) => {
  return (
    <>
      <Paper
        sx={{
          minHeight: "30vh",
          maxHeight: "30vh",
          overflow: "auto",
          display: "flex",
          justifyContent: "center;",
        }}
        elevation={4}
      >
        <img
          src={url}
          alt={url}
          style={{ maxHeight: "30vh", maxWidth: "auto" }}
        />
      </Paper>
    </>
  );
};

export default Preview;
