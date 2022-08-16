import { Paper } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
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
        <Typography align="center" variant="h3">
          Admin Dashboard {userData.name}
        </Typography>
      )}
      <Paper variant="outlined" sx={{ margin: "1vh 2vw 1vh 2vw" }}>
        <Card sx={{ maxWidth: 345 }} onClick={handleEditInventoryButtonCLick}>
          <CardActionArea>
            {/* <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            /> */}
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
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
