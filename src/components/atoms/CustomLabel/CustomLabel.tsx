import React from "react";

interface CustomLabelProps {
  title: string;
  id?: string;
  className?: string;
}

const CustomLabel = ({ title, id, className }: CustomLabelProps) => {
  return (
    <label className={className} id={id}>
      {title}
    </label>
  );
};

export default CustomLabel;

CustomLabel.defaultProps = {
  id: "",
  className: "",
};
