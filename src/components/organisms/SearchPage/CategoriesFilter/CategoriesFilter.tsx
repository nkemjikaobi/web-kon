import { useRouter } from "next/router";
import React from "react";

import { IServiceSubMenu } from "@components/organisms/DashboardLandingPage/ServicesSubMenu";

import { classNames } from "@shared/libs/helpers";

import ParentFilter from "../ParentFilter/ParentFilter";

interface CategoriesFilterProps {
  menu: Array<IServiceSubMenu> | null;
  activeCategory: string;
}
const CategoriesFilter = ({ activeCategory, menu }: CategoriesFilterProps) => {
  const router = useRouter();
  return (
    <ParentFilter showApply={false} title="categories">
      <hr className="mb-[1.313rem]" />
      {menu &&
        menu.map((data) => (
          <li
            className={classNames("py-2 px-4 text-citiGray-350 hover:bg-[#EFF7FB] cursor-pointer w-full list-none", activeCategory === data.urlKey ? "bg-[#EFF7FB]" : "")}
            key={data._id}
            onClick={() => router.push(`/${data.entity.urlKey}/search?category=${data.urlKey}`)}
          >
            {data.name}
          </li>
        ))}
    </ParentFilter>
  );
};

export default CategoriesFilter;
