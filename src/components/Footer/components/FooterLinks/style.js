import styled from "styled-components";

export const FooterLink = styled.a`
  color: white;
`;

export const ContentWrap = styled.div`
  @media (min-width: 1100px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    color: white;
    grid-area: 1 / 3 / 2 / 5;
    margin-left: 100px;
  }
  @media (max-width: 1100px) {
    margin-top: 2em;
    margin-right: 32px;
  }
`;

export const LinksList = styled.ul``;
export const LinksListItem = styled.li`
  list-style-type: none;
`;
export const CopyrightListItem = styled.li`
  list-style-type: none;
  margin-top: 1.4em;
`;

export const Copyright = styled.text`
  text-align: center;
  left: 20px;
`;
