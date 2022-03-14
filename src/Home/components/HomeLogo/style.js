import styled from "styled-components";

export const Logo = styled.img.attrs(() => ({
  src: "https://southwest-watches-media.s3.amazonaws.com/southwest-watches-logo-2.png",
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
