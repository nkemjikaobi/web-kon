import React from "react";
import IFooterOption from "src/dto/Footer/IFooterOption";

import CustomLink from "@components/atoms/CustomLink/CustomLink";

import Icon from "@atoms/Icons/index";

interface FooterOptionsProps {
  options: Array<IFooterOption>;
  title: string;
  hasIcons?: boolean;
}
const FooterOptions = ({ options, title, hasIcons }: FooterOptionsProps) => {
  return (
    <div>
      <h4 className="font-bold leading-8">{title}</h4>
      {hasIcons ? (
        <ul className="flex items-center mb-8">
          {options &&
            options.map((data) => (
              <li className="mr-4 my-4 font-normal text-sm" key={data.id}>
                <CustomLink destination={data.route}>
                  <Icon name={data.name} />
                </CustomLink>
              </li>
            ))}
        </ul>
      ) : (
        <ul>
          {options &&
            options.map((data) => (
              <li key={data.id}>
                <CustomLink customClass="text-sm my-4" destination={data.route}>
                  {data.name}
                </CustomLink>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default FooterOptions;

FooterOptions.defaultProps = {
  hasIcons: false,
};
