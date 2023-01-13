import React, { ChangeEvent, useState } from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomInput from "@components/atoms/CustomInput/CustomInput";
import CustomSelect from "@components/atoms/CustomSelect/CustomSelect";

import { StepProps } from "@dto/StepperComponent/StepProps";

import { ButtonProperties } from "@shared/libs/helpers";

interface GettingStartedProps {
  step: StepProps;
}

const GettingStarted = ({ step }: GettingStartedProps) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  return (
    <div className="flex h-[751px] flex-col items-center p-3 tablet:p-0 w-full overflow-auto tablet:h-[calc(100vh-300px)] hide-scrollbar">
      <h3 className="text-24 mx-4 my-2 font-bold text-[#242424]">Getting Started</h3>
      <p className="text-citiGray-400 text-16">Let’s get you started</p>
      <div className="w-[90%]">
        <div className="flex justify-between mt-8 rounded-md">
          <CustomInput
            className="h-[52px] mr-4 rounded-md border"
            inputClassName="placeholder:text-14 placeholder:text-citiGray-300"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
            placeholder="First Name"
            required={true}
            type="text"
            value={firstName}
          />
          <CustomInput
            className="h-[52px] border rounded-md placeholder:text-14 placeholder:text-citiGray-300"
            inputClassName="placeholder:text-14 placeholder:text-citiGray-300"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
            placeholder="Last Name"
            required={true}
            type="text"
            value={lastName}
          />
        </div>
        <div className="flex h-[52px] my-8">
          <CustomSelect className="!text-[#B0B7C3] text-14 rounded-md" container="pr-5" placeholder="Country" />
        </div>
        <div className="flex h-[52px] mt-4 justify-between items-center">
          <CustomSelect className="!text-[#B0B7C3] text-14 !mr-4 rounded-md" container="pr-5" placeholder="State" />
          <CustomSelect className="!text-[#B0B7C3] text-14 rounded-md" container="pr-5" parentContainer="ml-[20px]" placeholder="City" />
        </div>
        <CustomButton customClass="my-4 !w-full" handleClick={step.goNextStep} size={ButtonProperties.SIZES.big} title="Finish" variant={ButtonProperties.VARIANT.secondary.name} />
      </div>
    </div>
  );
};

export default GettingStarted;
