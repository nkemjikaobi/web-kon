import { useRouter } from "next/router";
import React, { FC } from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";

import { ButtonProperties } from "@shared/libs/helpers";

import { StackedAnimation } from "../StackedAnimation";

const BecomeAMerchant: FC = () => {
  const merchantUrl: any = process.env.NEXT_PUBLIC_MERCHANT_FRONTEND_DOMAIN || "https://merchant.citisquare.africa/";

  const router = useRouter();

  return (
    <div className="flex justify-center bg-white px-4 smallLaptop:px-16 pt-8 pb-14 smallLaptop:py-28 overflow-hidden">
      <div className="smallLaptop:flex justify-between w-full max-w-[1440px]">
        <div className="w-full smallLapotp:w-1/2 flex justify-center">
          <div className="smallLaptop:w-[610px]">
            <h2 className="font-recoleta font-semibold text-20 smallLaptop:text-40 mb-1">Merchants are more profitable at CitiSquare</h2>
            <p className="font-nunitoSans font-normal text-13 smallLaptop:text-24 mb-5">
              We know you’ve got an extra-ordinary value. That is why we created an extra-ordinary market for you{" "}
            </p>
            <ul className="mb-8 ml-5 smallLaptop:ml-8 font-nunitoSans text-13 smallLaptop:text-24 font-light list-disc">
              {merchantList.map((item) => (
                <li className="mb-2" key={item}>
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-nunitoSans font-normal text-13 smallLaptop:text-24 mb-5">Ready to scale your business today?</p>
            <CustomButton
              customClass="text-12 smallLaptop:text-14 !rounded-none !w-[200px]"
              handleClick={() => router.push(merchantUrl)}
              size={ButtonProperties.SIZES.small}
              title="GET STARTED"
              variant={ButtonProperties.VARIANT.primary.name}
            />
          </div>
        </div>
        <StackedAnimation />
      </div>
    </div>
  );
};

export default BecomeAMerchant;

const merchantList: string[] = ["Property Developers", "Vacation Service Providers", "Buy Now Pay Later", "Mortgage"];
