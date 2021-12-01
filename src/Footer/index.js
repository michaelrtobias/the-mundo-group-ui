import React from "react";
import { FooterBox, ContentWrap } from "./style.js";
// import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import FooterContactInfo from "./components/FooterContactInfo/index";
import FooterLinks from "./components/FooterLinks/index";
import FooterLogo from "./components/FooterLogo/index.js";
export default function Footer() {
  return (
    <FooterBox>
      <h3>The Mundo Group</h3>
      <ContentWrap>
        <FooterLogo />
        <FooterLinks />
        <FooterContactInfo />
      </ContentWrap>
    </FooterBox>
  );
}
