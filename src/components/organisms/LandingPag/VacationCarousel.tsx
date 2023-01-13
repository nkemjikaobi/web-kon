import { useQuery } from "@apollo/client";
import Link from "next/link";
import React from "react";

import useDirection from "@hooks/useDirection";

import { GET_RANDOM_PRODUCTS } from "@graphql/product/queries";

import Icon from "@atoms/Icons";

import Estate1 from "@images/landingCarousel/estate1.jpeg";
import Estate2 from "@images/landingCarousel/estate2.jpeg";
import Estate3 from "@images/landingCarousel/estate3.jpeg";
import Estate4 from "@images/landingCarousel/estate4.jpeg";
import Estate5 from "@images/landingCarousel/estate5.jpeg";
import Estate6 from "@images/landingCarousel/estate6.jpeg";
import Estate7 from "@images/landingCarousel/estate7.jpeg";
import Estate8 from "@images/landingCarousel/estate8.jpeg";
import Vacation1 from "@images/landingCarousel/vacation1.jpeg";
import Vacation2 from "@images/landingCarousel/vacation2.jpeg";
import Vacation3 from "@images/landingCarousel/vacation3.jpeg";
import Vacation4 from "@images/landingCarousel/vacation4.jpeg";
import Vacation5 from "@images/landingCarousel/vacation5.jpeg";
import Vacation6 from "@images/landingCarousel/vacation6.jpeg";
import Vacation7 from "@images/landingCarousel/vacation7.jpeg";
import Vacation8 from "@images/landingCarousel/vacation8.jpeg";

import VactionChoices from "./VactionChoices";

interface CarouselDataProps {
  image: string;
  title: string;
  location: string;
  quantity: string;
  url?: string;
}

const VacationCarousel = () => {
  const { data: randomProducts } = useQuery(GET_RANDOM_PRODUCTS);

  const getCarouselData = (): CarouselDataProps[] => {
    if (randomProducts?.getRandomProducts?.data) {
      return randomProducts?.getRandomProducts?.data.map((products: any) => ({
        image: products.imageUrl[0],
        title: `${products.entity[0].name?.toUpperCase()} CHOICES`,
        location: `${products.category[0].name}`,
        quantity: "",
        url: `/${products.entity[0].urlKey}/${products._id}`,
      }));
    }

    return carouselData;
  };

  const { activeIndex, prev, next } = useDirection(getCarouselData().length);

  return (
    <div className="relative mb-0 cursor-pointer">
      <div
        className="hidden absolute cursor-pointer top-[40%] right-[8%] shadow-white-btn z-10 rounded-full bg-white w-14 h-14 smallLaptop:w-20 smallLaptop:h-20  tablet:flex justify-center items-center"
        onClick={next}
      >
        <Icon name="arrowRight" />
      </div>

      <div
        className="hidden absolute cursor-pointer top-[40%] left-[8%] shadow-white-btn z-10 rounded-full bg-white w-14 h-14 smallLaptop:w-20 smallLaptop:h-20 tablet:flex justify-center items-center"
        onClick={prev}
      >
        <Icon name="arrowLeft" />
      </div>
      {getCarouselData().map((data, ind: number) => (
        <Link href={data?.url || "#"} key={ind}>
          <div className={`relative w-full bg-black ${activeIndex === ind ? "fadeInOut" : "hidden"}`} key={ind}>
            <img className="object-cover min-h-[200px] max-h-[350px] tablet:max-h-full h-[calc(100vh-200px)] w-full" src={data.image} />
            <div className="absolute bottom-[30%] tablet:bottom-[7%] smallLaptop:bottom-[40%] left-[10%] tablet:left-[15%]">
              <VactionChoices location={data.location} quantity={data.quantity} title={data.title} />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default VacationCarousel;

const carouselData: CarouselDataProps[] = [
  { image: Estate1.src, title: "Real Estate Choices", location: "Grenadine Homes", quantity: "33 Properties" },
  { image: Estate2.src, title: "Real Estate Choices", location: "Palton Morgan", quantity: "44 properties" },
  { image: Vacation1.src, title: "Vacation Choices", location: "Morrocco", quantity: "1k Campers" },
  { image: Vacation2.src, title: "Vacation Choices", location: "Egypt", quantity: "3.5k Campers" },
  { image: Estate3.src, title: "Real Estate Choices", location: "L3 Banana", quantity: "273 Listed Properties" },
  { image: Estate4.src, title: "Real Estate Choices", location: "Skyvilla", quantity: "25 Listed Properties" },
  { image: Vacation3.src, title: "Vacation Choices", location: "Maldives", quantity: "1k Campers" },
  { image: Vacation4.src, title: "Vacation Choices", location: "Brazil", quantity: "1.2k Campers" },
  { image: Estate5.src, title: "Real Estate Choices", location: "Grenadines Resort", quantity: "273 Listed Properties" },
  { image: Estate6.src, title: "Real Estate Choices", location: "Oceanna", quantity: "44 properties" },
  { image: Vacation5.src, title: "Vacation Choices", location: "Malta", quantity: "1.5k Campers" },
  { image: Vacation6.src, title: "Vacation Choices", location: "Seychelles", quantity: "3k Campers" },
  { image: Estate7.src, title: "Real Estate Choices", location: "Cerulean Towers", quantity: "33 Properties" },
  { image: Estate8.src, title: "Real Estate Choices", location: "Paramount Twin Tower", quantity: "25 Listed Properties" },
  { image: Vacation7.src, title: "Vacation Choices", location: "Norway", quantity: "2k Campers" },
  { image: Vacation8.src, title: "Vacation Choices", location: "Croatia", quantity: "2k Campers" },
];
