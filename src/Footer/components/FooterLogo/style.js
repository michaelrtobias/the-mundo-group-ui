import styled from "styled-components";

export const FooterImage = styled.img.attrs(() => ({
  src: "https://southwest-watches-media.s3.amazonaws.com/southwest-watches-logo-2.png",
  alt: "southwest-watches-logo",
}))`
  width: 100%;
  height: auto;
  max-width: 250px;
  margin-top: 1vh;
  @media (min-width: 1100px) {
    margin: 10px 0px 10px 35px;
  }
`;

export const ContentWrap = styled.div`
  @media (min-width: 1100px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: white;
    margin-right: 40px;
    grid-area: 1 / 2 / 2 / 3;
  }
`;
