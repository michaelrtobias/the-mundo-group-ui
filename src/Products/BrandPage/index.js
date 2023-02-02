import React from "react";
import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const BrandPage = () => {
  const location = useLocation();

  return <Typography variant="h1">{location.pathname} Page</Typography>;
};

export default BrandPage;
