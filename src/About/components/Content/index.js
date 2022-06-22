import {
  WatchSlogan,
  SloganBox,
  WatchDualPictureContainer,
  Image,
} from "./style.js";
import { CenteredParagraph } from "../../../Common/Style/commonStyle";

import { Paper } from "@mui/material/";
const Pictures = [
  {
    src: "Omega-Speedmaster-3861-2021-Unboxing-WatchGecko10.jpeg",
    alt: "speedmaster",
  },
  {
    src: "rolex-2171961_1280.jpeg",
    alt: "sideways-batman",
  },
];
export default function WatchContent() {
  return (
    <>
      <SloganBox>
        <WatchSlogan>
          Time is valuable, so are you. <br></br>
          Make your time even more valuable.
        </WatchSlogan>
      </SloganBox>
      <CenteredParagraph>
        Southwest Watches is dedicated to finding our clients the timepieces
        they desire at the best price possible. After being in the jewlery
        industry for over 20 years we know exactly how to get the watch that you
        have been looking for. Working nationwide, Southwest Watches is commited
        to working with parteners all over the USA to source our products. We
        work around the clock in order to find what you are looking for. Weither
        it be a different color dial on that rolex or a diamond bezel to be
        added to you current timepiece, we can make you wishes come true. Give
        us a call today, or send us a message and we can work to find what you
        need. Let us help you find the watch of your dreams!
      </CenteredParagraph>

      <WatchDualPictureContainer>
        {Pictures.map((picture) => (
          <Paper elevation={18}>
            <Image
              src={`https://southwest-watches-media.s3.amazonaws.com/${picture.src}`}
              alt={picture.alt}
            />
          </Paper>
        ))}
      </WatchDualPictureContainer>
    </>
  );
}
