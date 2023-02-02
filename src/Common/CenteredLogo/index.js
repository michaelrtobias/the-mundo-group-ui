import { Logo, LogoWrapper } from "./style";
import React from "react";

export default function CenteredLogo({ src, alt, width }) {
  return (
    <LogoWrapper>
      <Logo alt={alt} src={src} width={width} />
    </LogoWrapper>
  );
}
