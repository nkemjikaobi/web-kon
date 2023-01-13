import { FC } from "react";

import { classNames } from "@shared/libs/helpers";

interface SocialButtonProps {
  className?: string;
  icon: JSX.Element;
  id?: string;
  text: string;
}

const SocialButton: FC<SocialButtonProps> = ({ className = "", icon, id, text }) => {
  return (
    <button className={classNames("bg-[#FAFBFC] flex items-center justify-center relative pl-8 p-2 rounded-sm w-full h-[52px] cursor-pointer", className)} id={id}>
      {icon}
      <p className="text-14 text-[#4F4F4F]">{text}</p>
    </button>
  );
};

export default SocialButton;

SocialButton.defaultProps = {
  className: "",
  id: "",
};
