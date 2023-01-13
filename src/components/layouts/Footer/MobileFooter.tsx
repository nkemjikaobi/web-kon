import Link from "next/link";
import React from "react";
import { Business } from "src/componentData/Footer/Business";
import { Company } from "src/componentData/Footer/Company";
import { FollowUs } from "src/componentData/Footer/FollowUs";
import { PaymentMethods } from "src/componentData/Footer/PaymentMethods";
import FooterOptions from "src/components/FooterOptions.tsx/FooterOptions";

import CustomLink from "@components/atoms/CustomLink/CustomLink";

import Logo from "@atoms/Logo";

import { footerAbout, footerAbout2 } from "./FooterContent";

const MobileFooter = () => {
  return (
    <>
      <div className="relative">
        <div className="bg-citiBlue-500 p-5 pb-7 text-white">
          <CustomLink destination="/">
            <Logo theme="dark" />
          </CustomLink>
          <p className="mt-8 text-sm leading-6 my-4">{footerAbout}</p>
          <p className="text-sm leading-6">{footerAbout2}</p>
          <div className="flex justify-between mt-12">
            <FooterOptions options={Business} title="Business" />
            <FooterOptions options={Company} title="Company" />
          </div>
          <FooterOptions hasIcons={true} options={FollowUs} title="Follow us" />
          <FooterOptions hasIcons={true} options={PaymentMethods} title="Payment methods" />
        </div>
        <img className="h-[94px] w-screen absolute bottom-[-25px]" src="/images/png/carsAndMountain.png" />
      </div>
      <div className="flex flex-col p-5">
        <p className="text-citiGray-500">
          <span className="mr-4">CitiSquare &#169; Copywright {new Date().getFullYear()}</span> <span> All rights reserved</span>
        </p>
        <p className="text-citiGray-500 my-4">
          <span className="mr-4">&#8226;</span>
          <Link href="/privacy-policy">
            <span className="mr-4">Terms & Conditions</span>
          </Link>{" "}
          <br />
          <span className="mr-4">&#8226;</span>{" "}
          <Link href="/privacy-policy">
            <span>Privacy Policy</span>
          </Link>
        </p>
      </div>
    </>
  );
};

export default MobileFooter;
