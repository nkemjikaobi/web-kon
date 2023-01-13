import Link from "next/link";

import Icon from "@components/atoms/Icons";

import { CATEGORIES, classNames, externalDocs } from "@shared/libs/helpers";
import { MenuProps } from "@shared/models";

export const MenuItem = ({ active, icon, name, route, urlKey }: MenuProps & { active?: boolean }) => {
  return (
    <div className={classNames("px-6 first:mt-2 tablet:px-4 py-2 mb-2 hover:bg-citiBlue-70 text-citiBlue-b400 cursor-pointer", active ? "bg-citiBlue-70" : "")}>
      {urlKey === CATEGORIES.CUSTOMISED_TRIPS_VACATIONS ? (
        <a href={externalDocs.CUSTOMISED_VACATIONS} key={name} rel="noreferrer" target="_blank">
          <div className="flex items-center w-full">
            {icon && <Icon className="w-5 mr-2 tablet:mr-3" name={icon} />}
            <span className="text-14 tablet:text-16 font-nunitoSans">{name}</span>
          </div>
        </a>
      ) : (
        <Link href={route} key={name}>
          <div className="flex items-center w-full">
            {icon && <Icon className="w-5 mr-2 tablet:mr-3" name={icon} />}
            <span className="text-14 tablet:text-16 font-nunitoSans">{name}</span>
          </div>
        </Link>
      )}
    </div>
  );
};

MenuItem.defaultProps = {
  active: false,
};
