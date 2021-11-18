import React from "react";
import { FooterBox } from "./style.js";
// import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import FooterContactInfo from "./components/FooterContactInfo/index";
import FooterLinks from "./components/FooterLinks/index";
import FooterLogo from "./components/FooterLogo/index";
export default function Footer() {
  return (
    <FooterBox>
      <FooterLogo />
      <FooterLinks />
      <FooterContactInfo />
    </FooterBox>
  );
}
