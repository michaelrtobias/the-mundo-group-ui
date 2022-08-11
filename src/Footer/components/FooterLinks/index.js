import React from "react";
import {
  FooterLink,
  ContentWrap,
  LinksListItem,
  LinksList,
  Copyright,
  CopyrightListItem,
} from "./style.js";
import { Auth } from "aws-amplify";
import Button from "@mui/material/Button";

export default function FooterLinks({ isAdmin }) {
  return (
    <ContentWrap>
      <LinksList>
        <LinksListItem>
          <FooterLink href="/">Home</FooterLink>
        </LinksListItem>
        <LinksListItem>
          <FooterLink href="/about">About</FooterLink>
        </LinksListItem>
        <LinksListItem>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </LinksListItem>
        <LinksListItem>
          <FooterLink href="/watches">Pre-Owned Watches</FooterLink>
        </LinksListItem>
        <LinksListItem>
          {!isAdmin && (
            <Button
              variant="contained"
              color="info"
              sx={{ "margin-top": "0.5em" }}
              onClick={() => Auth.federatedSignIn()}
            >
              Login
            </Button>
          )}
          {isAdmin && (
            <Button
              variant="contained"
              color="info"
              sx={{ "margin-top": "0.5em" }}
              onClick={() => Auth.signOut()}
            >
              Logout
            </Button>
          )}
        </LinksListItem>
        <CopyrightListItem>
          <Copyright>© 2022 Southwest Watches</Copyright>
        </CopyrightListItem>
      </LinksList>
    </ContentWrap>
  );
}
