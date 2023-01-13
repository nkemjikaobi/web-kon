import React, { useState } from "react";

import Icon from "@components/atoms/Icons";

import { useWindowSize } from "@hooks/useWindowSize";

import { slideLeft, slideRight } from "@shared/libs/helpers";

import { DiscountOfferData } from "@componentData/Offers/DiscountOfferData";
import { FeatureMerchantData } from "@componentData/Offers/FeatureMerchantData";
import { NewestOfferData } from "@componentData/Offers/NewestOfferData";
import { TrendingOfferData } from "@componentData/Offers/TrendingOfferData";

import AllOffers from "./AllOffers";
import OfferContent from "./OfferContent";

const offer = [
  {
    id: 0,
    title: "Discount Offer",
    discount: DiscountOfferData,
  },
  {
    id: 1,
    title: "Newest Offer",
    discount: NewestOfferData,
  },
  {
    id: 2,
    title: "Trending Offer",
    discount: TrendingOfferData,
  },
  {
    id: 3,
    title: "Feature Merchant",
    discount: FeatureMerchantData,
  },
];

const Offers = () => {
  const [component, setComponent] = useState(0);

  const [width] = useWindowSize();
  return (
    <>
      <div className="pl-4 pt-[3.0rem] smallLaptop:pt-[4.125rem] pb-[2.5rem] tablet:pb-[4.375rem] smallLaptop:pl-20 bg-citiBlue-b50">
        <OfferContent />
        <div className="mt-8 pr-4">
          <div className="smallLaptop:flex smallLaptop:justify-between">
            <div className="flex text-center p-2 border border-citiBlue-400 text-citiBlue-400 text-10 smallLaptop:text-12 mobileBelow:space-x-4">
              {offer.map((list, index) => (
                <div key={index}>
                  <p
                    className={`p-1 mobile:mr-[28px] tablet:mr-[55px] smallLaptop:p-[0.88rem] cursor-pointer smallLaptop:text-14 ${
                      component === list.id ? "bg-citiBlue-400 text-white rounded-sm" : ""
                    }`}
                    onClick={() => {
                      if (list.id === index) {
                        setComponent(list.id);
                      }
                    }}
                  >
                    {list.title}
                  </p>
                </div>
              ))}
            </div>
            <div className="hidden smallLaptop:block mt-2 smallLaptop:mr-[5rem] mr-[4.6rem]">
              <div className=" flex cursor-pointer">
                <div>
                  <Icon name="leftArrow" onClick={() => slideLeft("offer", width >= 1208 ? 368 : 325)} />
                </div>

                <div className="ml-2 cursor-pointer">
                  <Icon name="rightArrow" onClick={() => slideRight("offer", width >= 1208 ? 368 : 325)} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <AllOffers offer={offer[component].discount} />
      </div>
    </>
  );
};

export default Offers;
