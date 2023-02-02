import Button from "@mui/material/Button";
import { ContactInfoWrapper } from "./style.js";
import Email from "@mui/icons-material/Email";
import React from "react";

export default function FooterContactInfo() {
  const url = window.location.href;

  return (
    <ContactInfoWrapper>
      <h4>Contact Info</h4>
      <div>
        <b>Email:</b>
        <a href="mailto:info@southwestwatches.com">info@southwestwatches.com</a>
      </div>
      <div>
        <b>Phone:</b> +1 (480)-709-7019
      </div>
      <div>
        <b>Phone:</b> +1 (847)-525-5122
      </div>
      {!url.includes("watches") ? (
        <Button
          href="/contact"
          variant="contained"
          color="info"
          sx={{ marginTop: "0.5em" }}
          endIcon={<Email />}
        >
          Send Us A Message
        </Button>
      ) : null}
    </ContactInfoWrapper>
  );
}
