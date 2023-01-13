import { useRouter } from "next/router";
import React from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomLink from "@components/atoms/CustomLink/CustomLink";
import Icon from "@components/atoms/Icons";
import Logo from "@components/atoms/Logo";

import { ButtonProperties } from "@shared/libs/helpers";

const AuthNavBar = () => {
  const router = useRouter();

  const isCreateAccountPage = router.pathname.includes("create-account");
  const linkDestination = isCreateAccountPage ? "/auth/login" : "/auth/create-account";

  return (
    <div>
      <div className="flex justify-between p-6 ">
        <CustomLink customClass="tablet:ml-6" destination="/">
          <Logo />
        </CustomLink>
        <div className="smallLaptop:hidden">
          <Icon name="hamburger" />
        </div>
        <div className="hidden smallLaptop:block">
          <div className="flex items-center mr-12 font-nunitoSans">
            <CustomLink customClass="mr-4" destination={linkDestination} hover="citiBlue-400">
              {isCreateAccountPage ? "Have an account?" : "Don’t have an account?"}
            </CustomLink>
            <CustomLink destination={linkDestination}>
              <CustomButton
                customClass="!max-w-[120px]"
                handleClick={() => {}}
                size={ButtonProperties.SIZES.small}
                title={isCreateAccountPage ? "Login" : "Sign Up"}
                variant={ButtonProperties.VARIANT.secondary.name}
              />
            </CustomLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthNavBar;
