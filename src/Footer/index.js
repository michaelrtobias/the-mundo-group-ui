import React from "react";
import { FooterBox, ContentWrap } from "./style.js";
// import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import FooterContactInfo from "./components/FooterContactInfo/index";
import FooterLinks from "./components/FooterLinks/index";
export default function Footer() {
  return (
    <FooterBox>
      <FooterLinks />
      <FooterContactInfo />
    </FooterBox>
  );
}
