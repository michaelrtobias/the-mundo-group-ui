import React from "react";
import { FooterLink, ContentWrap, LinksListItem } from "./style.js";

export default function FooterLinks() {
  return (
    <ContentWrap>
      <ul>
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
      </ul>
    </ContentWrap>
  );
}
