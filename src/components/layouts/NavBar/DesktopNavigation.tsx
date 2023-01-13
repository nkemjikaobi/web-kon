import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "src/store/rootReducer";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomLink from "@components/atoms/CustomLink/CustomLink";

import { ButtonProperties } from "@shared/libs/helpers";

import { DesktopNav } from "@componentData/Navigation/DesktopNav";

import Logo from "@atoms/Logo";

const DesktopNavigation = () => {
  const { firstName } = useSelector((state: AppState) => state.auth.user);

  const router = useRouter();
  return (
    <div className="flex justify-between items-center h-24 -ml-[50vw] left-[50%] relative w-screen px-16 bigLaptop:px-20 bg-white">
      <CustomLink destination="/">
        <Logo />
      </CustomLink>
      <ul className="flex items-center justify-center">
        {DesktopNav.map((data) => (
          <li className={`mr-12 text-sm ${data.isAuthenticated && firstName ? "hidden" : ""} ${data.isInfo ? "text-citiGray-500" : "text-citiBlue-400"}`} key={data.id}>
            <CustomLink customClass="hover:!text-citiBlue-400" destination={data.route}>
              {data.name}
            </CustomLink>
          </li>
        ))}
        {!firstName && (
          <>
            <li>
              <CustomButton
                customClass="!rounded-none"
                handleClick={() => {
                  router.push("/auth/create-account");
                }}
                size={ButtonProperties.SIZES.small}
                title="Get Started"
                variant={ButtonProperties.VARIANT.secondary.name}
              />
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default DesktopNavigation;
