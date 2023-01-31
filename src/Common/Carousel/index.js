import React from "react";
import { Carousel } from "react-bootstrap";
import { IMG, CarouselWrapper } from "./style.js";

export default function ImageCarousel({ images }) {
  return (
    <CarouselWrapper>
      <Carousel variant="dark" prevLabel="" nextLabel="">
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <IMG src={image.src} alt={image.alt} />
          </Carousel.Item>
        ))}
      </Carousel>
    </CarouselWrapper>
  );
}
