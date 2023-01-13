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

const DesktopFooter = () => {
  return (
    <>
      <div className="bg-citiBlue-500 px-36 py-20 h-[551px] -ml-[50vw] left-[50%]  relative w-screen text-white grid grid-cols-5 gap-4">
        <div className="col-span-2">
          <CustomLink destination="/">
            <Logo theme="dark" />
          </CustomLink>
          <p className="w-4/5 mt-8 text-sm leading-6 my-4">{footerAbout}</p>
          <p className="w-4/5 text-sm leading-6 my-4">{footerAbout2}</p>
        </div>
        <FooterOptions options={Business} title="Business" />
        <FooterOptions options={Company} title="Company" />
        <div>
          <FooterOptions hasIcons={true} options={FollowUs} title="Follow us" />
          <FooterOptions hasIcons={true} options={PaymentMethods} title="Payment methods" />
        </div>
        <img className="h-[254px] w-screen absolute bottom-[-70px]" src="/images/png/carsAndMountain.png" />
      </div>
      <div className="flex justify-between items-center p-[7rem] smallLaptop:p-[2rem] desktop:p-[3rem] desktop:px-36">
        <p className="text-citiGray-500">
          <span className="mr-4">CitiSquare &#169; Copywright {new Date().getFullYear()}</span> <span className="mr-4"> &#8226;</span> <span> All rights reserved</span>
        </p>
        <p className="text-citiGray-500 z-50">
          <Link href="/privacy-policy">
            <span className="mr-4 cursor-pointer">Terms & Conditions</span>
          </Link>{" "}
          <span className="mr-4">&#8226;</span>{" "}
          <Link href="/privacy-policy">
            <span className="w-min cursor-pointer">Privacy Policy</span>
          </Link>
        </p>
      </div>
    </>
  );
};

export default DesktopFooter;
