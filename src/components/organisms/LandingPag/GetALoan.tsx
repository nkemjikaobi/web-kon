import React, { FC } from "react";

// import Image from "next/image";
// import Icon from "@atoms/Icons";
// import XenpeopleIcon from "/public/images/svg/xenpeople.svg";
import CustomButton from "@components/atoms/CustomButton/CustomButton";

import { ButtonProperties } from "@shared/libs/helpers";

const GetALoan: FC = () => (
  <div className="flex justify-center bg-white px-4 smallLaptop:px-16 py-12 smallLaptop:py-20">
    <div className="smallLaptop:flex max-w-[1440px]">
      <div className="flex flex-col items-center">
        <div className="text-center flex flex-col items-center justify-center max-w-[890px]">
          <h1 className="font-recoleta font-semibold text-24 smallLaptop:text-64 text-center">We strike the best deal on loans</h1>
          <p className="font-nunitoSans text-13 smallLaptop:text-24 mt-4 mb-6 text-center">
            No money? No problem. You have competitive options from a pool of licensed and capacity-endowed financial services merchants on the Citisquare platform.
          </p>
          <CustomButton
            customClass="capitalize !rounded-none"
            handleClick={() => {}}
            size={ButtonProperties.SIZES.small}
            title="Check them out"
            variant={ButtonProperties.VARIANT.secondary.name}
          />
        </div>
        <div className="grid grid-cols-1 tablet:grid-cols-2 smallLaptop:grid-cols-3 gap-4 tablet:gap-8 mt-16 smallLaptop:px-20">
          {loanOffer.map((offer, index) => (
            <div className="border-black rounded-[3px] border-[1px] py-4 smallLaptop:py-8 px-4 h-auto tablet:min-h-[240px]" key={index}>
              <div className="flex flex-col h-full">
                <h6 className="text-10 smallLaptop:text-12 mb-2 font-bold font-nunitoSans text-citiDarkText">LOANS WE OFFER</h6>
                <h6 className="text-20 smallLaptop:text-24 font-recoleta mb-2 font-medium smallLaptop:font-semibold text-citiDarkText">{offer.title}</h6>
                <p className="text-citiDarkText font-nunitoSans font-normal text-13 smallLaptop:text-16">{offer.description}</p>
                {/* <div className="mt-5 tablet:mt-auto">
                  <h6 className="font-nunitoSans font-bold text-10 smallLaptop:text-12 mt-auto py-4">MERCHANTS</h6>
                  <div className="grid grid-cols-7 gap-2 items-center">
                    <Image alt="Xenpeople logo in meerchant list" height={40} src={XenpeopleIcon} width={40} />
                    <Icon name="flutterwave" />
                    <Icon name="airtel" />
                    <Icon name="ups" />
                    <Icon name="uba" />
                    <Icon name="flutterwave" />
                    <h6 className="num">+2.3k</h6>
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default GetALoan;

const loanOffer = [
  {
    title: "Buy Now Pay Later",
    description:
      "Our Buy Now Pay Later Loan option enables you to choose a lender that pays for what you want now on Citisquare while you pay back on terms that work for you. That's it, so no excuses, go ahead and indulge. It's all yours.",
  },
  {
    title: "Mortgage Loans",
    description:
      "In our quest to make you live life at its best, we have partnered with licensed mortgage providers to make it easier for you to buy or refinance a home without having all the cash upfront.",
  },
  {
    title: "Personal Loans",
    description:
      "No need to wonder about in search of personal loan. Right here on Citisquare, you can borrow money and spend even outside the platform. Seen an opportunity you must not miss? Apply for a Personal Loan Now.",
  },
];
