import { useState, ReactNode } from "react";

import Icon from "../Icons";

interface AccordianProps {
  header: string;
  children: ReactNode;
  className?: string;
}

const Accordian = ({ header, children, className }: AccordianProps) => {
  const [show, setShow] = useState(false);

  const showContent = () => {
    setShow(!show);
  };

  return (
    <div className={`tablet:mt-8 p-4 tablet:p-0 tablet:w-[70%] m-auto ${className}`} onClick={showContent}>
      <div className={`flex justify-between border-t border-b py-4 pl-8 pr-5 ${show === true ? "bg-[#EBF5F1] bg-opacity-[60%] border-none" : ""}`}>
        <div>
          <h1 className="text-16">{header}</h1>
        </div>
        <div className="cursor-pointer">
          <Icon name="arrowDownBlack" />
        </div>
      </div>
      {show && <div>{children}</div>}
    </div>
  );
};

export default Accordian;

Accordian.defaultProps = {
  className: "",
};
