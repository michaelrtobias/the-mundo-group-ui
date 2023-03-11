import styled from "styled-components";

export const IMG = styled.img`
  width: auto;
  height: 100vh;
  max-height: 50vh;
  max-width: 100vw;
  display: block;
  @media (max-width: 700px) {
    max-height: 30vh;
    margin: 0px 2vw;
  }
`;

export const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 2vw 2vh 2vw;
  max-width: 100vw;
`;
