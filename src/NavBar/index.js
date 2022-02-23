import { Nav, Navbar } from "react-bootstrap";
import { Image, LinkWrapper } from "./style.js";
import { Button, useMediaQuery } from "@mui/material";
import Email from "@mui/icons-material/Email";
import Breadcrumb from "./compnents/Breadcrumbs";
export default function NavBar() {
  const mediaQuery = useMediaQuery("(min-width:770px)");

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md" sticky="top">
        <Navbar.Brand>
          {"  "}
          <Nav.Link href="/" style={{ color: "rgba(255, 255, 255, 0.5)" }}>
            <Image />
            The Mundo Group
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {mediaQuery ? (
              <>
                {" "}
                <Nav.Link href="/watches">Pre-Owned Watches</Nav.Link>
                <Nav.Link href="/contact">Contact Us</Nav.Link>
              </>
            ) : (
              <LinkWrapper>
                <Nav.Link href="/watches">Pre-Owned Watches</Nav.Link>
                <Nav.Link href="/contact">Contact Us</Nav.Link>
              </LinkWrapper>
            )}
          </Nav>
        </Navbar.Collapse>{" "}
        {mediaQuery ? (
          <Button
            href="/contact"
            variant="contained"
            color="info"
            endIcon={<Email />}
            sx={{ "margin-right": "2vw" }}
          >
            Send Us A Message
          </Button>
        ) : null}
      </Navbar>

      <Breadcrumb />
    </>
  );
}
