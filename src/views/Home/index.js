import CenteredLogo from "../../components/CenteredLogo";
import { CenteredParagraph } from "../../components/Style/commonStyle";
import ContactBanner from "../../components/ContactBanner/index";
import { HomeCarouselImages } from "../../components/Carousel/data";
import { HomePage } from "./style.js";
import ImageCarousel from "../../components/Carousel";
import React from "react";
import SloganBox from "./components/Slogan/index";

export default function Home() {
  return (
    <HomePage>
      <CenteredLogo
        src="https://southwest-watches-media.s3.amazonaws.com/southwest-watches-logo-plain-01.png"
        alt="sww-logo"
        width="100%"
      />
      <CenteredParagraph>
        Southwest Watches is a premier watch broker to find your perfect time
        piece. Working all around the USA, we are dedicated to locating the
        watch of your dreams, at the best price we can find. Stop worrying about
        the hassel of finding that specific watch or piece of jewlery, and let
        us do the work for you.
      </CenteredParagraph>
      <SloganBox />
      <ImageCarousel images={HomeCarouselImages} />
      <CenteredParagraph>
        Based in both Scottsdale, AZ and Chicago, IL, Southwest Watches is an
        family business that specializes in time for over 20 years. Saving your
        time and helping you keep it. No request is too big or small for
        Southwest Watches. Let us know what you are looking for and we can make
        it a reality.
      </CenteredParagraph>
      <ContactBanner />
    </HomePage>
  );
}
