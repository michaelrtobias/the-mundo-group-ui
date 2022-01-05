import styled from "styled-components";

export const ContactLinkBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #67737e;
  padding: 40px 0px;
  color: #ffffff;
  font-size: 2vw;
  @media (max-width: 1230px) {
    flex-direction: column;
    text-align: center;
    font-size: 4vw;
  }
`;

export const ContactLinkHeading = styled.h2`
  margin-right: 1.5vw;
`;
