import React from "react";
import { FooterLink } from "./style.js";
export default function FooterLinks() {
  return (
    <>
      <ul>
        <li>
          <FooterLink href="/home">Home</FooterLink>
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
    </>
  );
}
