import { Link as RouterLink, useLocation } from "react-router-dom";
import { Typography, Breadcrumbs } from "@mui/material";

const breadcrumbNameMap = {
  "/": "Home",
  "/about": "About",
  "/admin": "Admin",
  "/admin/edit-inventory": "Edit Inventory",
  "/watches": "Pre-Owned Watches",
  "/contact": "Contact",
  "/contact/success": "Success",
};

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      sx={{ marginLeft: "2.3vw", marginTop: "1vh" }}
    >
      <RouterLink
        underline="hover"
        color="inherit"
        to="/"
        style={{ color: "black" }}
      >
        Home
      </RouterLink>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return last ? (
          <Typography color="text.primary" key={to}>
            {breadcrumbNameMap[to] || value}
          </Typography>
        ) : (
          <RouterLink
            underline="hover"
            color="inherit"
            to={to}
            key={to}
            style={{ color: "black" }}
          >
            {breadcrumbNameMap[to] || value}
          </RouterLink>
        );
      })}
    </Breadcrumbs>
  );
}
