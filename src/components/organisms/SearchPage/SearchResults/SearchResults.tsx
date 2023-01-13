import React, { ReactNode } from "react";

import { ProductProps } from "@dto/Product/ProductProps";

import { classNames } from "@shared/libs/helpers";

interface SearchResultsProps {
  id?: string;
  title: string;
  children: ReactNode;
  contentClass?: string;
  products: ProductProps[];
  totalProducts?: number;
}

const SearchResults = ({ children, contentClass = "", id, title, totalProducts, products }: SearchResultsProps) => {
  return (
    <div className="relative mt-6 bg-white rounded">
      <div className="flex items-center justify-between border-b-[0.063rem] pt-2 pl-[1.125rem] rounded border-b-[#DFE5E8]">
        <div className="">
          <h1 className="text-24 text-citiBlue-750 capitalize mb-2">{title}</h1>
          <p className="text-14 text-citiBlue-b100 mb-2 capitalize">{totalProducts || 0} products found</p>
        </div>
        <div>
          <p className=" p-4 text-14 text-[#07354D] capitalize">{/* <span>Sort by: </span>Popularity */}</p>
        </div>
      </div>
      <div className={classNames("ml-4 py-6 flex overflow-x-scroll hide-scrollbar tablet:overflow-y-hidden scroll-smooth", contentClass)} id={id}>
        {children}
      </div>
    </div>
  );
};

export default SearchResults;

SearchResults.defaultProps = {
  id: "",
  contentClass: "",
  totalProducts: 0,
};
