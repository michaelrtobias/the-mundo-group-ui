import styled from "styled-components";
export const FooterBox = styled.div`
  background-color: #343a40;
  color: white;
  position: "relative";
  padding-bottom: 20px;
  width: "100%";
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const ContentWrap = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 2fr 0.5fr repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export const FooterTitle = styled.div`
  text-align: center;
  padding-top: 1em;
`;
