import styled from "styled-components";

export const SloganWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 3vh 0px;
  margin-bottom: 60px;
  color: #ffffff;
  background-color: #343a40;
`;

export const Slogan = styled.h1`
  text-align: center;
  line-height: 150%;
  font-size: 3vw;
  @media (max-width: 700px) {
    font-size: 4.5vw;
  }
`;
