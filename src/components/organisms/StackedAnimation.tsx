import Image from "next/image";
import React, { useEffect, useState } from "react";

import { useWindowSize } from "@hooks/useWindowSize";

import Grenadine1 from "@images/becomeAMerchant/grenadine1.png";
import Grenadine2 from "@images/becomeAMerchant/grenadine2.png";
import Grenadine3 from "@images/becomeAMerchant/grenadine3.png";
import Oceana from "@images/becomeAMerchant/oceana.png";
import PaltonMorgans from "@images/becomeAMerchant/palton-morgans.png";
import Sujimoto from "@images/becomeAMerchant/sujimoto.png";

export const StackedAnimation = () => {
  const [active, setActive] = useState<number>(0);
  const [isReverse, setIsReverse] = useState<boolean>(false);

  const [width] = useWindowSize();

  const imageHeight = width > 1000 ? 380 : 340;
  const imageWidth = width > 1000 ? 320 : 290;

  const getImgWrapperClass = (active: number, value: number) => `absolute ${isReverse ? getReverseClass(active, value) : getForwardClass(active, value)}`;

  const getInlineStyle = (index: number) => ({
    zIndex: index + 1,
    transform: getTransformValue(index),
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isReverse) {
        if (active === stackedData.length - 1) {
          setIsReverse(true);
        } else setActive(active + 1);
      } else {
        if (active === 0) {
          setIsReverse(false);
        } else setActive(active - 1);
      }
    }, 1500);

    return () => clearInterval(intervalId);
  }, [active, isReverse]);

  return (
    <div className="w-full mt-10 smallLaptop:mt-0 smallLaptop:w-1/2 smallLaptop:flex flex-col items-center">
      <div className="flex justify-center min-h-[320px] min-w-[250px] smallLaptop:min-h-[400px] smallLaptop:min-w-[384px] mx-3 smallLaptop:ml-7">
        <div className="flex justify-center smallLaptop:justify-start w-full relative">
          <div className="absolute smallLaptop:right-[60px]">
            <Image alt="Merchant product images" className="object-cover" height={imageHeight} src={stackedData[0].image} width={imageWidth} />
          </div>
          {stackedData.slice(1).map((value, index) => (
            <div className={getImgWrapperClass(active, index)} key={index} style={getInlineStyle(index)}>
              <Image alt="Merchant product images" className="object-cover" height={imageHeight} src={value.image} width={imageWidth} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 smallLaptop:mt-0">
        <p className="font-body text-24 mb-1 text-center smallLaptop:-ml-10">{stackedData[active].merchant}</p>
        <p className="font-bold text-16 text-center smallLaptop:-ml-10">{stackedData[active].category}</p>
        <p className="font-normal text-14 text-citiGray-900 pl-1 text-center smallLaptop:-ml-10">{stackedData[active].listingNumber}</p>
      </div>
    </div>
  );
};

const getTransformValue = (value: number) => `rotate(${value % 2 ? "-" : ""}${value * 1.3 + 1}deg)`;

const getForwardClass = (active: number, value: number) => (active === value ? "stackedslideIn" : active < value && "hidden");

const getReverseClass = (active: number, value: number) => (active === value ? "stackedslideOut" : active > value ? "block" : "hidden");

const stackedData = [
  {
    image: Grenadine1,
    merchant: "Grenadines Homes",
    category: "Property Developers",
    listingNumber: "250 Listed Properties",
  },
  {
    image: Sujimoto,
    merchant: "Sujimoto",
    category: "Property Developers",
    listingNumber: "20 Listed Properties",
  },
  {
    image: PaltonMorgans,
    merchant: "Palton Morgans",
    category: "Property Developers",
    listingNumber: "20 Listed Properties",
  },
  {
    image: Oceana,
    merchant: "Oceanna",
    category: "Property Developers",
    listingNumber: "20 Listed Properties",
  },
  {
    image: Grenadine2,
    merchant: "Grenadines Homes",
    category: "Property Developers",
    listingNumber: "250 Listed Properties",
  },
  {
    image: Grenadine3,
    merchant: "Grenadines Homes",
    category: "Property Developers",
    listingNumber: "250 Listed Properties",
  },
];
