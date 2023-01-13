import Image from "next/image";
import React from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";

import { ButtonProperties } from "@shared/libs/helpers";

import Icon from "@atoms/Icons/index";

const ShortLetData = [
  {
    id: 1,
    name: "Dakkada Estates",
    location: "akwa ibom nigeria",
    url: "/images/png/dakkada-minor.png",
  },
  {
    id: 2,
    name: "Dakkada Estates",
    location: "akwa ibom nigeria",
    url: "/images/png/dakkada-major.png",
  },
];

const RentShortLets = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-full z-10 opacity-75 bg-gradient-to-b from-[#131E27] to-citiBlue-500" />
      <div className="bg-hotel h-[420px] smallLaptop:h-[986px] bg-cover overflow-hidden bg-no-repeat bg-center -ml-[50vw] left-[50%] relative w-screen text-white">
        <div className="absolute z-20 top-1/4 smallLaptop:top-2/4 left-10 smallLaptop:left-24">
          <div className="border border-citiGreen-500 flex justify-center w-3/5 tablet:w-[288px] font-semibold py-5 whitespace-nowrap px-2 items-center">
            <Icon name="location" />
            <p className="ml-4 text-sm smallLaptop:text-base">Victoria Garden Enugu</p>
          </div>
          <h3 className="font-recoleta leading-4 font-semibold text-3xl smallLaptop:text-64 mt-4  smallLaptop:mt-6">Rent Shortlets</h3>
          <p className="my-2 smallLaptop:mb-0 w-2/3 text-xs smallLaptop:text-base">Channel your energy in planning your trip and not where to stay.</p>
          <CustomButton
            customClass="my-4 !rounded-none"
            handleClick={() => {}}
            size={ButtonProperties.SIZES.small}
            title="Rent Shortlets"
            variant={ButtonProperties.VARIANT.secondary.name}
          />
        </div>
        <div className="hidden z-20 bigLaptop:absolute  bigLaptop:top-1/4 bigLaptop:-right-48 bigLaptop:flex ">
          {ShortLetData.map((data) => (
            <div className="bg-white p-5 w-[400px] mr-4 text-black" key={data.id}>
              <Image height={240} src={data.url} width={368} />
              <p className="uppercase font-bold text-xs mt-2">{data.location}</p>
              <p className="font-medium font-recoleta text-xl my-2">{data.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RentShortLets;
