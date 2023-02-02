import styled from "styled-components";

export const Logo = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: ${(props) => props.width};
  height: auto;
  max-width: 1000px;
  display: block;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
