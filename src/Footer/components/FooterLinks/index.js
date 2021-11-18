import React from "react";
import { FooterLink, ContentWrap, FooterTitle } from "./style.js";

export default function FooterLinks() {
  return (
    <ContentWrap>
      <FooterTitle>The Mundo Group</FooterTitle>
      <ul>
        <li>
          <FooterLink href="/">Home</FooterLink>
        </li>
        <li>
          <FooterLink href="/about">About</FooterLink>
        </li>
        <li>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </li>
        <li>
          <FooterLink href="/watches">Pre-Owned Watches</FooterLink>
        </li>
      </ul>
    </ContentWrap>
  );
}
