import React from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";

import { ButtonProperties } from "@shared/libs/helpers";

const WaitingList = () => {
  return (
    <div className="flex flex-col justify-center items-center z-10 my-24">
      <h3 className="text-center font-medium text-3xl tablet:text-4xl smallLaptop:text-6xl mb-8 font-recoleta">We Are Currently In Beta</h3>
      <p className="font-normal leading-8 text-xl mb-8 text-center w-11/12 tablet:w-9/12 smallLaptop:w-full">Join the CitiSquare community for more exciting offers coming soon</p>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSdiUGDYGREb0FUdOpuF8BYWZFbK5eUFfBfJkhy-4G3NlgFk_Q/viewform" rel="noreferrer" target="_blank">
        <CustomButton
          customClass="!rounded-none"
          handleClick={() => {}}
          size={ButtonProperties.SIZES.small}
          title="Join Waiting List"
          variant={ButtonProperties.VARIANT.secondary.name}
        />
      </a>
    </div>
  );
};

export default WaitingList;
