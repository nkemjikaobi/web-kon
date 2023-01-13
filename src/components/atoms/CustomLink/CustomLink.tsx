import Link from "next/link";
import React, { ReactNode } from "react";

export interface CustomLinkProps {
  destination: string;
  children: ReactNode;
  customClass?: string;
  hover?: string;
}

const CustomLink = ({ children, hover, destination, customClass }: CustomLinkProps) => {
  return (
    <Link href={destination}>
      <div className={`cursor-pointer hover:text-${hover} ${customClass}`}>{children}</div>
    </Link>
  );
};

export default CustomLink;

CustomLink.defaultProps = {
  customClass: "",
  hover: "citiGreen-600",
};
