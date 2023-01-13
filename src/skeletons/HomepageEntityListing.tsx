import { range } from "lodash";

export const HomepageEntityListing = () => {
  return (
    <div className="px-4 mb-5 smallLaptop:mb-0 flex flex-col space-y-4 smallLaptop:space-y-0 smallLaptop:flex-row justify-center smallLaptop:mx-auto smallLaptop:space-x-5 max-w-[1200px]">
      {range(2).map((_, index) => (
        <div className="bg-gray-300 w-full tablet:w-[200px] animate-pulse h-10 smallLaptop:h-16" key={index} />
      ))}
    </div>
  );
};
