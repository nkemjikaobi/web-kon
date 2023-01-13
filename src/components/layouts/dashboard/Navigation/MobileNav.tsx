import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

import { MenuItem } from "@components/molecules/MenuItem";
// import FacilitiesFilter from "@components/organisms/SearchPage/FacilitiesFilter/FacilitiesFilter";
// import RatingsFilter from "@components/organisms/SearchPage/RatingsFilter/RatingsFilter";

import { ENTITIES, classNames } from "@shared/libs/helpers";
import { MenuProps } from "@shared/models";

interface MobileNavProps {
  onClose: () => void;
  title: string;
  menu?: MenuProps[];
  hasFilters?: boolean;
  entity?: string;
}

export const MobileNav = ({ menu, onClose, title, hasFilters, entity }: MobileNavProps) => {
  return (
    <div className="fixed left-0 top-0 h-screen overflow-y-scroll w-screen bg-white transition-all duration-500 z-[999]">
      <AiOutlineClose className="cursor-pointer text-black text-18 mt-6 ml-6" onClick={onClose} />
      <div>
        <span className="block ml-6 mt-8 mb-4 font-nunitoSans text-12 font-bold text-citiBlue-900">{title}</span>
        <hr />
        <div className="flex flex-col">
          {(menu || []).map((menuItem, index) => (
            <MenuItem key={index} {...menuItem} />
          ))}
          {entity === ENTITIES.REAL_ESTATE && (
            <div className={classNames("px-6 first:mt-2 tablet:px-4 py-2 mb-2 hover:bg-citiBlue-70 text-citiBlue-b400 cursor-pointer")}>
              <Link href={`${entity}/group-investments`}>
                <div className="flex items-center w-full">
                  <span className="capitalize text-14 tablet:text-16 font-nunitoSans">group investments</span>
                </div>
              </Link>
            </div>
          )}
          {/* {hasFilters && (
          <>
            <hr className="mb-4" />
            <div className="px-4">
              <RatingsFilter />
            </div>
            <hr className="mb-4" />
            <div className="px-4">
              <FacilitiesFilter />
            </div>
          </>
        )} */}
        </div>
      </div>
    </div>
  );
};

MobileNav.defaultProps = {
  menu: undefined,
  hasFilters: false,
  entity: "",
};
