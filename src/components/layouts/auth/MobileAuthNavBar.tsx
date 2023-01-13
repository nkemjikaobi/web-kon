import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomLink from "@components/atoms/CustomLink/CustomLink";
import Logo from "@components/atoms/Logo";

import useClickOutside from "@hooks/useClickOutside";

import { ButtonProperties } from "@shared/libs/helpers";

import { AuthNavData } from "@componentData/Navigation/AuthNavData";

const MobileAuthNavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const router = useRouter();

  const node = useClickOutside(() => {
    setIsOpen(false);
  });

  return (
    <>
      <div className="flex justify-between py-3 px-4 items-center">
        <CustomLink customClass="cursor-pointer mt-4" destination="/">
          <Logo />
        </CustomLink>
        {isOpen ? <AiOutlineClose className="cursor-pointer" onClick={() => setIsOpen(false)} /> : <GiHamburgerMenu className="cursor-pointer" onClick={() => setIsOpen(true)} />}
      </div>
      <div className={`px-4 pt-4 pb-5 ${isOpen ? "openNav" : "closeNav"}`} ref={node}>
        {AuthNavData.map((data) => (
          <Link href={data.route} key={data.id}>
            <div className="mr-12 mb-4 w-full cursor-pointer">
              <span>{data.name}</span>
            </div>
          </Link>
        ))}
        <div>
          <CustomButton
            handleClick={() => router.push("/auth/create-account")}
            size={ButtonProperties.SIZES.small}
            title="Get Started"
            variant={ButtonProperties.VARIANT.secondary.name}
          />
        </div>
      </div>
    </>
  );
};

export default MobileAuthNavBar;
