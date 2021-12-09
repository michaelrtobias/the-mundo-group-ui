import React from "react";
import { Carousel } from "react-bootstrap";
import { IMG, CarouselWrapper } from "./style.js";

export default function ImageCarousel({ images }) {
  return (
    <CarouselWrapper>
      <Carousel variant="dark">
        {images.map((image, index) => (
          <Carousel.Item>
            <IMG src={image.src} alt={image.alt} key={index} />
          </Carousel.Item>
        ))}
      </Carousel>
    </CarouselWrapper>
  );
}
