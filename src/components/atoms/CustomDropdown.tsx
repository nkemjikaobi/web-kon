import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { GiCheckMark } from "react-icons/gi";

import useClickOutside from "@hooks/useClickOutside";

import { classNames } from "@shared/libs/helpers";

import Icon from "./Icons";

interface OptionProps {
  label: string;
  value: string;
  route?: string;
}

interface DropdownProps {
  asSelect?: boolean;
  value?: string;
  onSelect: (value: string, option: OptionProps) => void;
  optionClass?: string;
  options: OptionProps[];
  placeholder?: string;
  selectClass?: string;
  showSelectedCheckMark?: boolean;
  title?: string;
}

export const CustomDropdownProps = ({ asSelect, value, onSelect, optionClass = "", options, selectClass = "", placeholder, showSelectedCheckMark, title }: DropdownProps) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>(value || options[0].value);

  const hasBeenSelectedOnce = useRef(false);

  const Router = useRouter();

  const getSelectedOption = (): OptionProps => {
    return options.find((option) => option.value === selectedItem)!;
  };

  const getSelectedItem = (): string => {
    return getSelectedOption()?.label || placeholder || "";
  };

  const node = useClickOutside(() => {
    setShowOptions(false);
  });

  const handleSelectOption = (value: string, route?: string) => {
    hasBeenSelectedOnce.current = true;

    if (route) Router.push(route);
    else setSelectedItem(value);

    setShowOptions(false);
  };

  useEffect(() => {
    if (hasBeenSelectedOnce.current) {
      onSelect(selectedItem, getSelectedOption());
    }
  }, [selectedItem]);

  useEffect(() => {
    setSelectedItem(value || "");
  }, [value]);

  return (
    <div className="relative font-nunitoSans transition-all" ref={node}>
      <div
        className={classNames("flex items-center h-8 cursor-pointer hover:bg-citiBlue-b40 px-1 rounded", showOptions ? "bg-citiBlue-b40" : "", selectClass)}
        onClick={() => setShowOptions(!showOptions)}
      >
        <span className="text-12 tablet:text-16">{asSelect ? getSelectedItem() : title}</span>
        <Icon className="ml-2 scale-90" name="caretDown" />
      </div>
      <div className={showOptions ? "flex flex-col bg-white absolute top-10 right-0 shadow-xl" : "hidden"}>
        {options.map((option) => (
          <span
            className={classNames("block py-3 pl-4 pr-5 text-12 cursor-pointer border-b border-citiBlue-b40 last:border-none relative hover:bg-citiBlue-b40", optionClass)}
            key={option.label}
            onClick={() => handleSelectOption(option.value, option.route)}
          >
            {showSelectedCheckMark && selectedItem === option.value && <GiCheckMark className="absolute left-1 w-2 mt-[2px]" />}
            {option.label}
          </span>
        ))}
      </div>
    </div>
  );
};

CustomDropdownProps.defaultProps = {
  asSelect: false,
  value: "",
  placeholder: "",
  optionClass: "",
  selectClass: "",
  showSelectedCheckMark: false,
  title: "",
};
