import Image from "next/image";
import React from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";

import { ButtonProperties } from "@shared/libs/helpers";

const GroupInvestmentsPage = () => {
  return (
    <div className="px-4 tablet:px-8 smallLaptop:pr-0 flex justify-between items-center w-full smallLaptop:pl-[3.875rem] mb-20">
      <div className="w-full smallLaptop:1/2 bigLaptop:w-3/5">
        <h5 className="uppercase font-bold text-citiBlue-160 mb-[6px]">GROUP INVESTMENT</h5>
        <h1 className="font-semibold font-recoleta text-24 leading-[2.25rem] tablet:text-[2.25rem] tablet:leading-[2.625rem] smallLaptop:text-[3.125rem] smallLaptop:leading-[3.5rem] bigLaptop:text-64">
          Real Estate investment has never been made simpler, safer, and highly lucrative.
        </h1>
        <p className="text-16 font-nunitoSans smallLaptop:text-18 television:text-20 font-normal mt-4 mb-8">
          Do you know that you can co-own properties at Citisquare? Our Co-Ownership investment program helps group investors to acquire investment properties and earn high passive
          income/capital growth. We have carefully selected and well-negotiated property portfolios for our investors.
        </p>
        <CustomButton handleClick={() => window.open("https://forms.gle/w54TS1SqD7YAKkV79", "_blank")} title="Get Started" variant={ButtonProperties.VARIANT.secondary.name} />
        {/* <div className="py-8 pl-8 pr-[51px] bg-citiBlue-400 rounded-[0.5rem] tablet:w-[40.063rem] h-fit tablet:h-[16.625rem]">
          <h3 className="text-white font-semibold text-24 tablet:text-[2.25rem] smallLaptop:text-40 mb-1 font-recoleta">Group Investments</h3>
          <p className="text-citiBlue-b50 mb-4 tablet:w-[34.875rem] text-12 tablet:text-14 smallLaptop:text-base">
            A great design portfolio has the power to make or break your design career. We reviewed 1000+ portfolios and collected the most successful ones from product (UI/UX)
            designers at Figma, Meta, Twitter, Airbnb and more
          </p>
          <CustomButton
            customClass="!text-14 !font-semibold !bg-white !text-citiBlue-400 hover:!bg-citiDarkText hover:!text-white"
            handleClick={() => window.open("https://forms.gle/w54TS1SqD7YAKkV79", "_blank")}
            size={ButtonProperties.SIZES.small}
            title="Get Started"
            variant={ButtonProperties.VARIANT.secondary.name}
          />
        </div> */}
      </div>
      <div className="hidden smallLaptop:block w-1/2 bigLaptop:w-2/5 -mt-4">
        <Image alt="team spirit image" height={718} src="/images/realEstate/team-spirit.png" width={718} />
      </div>
    </div>
  );
};

export default GroupInvestmentsPage;
