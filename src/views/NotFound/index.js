import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import CenteredLogo from "../../components/CenteredLogo/index";
import React from "react";

export default function NotFound() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
    >
      <Stack spacing={6} sx={{ margin: "0 5vw" }}>
        <CenteredLogo
          src="https://southwest-watches-media.s3.amazonaws.com/broken-watch.jpg"
          alt="broken-watch"
          width="30vw"
        />
        <Paper elevation={4} sx={{ padding: "2em" }}>
          <Typography variant="h3" align="center">
            Oops! You seem to be lost.
          </Typography>
          <Typography variant="h6" align="center">
            This page does not exist
          </Typography>
        </Paper>
        <Button href="/" variant="contained" sx={{ padding: "1em" }}>
          Go back to the homepage
        </Button>
      </Stack>
    </Box>
  );
}
