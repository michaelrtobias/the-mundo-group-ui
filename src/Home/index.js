import React from "react";
import ImageCarousel from "../Common/Carousel";
import HomeContent from "./components/Content/index";
import { HomePage } from "./style.js";
import { HomeCarouselImages } from "../Common/Carousel/data";

export default function Home() {
  return (
    <HomePage>
      <ImageCarousel images={HomeCarouselImages} />
      <HomeContent />
    </HomePage>
  );
}
