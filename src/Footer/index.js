import React from "react";
import { Phantom, FooterBox } from "./style.js";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <Phantom />
      <FooterBox>
        <h5>Footer information</h5>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
          <li>
            <a href="/watches">Pre-Owned Watches</a>
          </li>
          <li>
            <a href="/jewlery">Jewlery</a>
          </li>
        </ul>
      </FooterBox>
    </div>
  );
}
