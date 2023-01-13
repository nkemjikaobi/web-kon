import React from "react";

const LargeProductCardSkeleton = () => {
  return (
    <>
      <div className="mb-12 space-y-6 px-4 smallLaptop:px-8 bigLaptop:px-0">
        <div className="w-full h-[11.063rem] bg-gray-300 animate-pulse " />
        <div className="bg-gray-300 animate-pulse h-4" />
        <div className="flex items-center justify-between">
          <div className="bg-gray-300 animate-pulse w-1/3 h-4 mr-2" />
          <div className="bg-gray-300 animate-pulse w-1/3 h-4" />
        </div>
        <div className="bg-gray-300 animate-pulse h-4" />
        <div className="flex items-center justify-between">
          <div className="bg-gray-300 animate-pulse w-1/3 h-4 mr-2" />
          <div className="bg-gray-300 animate-pulse w-1/3 h-4" />
        </div>
        <div className="flex items-center justify-between">
          <div className="bg-gray-300 animate-pulse w-1/3 h-4 mr-2" />
        </div>
        <div className="flex items-center justify-between">
          <div className="bg-gray-300 animate-pulse w-1/3 h-4 mr-2" />
        </div>
        <div className="h-[3.313rem] w-full bg-gray-300 animate-pulse " />
      </div>
    </>
  );
};

export default LargeProductCardSkeleton;
