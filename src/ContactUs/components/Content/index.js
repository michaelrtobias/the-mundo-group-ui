import {
  MundoGroupTitle,
  TitleCard,
  ContactCard,
  InqueryTypeTitle,
  GeneralQueries,
} from "./style.js";

export function ContactUsContent() {
  return (
    <>
      <TitleCard>
        <h1>Contact Info</h1>
      </TitleCard>
      <ContactCard>
        <MundoGroupTitle>The Mundo Group</MundoGroupTitle>
        <GeneralQueries>
          {/* <InqueryTypeTitle>For general inqueries:</InqueryTypeTitle> */}
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
          <br></br>
          <div>
            Please allow up to 24 hours for a response to your inquiry.
          </div>{" "}
          <div>
            Emails sent during non-business hours will be responded to on the
            next business day.
          </div>
        </GeneralQueries>
      </ContactCard>
    </>
  );
}
