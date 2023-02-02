import styled from "styled-components";

export const CenteredParagraph = styled.p`
  font-size: 2.5vw;
  text-align: center;
  margin: 4vh 5vw;
  @media (max-width: 800px) {
    font-size: 4vw;
  }
`;

export const FlexBoxRow = styled.div`
  display: flex;
  flex-direction: row;
`;
