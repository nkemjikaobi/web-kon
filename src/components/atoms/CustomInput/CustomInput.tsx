import React, { useState } from "react";

import { classNames } from "@shared/libs/helpers";

import ErrorMessage from "../ErrorMessage";
import Icon from "../Icons";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  className?: string;
  icon?: string;
  iconClass?: string;
  name?: string;
  readOnly?: boolean;
  type: string;
  value?: string;
  inputClassName?: string;
  container?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  iconPosition?: string; // start | end
}

const CustomInput = ({
  className = "",
  container = "",
  iconClass,
  disabled,
  error = "",
  icon,
  name,
  inputClassName,
  onChange,
  placeholder,
  readOnly,
  required,
  iconPosition,
  type,
  value,
  ...otherProps
}: InputProps) => {
  const inputRef: any = React.useRef(null);

  const handleClick = () => {
    // if (inputRef && inputRef.current) inputRef.current.focus();
  };

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className={classNames("flex items-center h-[57.14px] w-full", className, error ? "!border-[#A0000B]" : "")}>
        <div
          className={classNames(
            `flex px-5  ${disabled ? "!bg-gray-300" : "bg-white"} text-black items-center justify-start h-full w-full rounded-[5px] border-citiGray-100`,
            container
          )}
          onClick={handleClick}
        >
          {icon && iconPosition === "start" && <Icon className={iconClass} name={icon} />}
          <input
            aria-label={name}
            className={`${inputClassName} ${
              disabled ? "!bg-gray-300 !cursor-not-allowed" : ""
            } focus:outline-none border-none focus:ring-0 autofill:shadow-reset-bg autofill:hover:shadow-reset-bg autofill:focus:shadow-reset-bg autofill:active:shadow-reset-bg h-full w-full`}
            disabled={disabled}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            readOnly={readOnly}
            ref={inputRef}
            required={required}
            tabIndex={0}
            type={type === "password" && showPassword ? "text" : type}
            value={value}
            {...otherProps}
          />
          {icon && iconPosition === "end" && <Icon className={iconClass} name={icon} />}
          {type === "password" && showPassword ? (
            <Icon className="cursor-pointer" name="eyeSlash" onClick={handleShowPassword} />
          ) : (
            type === "password" && !showPassword && <Icon className="cursor-pointer" name="eye" onClick={handleShowPassword} />
          )}
        </div>
      </div>
      {error && <ErrorMessage error={error} />}
    </>
  );
};

export default CustomInput;

CustomInput.defaultProps = {
  className: "",
  disabled: false,
  error: "",
  icon: "",
  readOnly: false,
  inputClassName: "",
  name: "",
  iconClass: "",
  container: "",
  required: false,
  iconPosition: "start",
  value: "",
};
