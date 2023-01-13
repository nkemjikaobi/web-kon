import React from "react";

import { IServiceSubMenu } from "@components/organisms/DashboardLandingPage/ServicesSubMenu";

import CategoriesFilter from "../CategoriesFilter/CategoriesFilter";
import FacilitiesFilter from "../FacilitiesFilter/FacilitiesFilter";
import RatingsFilter from "../RatingsFilter/RatingsFilter";

interface FiltersProps {
  menu: Array<IServiceSubMenu> | null;
  activeCategory: string;
}
const Filters = ({ activeCategory, menu }: FiltersProps) => {
  return (
    <div className="space-y-4">
      {menu && <CategoriesFilter activeCategory={activeCategory} menu={menu} />}
      <div className="px-2">
        <hr />
        <RatingsFilter />
        <hr />
        <FacilitiesFilter />
      </div>
    </div>
  );
};

export default Filters;
