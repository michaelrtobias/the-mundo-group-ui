import {
  Card,
  CardActionArea,
  CardContent,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";

const Admin = ({ userData }) => {
  const history = useHistory();

  const handleEditInventoryButtonCLick = () => {
    let path = `/admin/inventory`;
    history.push(path);
  };
  return (
    <>
      {userData && (
        <>
          <Typography align="center" variant="h3">
            Admin Dashboard
          </Typography>
          <Typography align="center" variant="h5">
            Welcome {userData.name}!
          </Typography>
        </>
      )}
      <Paper
        variant="outlined"
        sx={{ margin: "1vh 2vw 1vh 2vw", padding: "2em" }}
      >
        <Card
          sx={{ maxWidth: 345, border: ".25em solid black" }}
          onClick={handleEditInventoryButtonCLick}
        >
          <CardActionArea>
            <CardContent>
              <Typography align="center" variant="h5" component="div">
                Edit Inventory
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Paper>
    </>
  );
};

export default Admin;
