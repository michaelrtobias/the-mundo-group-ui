import React from "react";
import { ContactInfoWrapper, ContactPageLinkButton } from "./style.js";
import Button from "@mui/material/Button";
import Email from "@mui/icons-material/Email";

export default function FooterContactInfo() {
  return (
    <ContactInfoWrapper>
      <h4>Contact Info</h4>
      <div>
        <b>Email:</b>{" "}
        <a href="mailto:info@themundogroup.com">info@themundogroup.com</a>
      </div>
      <div>
        <b>Phone:</b> +1 (480)-709-7019
      </div>
      <div>
        <b>Phone:</b> +1 (847)-525-5122
      </div>
      <Button
        href="/contact"
        variant="contained"
        sx={{ "margin-top": "0.5em" }}
        endIcon={<Email />}
      >
        Send Us A Message
      </Button>
    </ContactInfoWrapper>
  );
}
