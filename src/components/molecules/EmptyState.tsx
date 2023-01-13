import Image from "next/image";

import Icon from "@components/atoms/Icons";

interface EmptyStateProps {
  icon?: string;
  image?: string;
  title?: string;
  subText?: string;
}

export const EmptyState = ({ icon, image, title, subText }: EmptyStateProps) => (
  <div className="flex flex-col justify-center items-center w-full p-4">
    {icon && <Icon name={icon} />}
    {image && <Image alt={title || ""} height={150} src={image} width={150} />}
    <h1 className="font-nunitoSans font-bold text-20 smallLaptop:text-24 text-citiBlue-b900 mt-4 mb-2 text-center">{title}</h1>
    <p className="font-nunitoSans text-14 smallLaptop:text-16 text-citiBlue-b500 text-center max-w-2xl">{subText}</p>
  </div>
);

EmptyState.defaultProps = {
  icon: "",
  image: "",
  title: "",
  subText: "",
};
