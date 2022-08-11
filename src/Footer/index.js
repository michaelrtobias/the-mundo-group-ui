import React from "react";
import { FooterBox, ContentWrap, FooterTitle } from "./style.js";
// import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import FooterContactInfo from "./components/FooterContactInfo/index";
import FooterLinks from "./components/FooterLinks/index";
import FooterLogo from "./components/FooterLogo/index.js";
import { useMediaQuery } from "@mui/material";
export default function Footer({ isAdmin }) {
  const mediaQuery = useMediaQuery("(min-width:1100px)");

  return (
    <FooterBox>
      <FooterTitle>
        <h3>Southwest Watches</h3>
      </FooterTitle>
      <ContentWrap>
        <FooterLogo />
        {mediaQuery ? (
          <>
            <FooterLinks isAdmin={isAdmin} />
            <FooterContactInfo />
          </>
        ) : (
          <>
            <FooterContactInfo isAdmin={isAdmin} />
            <FooterLinks />
          </>
        )}
      </ContentWrap>
    </FooterBox>
  );
}
