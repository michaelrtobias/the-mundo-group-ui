import React from "react";
import ImageCarousel from "../Common/Carousel";
import { HomePage } from "./style.js";
import { HomeCarouselImages } from "../Common/Carousel/data";
import ContactBanner from "../Common/ContactBanner/index";
import HomeLogo from "./components/HomeLogo/index";
import SloganBox from "./components/Slogan/index";
import { CenteredParagraph } from "../Common/Style/commonStyle";
export default function Home() {
  return (
    <HomePage>
      <HomeLogo />
      <CenteredParagraph>
        The Mundo Groups is a premier watch broker to find your perfect time
        piece. Working all around the USA, we are dedicated to locating the
        watch of your dreams, at the best price we can find. Stop worrying about
        the hassel of finding that specific watch or piece of jewlery, and let
        us do the work for you.
      </CenteredParagraph>
      <SloganBox />
      <ImageCarousel images={HomeCarouselImages} />
      <CenteredParagraph>
        Based in both Scottsdale, AZ and Chicago, IL, The Mundo Group is an
        family business that specializes in time for over 20 years. Saving your
        time and helping you keep it. No request is too big or small for The
        Mundo Group. Let us know what you are looking for and we can make it a
        reality.
      </CenteredParagraph>
      <ContactBanner />
    </HomePage>
  );
}
