import React from "react";
import ImageCarousel from "../Common/Carousel";
import { HomePage } from "./style.js";
import { HomeCarouselImages } from "../Common/Carousel/data";
import ContactBanner from "../Common/ContactBanner/index";
import HomeLogo from "./components/Contents/index";
export default function Home() {
  return (
    <HomePage>
      {/* big script logo */}
      <HomeLogo />
      {/* some big text as an intro */}
      {/* slogan block */}
      <ImageCarousel images={HomeCarouselImages} />
      {/* another paragraph about something  */}
      <ContactBanner />
    </HomePage>
  );
}
