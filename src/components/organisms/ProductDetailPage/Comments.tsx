import { range } from "lodash";
import React from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";

import { ButtonProperties } from "@shared/libs/helpers";

const Comments = () => {
  const handleSubmit = () => {
    // todo
  };
  return (
    <div>
      {range(6).map((data, index) => (
        <div className="flex my-8" key={index}>
          <div className="rounded-full bg-quality w-[2.5rem] h-[2.5rem] shrink-0 grow-0 basis-auto" />
          <div className="ml-4">
            <h5 className="font-bold text-16 mb-2">Quality</h5>
            <p className="text-citiGray-150 text-14 font-normal">All your long text goes here, this is where the review will be once a user makes a review</p>
          </div>
        </div>
      ))}
      <div className="flex justify-center items-center tablet:hidden">
        <CustomButton
          customClass="my-4 w-full"
          handleClick={handleSubmit}
          isTransparent={true}
          size={ButtonProperties.SIZES.small}
          title="View all 240 reviews"
          variant={ButtonProperties.VARIANT.secondary.name}
        />
      </div>
    </div>
  );
};

export default Comments;
