import Image, { StaticImageData } from "next/image";
import React from "react";

interface OfferProps {
  id: number;
  image: StaticImageData;
  title: string;
  location: string;
  rating: StaticImageData;
  discount?: string;
}

const GetOffers = ({ offer }: { offer: OfferProps[] }) => {
  return (
    <>
      <div className=" mt-8 flex overflow-x-scroll hide-scrollbar tablet:mt-[2.6rem] tablet:overflow-y-hidden scroll-smooth" id="offer">
        {offer.map((data) => (
          <div key={data.id}>
            <div className="relative mr-4 ">
              <div className="rounded-sm w-[19rem] smallLaptop:w-[20rem] bigLaptop:w-[24rem]">
                <Image alt="..." className="w-full h-full" src={data.image} />
              </div>
              <div className="absolute bottom-10 left-3 text-white">
                <p className="text-18 font-recoleta font-semibold smallLaptop:text-24">{data.title}</p>
                <div className="flex">
                  <p className="text-12 mr-2 mt-1">{data.location}</p>
                  <div className="w-[3.25rem] h-[0.7rem] smallLaptop:w-[4.3rem]">
                    <Image alt="..." src={data.rating} />
                  </div>
                </div>
              </div>
              {data.discount && (
                <div className="absolute top-3 font-nunitoSans text-10 text-white discount-bg right-6 border rounded-xl p-1">
                  <p>{data.discount}% Off</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GetOffers;
