import styled from "styled-components";

export const Image = styled.img.attrs(() => ({
  src: "https://the-mundo-group-media.s3.amazonaws.com/world-clock-logo.png",
  alt: "wtach small logo",
  height: "45",
  width: "45",
}))`
  margin-right: 10px;
`;
