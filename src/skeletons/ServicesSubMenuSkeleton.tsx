import { range } from "lodash";
import React from "react";

const ServicesSubMenuSkeleton = () => {
  return (
    <ul className="bg-white p-5 w-[15.625rem] h-[390px] space-y-7">
      {range(7).map((data, index) => (
        <li className="bg-gray-300 h-6 animate-pulse" key={index} />
      ))}
    </ul>
  );
};

export default ServicesSubMenuSkeleton;
