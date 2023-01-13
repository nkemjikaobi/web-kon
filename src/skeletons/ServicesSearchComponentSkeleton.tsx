import { range } from "lodash";
import React from "react";

const ServicesSearchComponentSkeleton = () => {
  return (
    <>
      <ul className="bg-white p-5 h-[60px] mb-4 space-x-7 flex">
        {range(6).map((data, index) => (
          <li className="bg-gray-300 w-full h-6 animate-pulse" key={index} />
        ))}
      </ul>
    </>
  );
};

export default ServicesSearchComponentSkeleton;
