import { ContactInfoWrapper } from "./style.js";
import React from "react";

export default function FooterContactInfo() {
  return (
    <ContactInfoWrapper>
      <h4>Contact Info</h4>
      <div>
        <b>Email:</b>
        <a href="mailto:contact@southwestwatches.com">
          contact@southwestwatches.com
        </a>
      </div>
      <div>
        <b>Phone:</b> +1 (480)-709-7019
      </div>
      <div>
        <b>Phone:</b> +1 (847)-525-5122
      </div>
    </ContactInfoWrapper>
  );
}
