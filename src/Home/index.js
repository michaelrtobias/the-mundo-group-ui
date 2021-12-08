import React from "react";
import HomeCarousel from "./components/Carousel/index";
import HomeContent from "./components/Content/index";
import { HomePage } from "./style.js";

export default function Home() {
  return (
    <HomePage>
      <HomeCarousel />
      <HomeContent />
    </HomePage>
  );
}
