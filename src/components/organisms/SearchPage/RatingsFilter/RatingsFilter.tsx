import React from "react";

import CustomRadioButton from "@components/atoms/CustomRadioButton/CustomRadioButton";

import ParentFilter from "../ParentFilter/ParentFilter";

const RatingsFilter = () => {
  return (
    <ParentFilter title="customer rating">
      <hr />
      <CustomRadioButton
        labelClassName="font-light text-12 ml-2 whitespace-nowrap"
        options={RatingsFilterData}
        parentClassName="space-y-4 flex-col !items-start mt-[1.313rem] mb-6"
      />
    </ParentFilter>
  );
};

export default RatingsFilter;

const RatingsFilterData = [
  {
    id: 1,
    name: "rating",
    numberOfStars: 4,
    label: "9+ Excellent (234k)",
    value: "1",
    isRating: true,
  },
  {
    id: 2,
    name: "rating",
    numberOfStars: 3,
    label: "7+ Very Good (2k)",
    value: "1",
    isRating: true,
    isChecked: true,
  },
  {
    id: 3,
    name: "rating",
    numberOfStars: 2,
    label: "5+ Good (200)",
    value: "1",
    isRating: true,
  },
  {
    id: 4,
    name: "rating",
    numberOfStars: 1,
    label: "3+ Pleasant (2)",
    value: "1",
    isRating: true,
  },
];
