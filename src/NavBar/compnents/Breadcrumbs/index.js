import { Link as RouterLink, useLocation } from "react-router-dom";
import { Typography, Breadcrumbs, Link } from "@mui/material";

const breadcrumbNameMap = {
  "/": "Home",
  "/about": "About",
  "/admin": "Admin",
  "/admin/inventory": "Edit Inventory",
  "/watches": "Pre-Owned Watches",
  "/contact": "Contact",
  "/contact/success": "Success",
};

function LinkRouter(props) {
  return <Link {...props} component={RouterLink} />;
}

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      sx={{ marginLeft: "2.3vw", marginTop: "1vh" }}
      maxItems={3}
      itemsBeforeCollapse={2}
      itemsAfterCollapse={1}
    >
      <LinkRouter underline="hover" to="/" style={{ color: "black" }}>
        Home
      </LinkRouter>
      {pathnames.map((value, index) => {
        const isLast = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        return isLast ? (
          <Typography color="text.primary" key={to}>
            {breadcrumbNameMap[to] || value}
          </Typography>
        ) : (
          <LinkRouter
            underline="hover"
            to={to}
            key={index}
            style={{ color: "black" }}
          >
            {breadcrumbNameMap[to] || value}
          </LinkRouter>
        );
      })}
    </Breadcrumbs>
  );
}
