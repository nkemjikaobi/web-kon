import React from "react";
import { v4 as uuidv4 } from "uuid";

import CustomLabel from "../CustomLabel/CustomLabel";
import CustomSelectOption from "./CustomSelectOption";

export interface OptionType {
  text: string;
  value: string;
}

export interface CustomSelectProps {
  label?: string;
  value?: any;
  options?: Array<any>;
  placeholder: string;
  defaultValue?: any;
  className?: string;
  parentContainer?: string;
  container?: string;
  onChange?: () => void;
}

const CustomSelect = ({ label, parentContainer, container, className, value, options, placeholder, defaultValue, ...props }: CustomSelectProps) => {
  let hasOptions = false;
  let selectOptions: any = [];
  if (placeholder) {
    hasOptions = true;
    selectOptions = [<CustomSelectOption disabled={true} key={uuidv4()} selected={true} text={placeholder} value={""} />];
  }
  if (options && options.length > 0) {
    hasOptions = true;
    selectOptions = [
      ...selectOptions,
      ...options.map((option: OptionType, index: number) => (
        <CustomSelectOption id={option.text} key={String(index + 1)} selected={option.value === value} text={option.text} value={option.value} />
      )),
    ];
  }

  return (
    <div className={`w-full h-full rounded-[5px] border-[0.35px] border-citiGray-250 ${parentContainer}`}>
      {label && <CustomLabel title={label} />}
      <div className={`h-full ${container}`}>
        <select className={`text-black border-none focus:ring-0 px-4 w-full h-full focus:outline-none ${className}`} defaultValue={defaultValue} value={value} {...props}>
          {hasOptions && selectOptions}
        </select>
      </div>
    </div>
  );
};

export default CustomSelect;

CustomSelect.defaultProps = {
  label: "",
  value: "",
  options: [],
  defaultValue: "",
  className: "",
  parentContainer: "",
  container: "",
  onChange: () => "",
};
