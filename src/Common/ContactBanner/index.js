import { ContactLinkBox, ContactLinkHeading } from "./style";
import { useHistory } from "react-router";
import Button from "@mui/material/Button";
import Email from "@mui/icons-material/Email";

export default function ContactBanner() {
  const history = useHistory();

  return (
    <ContactLinkBox>
      <ContactLinkHeading>
        Contact us or send us a message, so we can find you your next timepiece
      </ContactLinkHeading>
      <Button
        href="/contact"
        variant="contained"
        color="info"
        sx={{
          marginTop: "0.5em",
          maxWidth: "70vw",
          "@media (max-width: 1230px)": {
            marginLeft: "15vw",
          },
        }}
        endIcon={<Email />}
        onClick={() => {
          history.push("/contact");
        }}
      >
        Send A Message
      </Button>
    </ContactLinkBox>
  );
}
