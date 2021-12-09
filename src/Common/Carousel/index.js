import React from "react";
import { Carousel } from "react-bootstrap";
import { IMG, CarouselWrapper } from "./style.js";
import { Paper } from "@mui/material";

export default function ImageCarousel({ images }) {
  return (
    <Paper
      elevation={12}
      sx={{ margin: "20px 80px 40px 80px" }}
      varient="outlined"
    >
      <CarouselWrapper>
        <Carousel variant="dark">
          {images.map((image, index) => (
            <Carousel.Item>
              <IMG src={image.src} alt={image.alt} key={index} />
            </Carousel.Item>
          ))}
        </Carousel>
      </CarouselWrapper>
    </Paper>
  );
}
