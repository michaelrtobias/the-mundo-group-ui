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
import { Button, Typography } from "@mui/material";

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
