import { ContactLinkBox } from "./style";
import { useHistory } from "react-router";

export default function WatchContactLink() {
  const history = useHistory();

  return (
    <ContactLinkBox>
      <h3>
        Be sure to fill out our wishlist here, so we can find you your next
        timepiece
      </h3>
      <button
        onClick={() => {
          history.push("/contact");
        }}
      >
        Fill Out Wish List
      </button>
    </ContactLinkBox>
  );
}
