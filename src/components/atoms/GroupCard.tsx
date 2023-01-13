import { ReactNode } from "react";

import { classNames } from "@shared/libs/helpers";

interface GroupCardProps {
  id?: string;
  title: string;
  children: ReactNode;
  contentClass?: string;
}

export const GroupCard = ({ children, contentClass = "", id, title }: GroupCardProps) => (
  <div className="relative mt-6 smallLaptop:mt-10 bg-white rounded">
    <h1 className="border-b-2 rounded border-b-[#DFE5E8] p-4 text-14 text-[#07354D] capitalize">{title}</h1>
    <div className={classNames("ml-4 py-6 flex overflow-x-scroll hide-scrollbar tablet:overflow-y-hidden scroll-smooth", contentClass)} id={id}>
      {children}
    </div>
  </div>
);

GroupCard.defaultProps = {
  id: "",
  contentClass: "",
};
