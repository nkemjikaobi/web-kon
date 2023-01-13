import Image from "next/image";
import React from "react";

import { useWindowSize } from "@hooks/useWindowSize";

interface LogoProps {
  theme?: "light" | "dark";
}

const Logo = ({ theme }: LogoProps) => {
  const [width] = useWindowSize();

  const imageWidth = width > 768 ? 85 : 65;
  const imageHeight = width > 768 ? 60 : 50;

  return (
    <>
      {theme === "dark" ? (
        <Image height={imageHeight} priority={true} src="/images/svg/dark-bg-logo.svg" width={imageWidth} />
      ) : (
        <Image height={imageHeight} priority={true} src="/images/svg/light-bg-logo.svg" width={imageWidth} />
      )}
    </>
  );
};

export default Logo;

Logo.defaultProps = {
  theme: "light",
};
