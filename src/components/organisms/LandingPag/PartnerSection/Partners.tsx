import Image from "next/image";
import React from "react";

import { PartnerList } from "@componentData/Partners/PartnerList";

const Partners = () => {
  return (
    <>
      <div className="mt-4 smallLaptop:mt-10 ml-3 mr-3 pt-3">
        <h2 className="tablet:text-center font-nunitoSans text-citiBlue-400 font-bold text-24 text-center">Our Partners</h2>
        <div className="grid grid-cols-4 items-center justify-center smallLaptop:grid-cols-6 desktop:grid-cols-6 mt-3  smallLaptop:pt-[40px] smallLaptop:pl-[98px] smallLaptop:pr-[98px]">
          {PartnerList.map((list) => (
            <div className="mr-8 flex justify-center" key={list.id}>
              <Image alt="logo" src={list.image} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Partners;
