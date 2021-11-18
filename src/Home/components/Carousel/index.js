import React from "react";
import { Carousel } from "react-bootstrap";
import { IMG, CarouselWrapper } from "./style.js";
import { HomeCarouselImages } from "./data";

export default function HomeCarousel() {
  return (
    <CarouselWrapper>
      <Carousel variant="dark" touch="true">
        {HomeCarouselImages.map((image, index) => (
          <Carousel.Item>
            <IMG src={image.src} alt={image.alt} />
          </Carousel.Item>
        ))}
      </Carousel>
    </CarouselWrapper>
  );
}
