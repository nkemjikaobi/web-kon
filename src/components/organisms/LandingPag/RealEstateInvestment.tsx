import Image from "next/image";
import React, { FC } from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";

import { useWindowSize } from "@hooks/useWindowSize";

import { ButtonProperties } from "@shared/libs/helpers";
import { truncateText } from "@shared/libs/helpers";

import Icon from "@atoms/Icons";

import Image3 from "@images/landingCarousel/estate10.jpeg";
import Image2 from "@images/landingCarousel/estate11.jpeg";
import Image4 from "@images/landingCarousel/estate4.jpeg";
import Image5 from "@images/landingCarousel/estate5.jpeg";
import Image6 from "@images/landingCarousel/estate6.jpeg";
import Image7 from "@images/landingCarousel/estate7.jpeg";
import Image8 from "@images/landingCarousel/estate8.jpeg";
import Image1 from "@images/landingCarousel/estate9.jpeg";

const RealEstateInvestment: FC = () => {
  const [width] = useWindowSize();

  const textDescriptionLimit = width > 768 ? 140 : 100;

  return (
    <div className="flex justify-center bg-citiGreen-500 smallLaptop:pt-14 w-full mx-0 px-0 overflow-hidden pt-8 pb-12 smallLaptop:pb-28">
      <div className="flex flex-col w-full max-w-[1440px]">
        <div className="flex justify-between items-center px-4 smallLaptop:px-16 mb-8 tablet:mb-11">
          <div>
            <h2 className="font-recoleta text-20 smallLaptop:text-40 text-white">Real Estate Investments</h2>
            <p className="font-nunitoSans text-13 smallLaptop:text-24 font-normal text-white">
              Put your money to work by investing in our real estates, <br />
              you can also purchase properties.
            </p>
          </div>
          <div className="hidden tablet:flex items-center justify-between w-[243px] h-[59px] border-white border-[1px] pl-4 pr-6 cursor-pointer">
            <div className="flex items-center">
              <Icon name="location" />
              <input className="bg-transparent font-nunitoSans text-white text-16 ml-3 w-[70%] border-0 outline-0 placeholder:text-white" placeholder="Enter Location" />
            </div>
            <Icon name="arrowDown" />
          </div>
        </div>
        <div className="flex overflow-auto hide-scrollbar mb-8 tablet:mb-[63px]">
          {investmentData.map((data, index) => (
            <div
              className="first:ml-4 smallLaptop:first:ml-16 bg-white w-[244px] min-w-[244px] tablet:w-[400px] tablet:min-w-[400px] px-2 smallLaptop:px-4 pt-2 smallLaptop:pt-3 mr-2 smallLaptop:mr-4 last:mr-0"
              key={index}
            >
              <Image alt={data.title} height={240} src={data.image} width={368} />
              <div className="pt-4 pb-4 smallLaptop:pb-9">
                <p className="font-nunitoSans font-bold text-10 tablet:text-12 text-citiDarkText">{data.location}</p>
                <p className="font-recoleta font-semibold text-16 tablet:text-24 tablet:my-1 text-citiDarkText">{data.title}</p>
                <p className="font-nunitoSans text-13 tablet:text-16 text-citiDarkText" title={data.description}>
                  {truncateText(data.description, textDescriptionLimit)}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <CustomButton
            customClass="!border-white !text-white !rounded-none"
            handleClick={() => {}}
            isTransparent={true}
            size={ButtonProperties.SIZES.small}
            title="View More Listings"
            variant={ButtonProperties.VARIANT.secondary.name}
          />
        </div>
      </div>
    </div>
  );
};

export default RealEstateInvestment;

const investmentData = [
  {
    image: Image1,
    location: "BANANA ISLAND, LAGOS NIGERIA",
    title: "Grenadines Homes",
    description:
      "Our properties each have their own unique design aesthetic, providing an aspirational lifestyle within a thriving community, supported by Grenadines Homes’ management teams.",
  },
  {
    image: Image3,
    location: "BANANA ISLAND, LAGOS NIGERIA",
    title: "L3 Banana",
    description: "Designed as the first of two towers, phase one of the aqualina includes 154 furniture ready residence in miami.",
  },
  {
    image: Image2,
    location: "LAGOS NIGERIA",
    title: "Palton Morgans Holdings",
    description:
      "Palton Morgan Holdings is a real estate developme nt brand, focused on advancing lives. We create contemporary structures, aspirational lifestyle and thriving communities.",
  },
  {
    image: Image8,
    location: "BANANA ISLAND, LAGOS NIGERIA",
    title: "Paramount Twin Tower",
    description:
      "Paramount Twin Towers is an unprecedented residential masterpiece just steps away from the Atlantic. Driven by a desire to change the meaning of sophistication, this architectural endeavor offers a new interpretation of luxurious living designed by the award winning architect firm ‘ECAD’.",
  },
  {
    image: Image5,
    location: "Katampe, abuja nigeria",
    title: "Grenadines Resort",
    description:
      "Owning a house in Grenadines Resort, Katampe gives you entry into an exclusive gated community of individuals who appreciate and desire quality, exclusivity and serenity. Enjoy the generous interior spaces and large windows inbuilt into each of the units, the swings at the lawn tennis court, sunbathing at the pool side and a lasting grin of relief that spread through your face after an exercise in a state-of-the-art gym.",
  },
  {
    image: Image7,
    location: "BANANA ISLAND, LAGOS NIGERIA",
    title: "Cerulean Towers",
    description:
      "Cerulean Towers is a revolution that Nigeria wants a modern mixed-use development of commercial and residential resort in Lagos that befits the country’s ambitious vision. It is an icon of the future. Architecturally inspired by the sculpted beauty of seashells, which punctuate the shores of Victoria Island, as well as the artful personality of colonial houses of Ikoyi.",
  },
  {
    image: Image4,
    location: "BANANA ISLAND, LAGOS NIGERIA",
    title: "Skyvilla",
    description:
      "Skyvilla offers a private enclave of luxury contemporary residences that defines a style of living, elegance and beauty. To bring this exquisite property to life, The Grenadines Homes called the renowned architects to design this elegant 10 storied tower with beautifully proportioned floors plans. These masters of contemporary design have created an exquisite beauty for the residents of Skyvilla.",
  },
  {
    image: Image6,
    location: "BANANA ISLAND, LAGOS NIGERIA",
    title: "Oceanna",
    description:
      "Outﬁtted with state-of-the-art ﬁxtures, amenities and systems – beﬁtting their Grade A status, The Oceanna Offices allows you to own your office spaces in the Heart of Victoria Island.",
  },
];
