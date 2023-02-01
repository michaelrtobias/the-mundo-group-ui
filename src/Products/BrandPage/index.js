import React from "react";
import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";

const BrandPage = () => {
  const location = useLocation();

  return <Typography variant="h1">{location.pathname} Page</Typography>;
};

export default BrandPage;
