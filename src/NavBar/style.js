import styled from "styled-components";

export const Image = styled.img.attrs(() => ({
  src: "https://southwest-watches-media.s3.amazonaws.com/cactus-logo-1.png",
  alt: "wtach small logo",
  height: "45",
  width: "45",
}))`
  margin-right: 10px;
`;

export const LinkWrapper = styled.div`
  margin-left: 4vw;
`;
