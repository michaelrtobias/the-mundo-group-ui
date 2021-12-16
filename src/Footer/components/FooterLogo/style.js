import styled from "styled-components";

export const FooterImage = styled.img.attrs(() => ({
  src: "https://the-mundo-group-media.s3.amazonaws.com/mundo-group-logo-white-text-01.png",
  alt: "mundo-group-logo",
}))`
  width: 100%;
  height: auto;
  max-width: 250px;
  margin: 10px 0px 10px 35px;
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: white;
  margin-right: 40px;
  grid-area: 1 / 2 / 2 / 3;
`;
