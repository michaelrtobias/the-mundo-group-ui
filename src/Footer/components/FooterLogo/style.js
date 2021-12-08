import styled from "styled-components";

export const FooterImage = styled.img.attrs((props) => ({
  src: "https://the-mundo-group-media.s3.amazonaws.com/254-2542243_world-grey-logo-svg-clip-arts-hd-png.png",
  alt: "mundo-group-logo",
}))`
  max-height: 100%;
  max-width: 125px;
  margin: 10px 0px 10px 35px;
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: white;
  margin-right: 40px;
`;
