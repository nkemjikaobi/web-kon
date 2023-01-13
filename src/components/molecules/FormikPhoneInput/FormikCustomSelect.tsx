import { useField } from "formik";
import { v4 as uuidv4 } from "uuid";

import CustomLabel from "@components/atoms/CustomLabel/CustomLabel";
import CustomSelectOption from "@components/atoms/CustomSelect/CustomSelectOption";
import ErrorMessage from "@components/atoms/ErrorMessage";

export interface OptionType {
  text: string;
  value: string;
}

const FormikCustomSelect = ({ label, error, parentContainer, container, className, value, options, placeholder, defaultValue, ...props }: any) => {
  const [, meta] = useField<{}>(props);
  let hasOptions = false;
  let selectOptions: any = [];
  if (placeholder) {
    hasOptions = true;
    selectOptions = [<CustomSelectOption disabled={true} key={uuidv4()} text={placeholder} value={""} />];
  }
  if (options && options.length > 0) {
    hasOptions = true;
    selectOptions = [...selectOptions, ...options.map((option: OptionType, index: number) => <CustomSelectOption key={index + 1} text={option.text} value={option.value} />)];
  }

  return (
    <>
      <div
        className={`w-full h-full grow rounded-[5px] border-[0.35px] !text-citiGray-300 border-citiGray-250 ${parentContainer} ${
          meta.error && meta.touched ? "!border-[#A0000B]" : ""
        }`}
      >
        {label && <CustomLabel title={label} />}
        <div className={`h-full ${container}`}>
          <select className={`text-black  border-none focus:ring-0 px-4 w-full h-full focus:outline-none ${className}`} value={value} {...props}>
            {hasOptions && selectOptions}
          </select>
        </div>
      </div>
      {meta.error && meta.touched && <ErrorMessage error={meta.error} />}
    </>
  );
};

export default FormikCustomSelect;
