import { useField } from "formik";
import React from "react";

import CustomLabel from "@components/atoms/CustomLabel/CustomLabel";
import ErrorMessage from "@components/atoms/ErrorMessage";

import { CheckBoxProperties } from "@shared/libs/helpers";

const FormikCustomCheckbox = ({ label, shape, isDisabled, size, labelPosition, className, labelClassName, ...props }: any) => {
  const [field, meta] = useField<{}>(props);

  return (
    <div className="w-full">
      <div className="block">
        <div className={`flex items-center ${className}`}>
          {label && labelPosition === CheckBoxProperties.LABEL_POSITION.start && <CustomLabel className={`inline-flex items-center text-14 ${labelClassName}`} title={label} />}
          {isDisabled ? (
            <input
              className={`${size === CheckBoxProperties.SIZES.small ? "w-4 h-4" : "w-5 h-5"}
            ${
              shape === CheckBoxProperties.SHAPE.rounded
                ? "rounded-full"
                : `${shape === CheckBoxProperties.SHAPE.square && shape === CheckBoxProperties.SIZES.small ? "rounded-[4px]" : "rounded-[5px]"}`
            } 
            mx-2 pointer-events-none border-citiGray-300 bg-citiGray-50 drop-shadow-sm border text-[#EBEFF1] border-none focus:ring-0`}
              disabled={true}
              type="checkbox"
              {...field}
              {...props}
            />
          ) : (
            <input
              className={`${size === CheckBoxProperties.SIZES.small ? "w-4 h-4" : "w-5 h-5"}
            ${
              shape === CheckBoxProperties.SHAPE.rounded
                ? "rounded-full"
                : `${shape === CheckBoxProperties.SHAPE.square && shape === CheckBoxProperties.SIZES.small ? "rounded-[4px]" : "rounded-[5px]"}`
            } 
            mx-2  cursor-pointer drop-shadow-sm bg-white border border-citiGray-50 hover:border-citiBlue-400 hover:bg-citiBlue-100
            text-citiBlue-400 hover:text-citiBlue-600 border-[#EBEFF1] focus:ring-0`}
              type="checkbox"
              {...props}
            />
          )}
          {label && labelPosition === CheckBoxProperties.LABEL_POSITION.end && <CustomLabel className={`inline-flex items-center text-14 ${labelClassName}`} title={label} />}
        </div>
      </div>
      {meta.touched && meta.error && <ErrorMessage error={meta.error} />}
    </div>
  );
};

export default FormikCustomCheckbox;

FormikCustomCheckbox.defaultProps = {
  label: "",
  labelPosition: "",
  className: "",
  labelClassName: "",
  shape: CheckBoxProperties.SHAPE.square,
  size: CheckBoxProperties.SIZES.small,
  isDisabled: false,
};
