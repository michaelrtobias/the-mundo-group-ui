import React from "react";
import ImageCarousel from "../Common/Carousel";
import { HomePage, Paragraph } from "./style.js";
import { HomeCarouselImages } from "../Common/Carousel/data";
import ContactBanner from "../Common/ContactBanner/index";
import HomeLogo from "./components/HomeLogo/index";
import SloganBox from "./components/Slogan/index";
export default function Home() {
  return (
    <HomePage>
      <HomeLogo />
      <Paragraph>
        The Mundo Group is a premier watch broker there to find your perfect
        time piece. Working all around the USA, we are dedicated to locating the
        watch of your dreams, at the best price we can find. Stop worrying about
        the hassel of finding that specific watch or piece of jewlery, and let
        us do the work for you.
      </Paragraph>
      <SloganBox />
      <ImageCarousel images={HomeCarouselImages} />
      <Paragraph>
        Based in both Scottsdale, AZ and Chicago, IL, The Mundo Group is an
        family business that specializes in time for over 20 years. Ssving your
        time and helping you keep it. No request is too big or small for The
        Mundo Group. Let us know what you are looking for and we can make it a
        reality.
      </Paragraph>
      <ContactBanner />
    </HomePage>
  );
}
