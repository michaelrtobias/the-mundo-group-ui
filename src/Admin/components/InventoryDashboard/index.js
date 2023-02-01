import React, { useState } from "react";
import { Typography, Box } from "@mui/material";
import InventoryList from "./InventoryList/index";
import AdminAppBar from "./AdminAppBar";
const InventoryDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDrafts, setShowDrafts] = useState(false);
  const [showOnlyDrafts, setShowOnlyDrafts] = useState(false);

  return (
    <>
      <Box
        display="flex"
        sx={{ display: "flex", justifyContent: "center", marginBottom: "2vh" }}
      >
        <Typography variant="h2" align="center">
          Inventory Dashboard
        </Typography>
      </Box>
      <AdminAppBar
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        setShowDrafts={setShowDrafts}
        showDrafts={showDrafts}
        showOnlyDrafts={showOnlyDrafts}
        setShowOnlyDrafts={setShowOnlyDrafts}
      />

      <InventoryList
        searchTerm={searchTerm}
        showDrafts={showDrafts}
        showOnlyDrafts={showOnlyDrafts}
      />
    </>
  );
};

export default InventoryDashboard;
