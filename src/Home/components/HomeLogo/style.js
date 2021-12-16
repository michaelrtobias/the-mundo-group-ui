import styled from "styled-components";

export const Logo = styled.img.attrs(() => ({
  src: "https://the-mundo-group-media.s3.amazonaws.com/mundo-group-logo.png",
  alt: "logo",
}))`
  width: 100%;
  height: auto;
  max-width: 1000px;
  display: block;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
