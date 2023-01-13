import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { ElementType, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import CustomLink from "@components/atoms/CustomLink/CustomLink";
import Icon from "@components/atoms/Icons";
import Logo from "@components/atoms/Logo";
import { citiToast } from "@components/atoms/Toast";

import useClickOutside from "@hooks/useClickOutside";

import { GET_CATEGORY_BY_ENTITY } from "@graphql/entities/queries";

import { EntityProps } from "@dto/Product/ProductProps";

import { NotificationTypes, Status } from "@shared/libs/helpers";
import { MenuProps } from "@shared/models";

import { MobileNav } from "./MobileNav";
import { ProfilePopUp } from "./ProfilePopUp";

interface DashboardMobileNavigationProps {
  customMobileMenu: ElementType<{ onClose: () => void }>;
  category?: string;
  hasFilters?: boolean;
}

const DashboardMobileNavgiaton = ({ customMobileMenu: MobileMenu, category, hasFilters }: DashboardMobileNavigationProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState<boolean>(false);
  const [menu, setMenu] = useState<any>(null);

  const router = useRouter();

  const node = useClickOutside(() => {
    setIsProfileMenuOpen(false);
  });

  useEffect(() => setIsOpen(false), [router]);

  const [getCategoryByEntity, { data: categoryData, error: categoryError }] = useLazyQuery(GET_CATEGORY_BY_ENTITY, {
    variables: { urlKey: category },
  });

  useEffect(() => {
    if (category) {
      getCategoryByEntity({
        variables: {
          urlKey: category,
        },
      });
    }
  }, [category]);

  useEffect(() => {
    if (categoryData) {
      const { status, message, data } = categoryData.getCategoryByEntity;
      if (status === Status.SUCCESS) {
        setMenu(data);
      }
      if (status === Status.FAILED) {
        citiToast(NotificationTypes.ERROR, message);
      }
    }

    if (categoryError) {
      citiToast(NotificationTypes.ERROR, "Error fetching categories...");
    }
  }, [categoryData, categoryError]);

  interface EntityMenuProps {
    _id: string;
    name: string;
    urlKey: string;
    entity: EntityProps;
  }
  const getMenuStructure = (): MenuProps[] => {
    return (menu || []).map((menu: EntityMenuProps) => ({
      id: menu._id,
      name: menu.name,
      route: `/${menu.entity.urlKey}/search?category=${menu.urlKey}`,
      urlKey: menu.urlKey,
    }));
  };

  const menuData = {
    menu: getMenuStructure(),
    title: "CATEGORIES",
  };

  return (
    <>
      <div className="flex justify-between py-3 px-4 items-center bg-white">
        <div className="flex items-center">
          {isOpen && MobileMenu ? <MobileMenu onClose={() => setIsOpen(false)} /> : isOpen && <MobileNav hasFilters={hasFilters} onClose={() => setIsOpen(false)} {...menuData} />}
          {!isOpen && <GiHamburgerMenu className="cursor-pointer text-black text-18" onClick={() => setIsOpen(true)} />}
          <CustomLink customClass="cursor-pointer ml-4" destination="/">
            <Logo />
          </CustomLink>
        </div>
        <div className="flex items-center cursor-pointer relative" onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)} ref={node}>
          <Icon name="profilePlaceholder" />
          <p className="mx-2 truncate w-[60px] text-16 font-normal text-citiBlue-900">Account</p>
          <Icon name="caretDown" />
          <div className={`absolute top-5 -right-2 ${isProfileMenuOpen ? "block" : "hidden"}`}>
            <ProfilePopUp />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardMobileNavgiaton;

DashboardMobileNavgiaton.defaultProps = {
  category: "",
  hasFilters: false,
};
