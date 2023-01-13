import React, { FC, ReactNode } from "react";

interface ParentFilterProps {
  title: string;
  children: ReactNode;
  showApply?: boolean;
}
const ParentFilter: FC<ParentFilterProps> = ({ showApply, title, children }) => {
  return (
    <div className="relative">
      <div className="flex justify-between items-center my-4 px-4">
        <h4 className="font-bold text-10 uppercase">{title}</h4>
        {showApply && <p className="uppercase text-citiBlue-400 text-10 font-bold">apply</p>}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default ParentFilter;

ParentFilter.defaultProps = {
  showApply: true,
};
