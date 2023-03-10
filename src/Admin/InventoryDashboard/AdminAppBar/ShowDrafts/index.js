import { Button, Grid } from "@mui/material";
import React from "react";
const ShowDrafts = ({
  setShowDrafts,
  showDrafts,
  showOnlyDrafts,
  setShowOnlyDrafts,
}) => {
  const handleClickShowDrafts = () => {
    setShowDrafts(!showDrafts);
    if (showOnlyDrafts === true) {
      setShowOnlyDrafts(false);
    }
  };
  const handleClickShowOnlyDrafts = () => {
    setShowOnlyDrafts(!showOnlyDrafts);
  };
  return (
    <>
      {!showDrafts && (
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClickShowDrafts}
          size="large"
          sx={{ minHeight: "4.25vh" }}
          fullWidth
        >
          Show Drafts
        </Button>
      )}
      {showDrafts && !showOnlyDrafts && (
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="error"
              onClick={handleClickShowDrafts}
              size="large"
              sx={{ minHeight: "4.25vh" }}
              fullWidth
            >
              Hide Drafts
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleClickShowOnlyDrafts}
              size="large"
              sx={{ minHeight: "4.25vh" }}
              fullWidth
            >
              Show Only Drafts
            </Button>
          </Grid>
        </Grid>
      )}
      {showDrafts && showOnlyDrafts && (
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="error"
              onClick={handleClickShowDrafts}
              size="large"
              sx={{ minHeight: "4.25vh" }}
              fullWidth
            >
              Hide Drafts
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleClickShowOnlyDrafts}
              size="large"
              sx={{ minHeight: "4.25vh" }}
              fullWidth
            >
              Show Active
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  );
};
export default ShowDrafts;
