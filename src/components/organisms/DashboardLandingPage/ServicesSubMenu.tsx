import { useRouter } from "next/router";
import React from "react";

import { EntityProps } from "@dto/Product/ProductProps";

import { CATEGORIES, ENTITIES, externalDocs } from "@shared/libs/helpers";

interface ServicesSubMenuProps {
  menu: Array<IServiceSubMenu> | null;
  entity: string;
}

export interface IServiceSubMenu {
  _id: string;
  name: string;
  urlKey: string;
  entity: EntityProps;
  status: boolean;
}

const ServicesSubMenu = ({ menu, entity }: ServicesSubMenuProps) => {
  const router = useRouter();

  const handleClick = (data: IServiceSubMenu) => {
    if (data.urlKey === CATEGORIES.CUSTOMISED_TRIPS_VACATIONS) {
      window.open(externalDocs.CUSTOMISED_VACATIONS, "_blank");
    } else {
      router.push(`/${data.entity.urlKey}/search?category=${data.urlKey}`);
    }
  };

  return (
    <ul className="bg-white py-5 w-[15.625rem] h-[24.375rem] overflow-y-scroll">
      {menu &&
        menu.map((data) => (
          <li className="py-2 px-5 text-citiGray-350 hover:bg-[#EFF7FB] cursor-pointer w-full" key={data._id} onClick={() => handleClick(data)}>
            {data.name}
          </li>
        ))}
      {entity === ENTITIES.REAL_ESTATE && (
        <li className="py-2 px-5 text-citiGray-350 hover:bg-[#EFF7FB] cursor-pointer w-full capitalize" onClick={() => router.push(`/${entity}/group-investments`)}>
          group investments
        </li>
      )}
    </ul>
  );
};

export default ServicesSubMenu;
