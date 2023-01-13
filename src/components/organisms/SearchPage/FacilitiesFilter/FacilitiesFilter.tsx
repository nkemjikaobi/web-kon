import React from "react";

import CustomCheckBox from "@components/atoms/CustomCheckBox/CustomCheckBox";

import ParentFilter from "../ParentFilter/ParentFilter";

const FacilitiesFilter = () => {
  return (
    <ParentFilter title="facilities">
      <hr />
      {SearchBrandsFilterData.map((brand) => (
        <div className="flex items-end mt-[1.313rem] mb-6" key={brand.id}>
          <CustomCheckBox />
          <p className="text-12 font-normal ml-[11.31px]">{brand.name}</p>
        </div>
      ))}
    </ParentFilter>
  );
};

export default FacilitiesFilter;

const SearchBrandsFilterData = [
  {
    id: 1,
    name: "Parking (234k)",
  },
  {
    id: 2,
    name: "Pool (2k)",
  },
  {
    id: 3,
    name: "Dual Treatment (200)",
  },
  {
    id: 4,
    name: "Hot Tub (2)",
  },
  {
    id: 5,
    name: "Resturant (2)",
  },
  {
    id: 6,
    name: "Pet Friendly (2)",
  },
];
