import React from "react";

interface CustomSelectOptionProps {
  value: string;
  text: string;
  className?: string;
  id?: string;
  disabled?: boolean;
  selected?: boolean;
}

const CustomSelectOption = ({ value, disabled, selected, text, className, id }: CustomSelectOptionProps) => {
  return (
    <option className={className} disabled={disabled} id={id} value={value}>
      {text}
    </option>
  );
};

export default CustomSelectOption;

CustomSelectOption.defaultProps = {
  className: "",
  id: "",
  disabled: false,
  selected: false,
};
