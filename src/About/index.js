import ContactBanner from "../Common/ContactBanner/index";
import ImageCarousel from "../Common/Carousel/index";
import React from "react";
import WatchBrands from "./components/WatchBrands/index";
import { WatchCarouselImages } from "../Common/Carousel/data";
import WatchContent from "./components/Content/index";
import { WatchPageContainer } from "./style";

export default function About() {
  return (
    <WatchPageContainer>
      <ImageCarousel images={WatchCarouselImages} />
      <WatchContent />
      <WatchBrands />
      <ContactBanner />
    </WatchPageContainer>
  );
}
