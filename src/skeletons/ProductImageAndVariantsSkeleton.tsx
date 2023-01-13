import { range } from "lodash";
import React from "react";

const ProductImageAndVariantsSkeleton = () => {
  return (
    <div className="ml-[1rem] mr-[0.938rem] smallLaptop:ml-0">
      <div className="">
        <div className="h-[10rem] tablet:h-[28rem] animate-pulse bg-gray-300" />
      </div>
      <div className="flex mt-4">
        {range(3).map((_, index) => (
          <div className="mr-4 cursor-pointer" key={index}>
            <div className="h-[4.063rem] w-[5.6rem] mb-4 tablet:mb-0 tablet:h-[5.6rem] tablet:w-[8.375rem] animate-pulse bg-gray-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImageAndVariantsSkeleton;
