import { Nav, Navbar } from "react-bootstrap";
import { Image } from "./style.js";

export default function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md" sticky="top">
        <Navbar.Brand>
          {"  "}
          <Nav.Link href="/">
            <Image
              src="https://the-mundo-group-media.s3.amazonaws.com/254-2542243_world-grey-logo-svg-clip-arts-hd-png.png"
              alt=""
              width="30"
              height="30"
            ></Image>
            The Mundo Group
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/watches">Pre-Owned Watches</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
