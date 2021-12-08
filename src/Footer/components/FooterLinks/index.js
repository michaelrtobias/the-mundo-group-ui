import React from "react";
import {
  FooterLink,
  ContentWrap,
  LinksListItem,
  LinksList,
  Copyright,
  CopyrightListItem,
} from "./style.js";

export default function FooterLinks() {
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
        <CopyrightListItem>
          <Copyright>© 2021 The Mundo Group</Copyright>
        </CopyrightListItem>
      </LinksList>
    </ContentWrap>
  );
}
