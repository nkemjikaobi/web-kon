import Image from "next/image";
import React from "react";

import Icon from "@components/atoms/Icons";

import { slideLeft, slideRight } from "@shared/libs/helpers";

import { ExperienceData } from "@componentData/Experience/ExperienceData";

const Experience = () => {
  return (
    <>
      <div className="pl-4 pr-4 mt-4 desktop:pl-[5rem] desktop:pr-[5rem] desktop:pt-[5.75rem] relative">
        <div>
          <h1 className="font-recoleta font-semibold text-20 tablet:text-24 smallLaptop:text-40 capitalize w-[75%] smallLaptop:w-[50%]">Exciting Vacation Experiences</h1>
          <div className=" flex overflow-x-scroll scroll-smooth hide-scrollbar bg-white mt-4 tablet:mt-[2.6rem] tablet:overflow-y-hidden" id="experience">
            {ExperienceData.map((data) => (
              <div key={data.id}>
                <div className="mr-4 bg-gray-50 rounded-sm w-[11rem] smallLaptop:w-[16rem] bigLaptop:w-[19rem] television:w-[25rem]">
                  <Image alt={data.place} className="object-cover" height={302} layout="responsive" src={data.image} width={302} />
                </div>
                <div>
                  <h6 className="font-nunitoSans font-bold text-14 tablet:text-20 mt-2" style={{ letterSpacing: "-0.02em" }}>
                    {data.place}
                  </h6>
                  <div className="flex  mt-1 tablet:mt-2 font-nunitoSans text-[#2C2C2C]" key={data.id}>
                    <p className="text-10 tablet:text-12">{data.location}</p>
                    <div className="mt-1 ml-2 mr-2">
                      <Icon name="greyDot" />
                    </div>
                    <p className="tablet:text-12 text-10">{data.stats} Experience</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden tablet:block">
          <div className="absolute tablet:left-0 desktop:left-12 tablet:top-[60%] cursor-pointer " onClick={() => slideLeft("experience", 1500)}>
            <Icon name="moveLeft" />
          </div>
          <div className="absolute tablet:right-0 desktop:right-16 tablet:top-[60%] cursor-pointer television:right-12" onClick={() => slideRight("experience", 1500)}>
            <Icon name="moveRight" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
