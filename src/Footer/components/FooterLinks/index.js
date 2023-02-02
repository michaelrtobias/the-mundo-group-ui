import { Button, Typography } from "@mui/material";
import {
  ContentWrap,
  CopyrightListItem,
  FooterLink,
  LinksList,
  LinksListItem,
} from "./style.js";
import { Auth } from "aws-amplify";
import React from "react";

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
              sx={{ marginTop: "0.5em" }}
              onClick={() => Auth.federatedSignIn()}
            >
              Login
            </Button>
          )}
          {isAdmin && (
            <Button
              variant="contained"
              color="info"
              sx={{ marginTop: "0.5em" }}
              onClick={() => Auth.signOut()}
            >
              Logout
            </Button>
          )}
        </LinksListItem>
        <CopyrightListItem>
          <Typography align="center">© 2022 Southwest Watches</Typography>
        </CopyrightListItem>
      </LinksList>
    </ContentWrap>
  );
}
