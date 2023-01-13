import React, { Fragment, LegacyRef, useEffect, useState } from "react";
import { ImSpinner9 } from "react-icons/im";

import { ButtonProperties } from "@shared/libs/helpers";

import Icon from "@atoms/Icons";

interface ButtonProps {
  handleClick: Function;
  customClass?: string;
  type?: "button" | "submit" | "reset" | undefined;
  isDisabled?: boolean;
  title?: string;
  isSubmitting?: boolean;
  value?: string;
  icon?: string;
  iconClass?: string;
  id?: string;
  ref?: LegacyRef<HTMLButtonElement> | undefined;
  size?: string;
  iconPosition?: string;
  variant?: string;
  isTransparent?: boolean;
}

/**
 * Renders the actual content of the Button
 * @param {any} title title or text of the button
 * @param {boolean} isSubmitting Loading state
 * @return {React.Component} Button component
 */
const renderContent = (title: string | undefined, isSubmitting: boolean | undefined) => (
  <Fragment>{isSubmitting ? <ImSpinner9 className="animate-spin" /> : <Fragment>{title}</Fragment>}</Fragment>
);

const CustomButton = ({
  handleClick,
  variant,
  isTransparent,
  iconPosition,
  size,
  ref,
  id,
  isDisabled,
  customClass,
  type,
  title,
  isSubmitting,
  value,
  icon,
  iconClass,
}: ButtonProps) => {
  const [background, setBackGround] = useState("");
  const [hover, setHover] = useState("");
  const [disabled, setDisabled] = useState("");
  const [focused, setFocused] = useState("");
  const [textColor, setTextColor] = useState("white");
  const [borderColor, setBorderColor] = useState("");
  const [iconFill, setIconFill] = useState("");
  /**
   * This displays the rendered content
   */
  const content = (
    <div className="flex items-center">
      {!isSubmitting && icon && iconPosition === ButtonProperties.ICON_POSITION.start ? (
        <Icon
          className={`mr-2 ${isDisabled && isTransparent ? `fill-${disabled}` : iconFill && isTransparent ? `fill-${iconFill} hover:fill-${hover}` : ""} ${
            iconClass ? iconClass : ""
          }`}
          name={icon}
        />
      ) : (
        ""
      )}
      {renderContent(title, isSubmitting)}
      {!isSubmitting && icon && iconPosition === ButtonProperties.ICON_POSITION.end ? (
        <Icon
          className={`ml-2 ${isDisabled && isTransparent ? `fill-${disabled}` : iconFill && isTransparent ? `fill-${iconFill} hover:fill-${hover}` : ""} ${
            iconClass ? iconClass : ""
          }`}
          name={icon}
        />
      ) : (
        ""
      )}
    </div>
  );

  const setVariantColours = (variantType: string) => {
    switch (variantType) {
      case ButtonProperties.VARIANT.primary.name:
        if (isTransparent) {
          setBackGround("transparent");
          setTextColor(`${ButtonProperties.VARIANT.primary.background}`);
          setBorderColor(`${ButtonProperties.VARIANT.primary.background}`);
          setIconFill(`${ButtonProperties.VARIANT.primary.background}`);
        } else {
          setBackGround(`${ButtonProperties.VARIANT.primary.background}`);
          setTextColor("white");
        }
        setHover(`${ButtonProperties.VARIANT.primary.hover}`);
        setDisabled(`${ButtonProperties.VARIANT.primary.disabled}`);
        setFocused(`${ButtonProperties.VARIANT.primary.focused}`);

        break;
      case ButtonProperties.VARIANT.secondary.name:
        if (isTransparent) {
          setBackGround("transparent");
          setTextColor(`${ButtonProperties.VARIANT.secondary.background}`);
          setBorderColor(`${ButtonProperties.VARIANT.secondary.background}`);
          setIconFill(`${ButtonProperties.VARIANT.secondary.background}`);
        } else {
          setBackGround(`${ButtonProperties.VARIANT.secondary.background}`);
          setTextColor("white");
        }
        setHover(`${ButtonProperties.VARIANT.secondary.hover}`);
        setDisabled(`${ButtonProperties.VARIANT.secondary.disabled}`);
        setFocused(`${ButtonProperties.VARIANT.secondary.focused}`);

        break;
    }
  };

  useEffect(() => {
    let mounted = true;

    if (mounted && variant) {
      setVariantColours(variant);
    }

    return () => {
      mounted = false;
    };
  }, [variant, isTransparent, iconFill]);

  return isSubmitting || isDisabled ? (
    <button
      className={`pointer-events-none !cursor-not-allowed ${isTransparent ? `text-${disabled}` : `text-${textColor}`}  ${
        isTransparent && `border border-${disabled}`
      }  whitespace-nowrap py-[16px] rounded-[4px] flex justify-center items-center h-[53px]  ${
        size === ButtonProperties.SIZES.small
          ? "tablet:w-[168px] px-[16px]"
          : size === ButtonProperties.SIZES.medium
          ? "tablet:w-[343px] px-[78px]"
          : size === ButtonProperties.SIZES.big
          ? "tablet:w-[427px] px-[120px]"
          : ""
      } ${!isTransparent && `bg-${disabled}`}  ${customClass}`}
      id={id}
      ref={ref}
      type={type}
      value={value}
    >
      {content}
    </button>
  ) : (
    <button
      className={`text-${textColor}  border ${
        isTransparent ? `border-${borderColor}` : `border-${background}`
      }  whitespace-nowrap py-[16px] rounded-[4px] flex justify-center items-center h-[53px] cursor-pointer ${
        size === ButtonProperties.SIZES.small
          ? "tablet:w-[168px] px-[16px]"
          : size === ButtonProperties.SIZES.medium
          ? "tablet:w-[343px] px-[78px]"
          : size === ButtonProperties.SIZES.big
          ? "tablet:w-[427px] px-[120px]"
          : ""
      } bg-${background} ${isTransparent ? `hover:text-${hover} hover:border-${hover} focus:text-${focused}` : `hover:bg-${hover} focus:bg-${focused}`}   ${customClass}`}
      id={id}
      onClick={() => handleClick()}
      ref={ref}
      type={type}
      value={value}
    >
      {content}
    </button>
  );
};

export default CustomButton;

CustomButton.defaultProps = {
  customClass: "",
  type: "button",
  isDisabled: false,
  title: "",
  isSubmitting: false,
  icon: "",
  iconClass: "",
  value: "",
  id: "",
  ref: null,
  size: ButtonProperties.SIZES.small,
  iconPosition: ButtonProperties.ICON_POSITION.start,
  variant: ButtonProperties.VARIANT.primary,
  isTransparent: false,
};
