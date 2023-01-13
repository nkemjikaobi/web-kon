import { useField } from "formik";
import React from "react";
import PhoneInput, { CountryData, PhoneInputProps } from "react-phone-input-2";

import ErrorMessage from "@components/atoms/ErrorMessage";
import Icon from "@components/atoms/Icons";
import "react-phone-input-2/lib/style.css";

interface FormikCustomPhoneInputProps extends PhoneInputProps {
  onChange: (phoneNumber: string) => void;
  onCountryChange?: (country: string) => void;
  id: string;
  name: string;
  className?: string;
}

const FormikCustomPhoneInput = ({ onChange, onBlur, className, onCountryChange, ...otherProps }: FormikCustomPhoneInputProps) => {
  const [, meta] = useField<{}>({ name: otherProps.name });

  return (
    <>
      <div className={`relative rounded-lg border border-citiGray-300 outline-none ${className} ${meta.error && meta.touched ? "!border !border-[#A0000B]" : ""} `}>
        <Icon className="cursor-pointer absolute top-1/3 z-20 left-2" name="callIcon" />
        <PhoneInput
          buttonStyle={{ width: "5rem", paddingLeft: "2rem", background: "transparent", border: "none", paddingRight: "1rem" }}
          country={"ng"}
          countryCodeEditable={false}
          defaultErrorMessage="It doesn't works, why?"
          enableAreaCodes={true}
          enableSearch={true}
          inputStyle={{
            height: "3.5rem",
            textIndent: "2rem",
            border: "none",
          }}
          onBlur={onBlur}
          onChange={(value: string, data: CountryData) => {
            onChange(value);
            onCountryChange && onCountryChange(data.countryCode);
          }}
          placeholder="Your Phone"
          {...otherProps}
        />
      </div>
      {meta.error && meta.touched && <ErrorMessage error={meta.error} />}
    </>
  );
};

FormikCustomPhoneInput.defaultProps = {
  onCountryChange: () => "",
  value: "",
  className: "",
};

export default FormikCustomPhoneInput;
