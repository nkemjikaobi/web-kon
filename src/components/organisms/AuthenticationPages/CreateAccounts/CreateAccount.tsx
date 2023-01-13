import { useMutation } from "@apollo/client";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomLink from "@components/atoms/CustomLink/CustomLink";
import SetFormikErrors from "@components/atoms/SetFormikErrors/SetFormikErrors";
import { citiToast } from "@components/atoms/Toast";
import FormikCustomCheckbox from "@components/molecules/FormikCustomCheckbox";
import FormikCustomInput from "@components/molecules/FormikCustomInput";
import FormikPhoneInput from "@components/molecules/FormikPhoneInput/FormikPhoneInput";
import SocialAuth from "@components/organisms/SocialAuth";

import { REGISTER_USER } from "@graphql/auth/mutations";

import { ButtonProperties, errorMessages, goToMerchantPath, MerchantAppPath, NotificationTypes, REGEX } from "@shared/libs/helpers";

interface step {
  step: any;
}
interface FormValues {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
  userType?: string;
  checkbox?: boolean;
  country?: string;
}

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
  lastName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
  email: Yup.string().email("Invalid email").required(errorMessages.required),
  phoneNumber: Yup.string().min(11, errorMessages.minChar(11)).max(50, "Too Long!").required(errorMessages.required),
  password: Yup.string().min(7, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
  checkbox: Yup.boolean().oneOf([true], "Agree to terms and conditions"),
});

const CreateAccount = ({ step }: step) => {
  const [checks, setChecks] = useState({
    capsCheck: false,
    numCheck: false,
    passwordLength: false,
    specialCharacterCheck: false,
  });
  const [apiErrorMessage, setApiErrorMessage] = useState({});
  const [registerUser, { data, loading, error }] = useMutation(REGISTER_USER);
  const handleOnKeyUp = (e: any) => {
    const { value } = e.target;
    const capsCheck = REGEX.capsCheck.test(value);
    const numCheck = REGEX.numbers.test(value);
    const passwordLength = REGEX.password.test(value);
    const specialCharacterCheck = REGEX.specialCharacter.test(value);
    setChecks({
      capsCheck,
      numCheck,
      passwordLength,
      specialCharacterCheck,
    });
  };

  const handleSubmit = async (values: FormValues) => {
    toast.dismiss();
    const newValues = { ...values };
    delete newValues.checkbox;
    if (checks.capsCheck == true && checks.numCheck == true && checks.passwordLength == true && checks.specialCharacterCheck == true) {
      await registerUser({
        variables: {
          registerInput: {
            ...newValues,
            email: newValues.email?.toLowerCase(),
            phoneNumber: `+${newValues.phoneNumber}`,
          },
        },
      });
      localStorage.setItem("CustomerEmail", JSON.stringify(newValues.email?.toLowerCase()));
    }
  };

  useEffect(() => {
    if (data?.registerUser?.status == "success") {
      citiToast(NotificationTypes.SUCCESS, "Account creation successful.");
      step.goNextStep();
    } else if (error) {
      citiToast(NotificationTypes.ERROR, "Something went wrong, Please try again");
    } else if (data?.registerUser?.message.includes("Phone")) {
      setApiErrorMessage(data?.registerUser?.message);
      citiToast(NotificationTypes.ERROR, "Phone number already in use. Please use a different Number");
    } else if (data?.registerUser?.status === "error") {
      citiToast(NotificationTypes.ERROR, "Account already exists, please Login");
    }
  }, [error, data]);

  return (
    <div className="mx-4 h-full rounded-lg px-4 pb-10 hide-scrollbar overflow-auto tablet:h-[calc(100vh-220px)]">
      <div className="mt-7">
        <h1 className="flex justify-center text-24 text-center font-bold">Create an account</h1>
        <div className="mb-12">
          <SocialAuth signUp={true} />
        </div>
        <h1 className="text-[#B0B7C3] text-16 mt-5 flex flex-row before:flex-1 after:flex-1 before:border-b before:border-b-citiGray-300 before:m-auto after:border-b after:border-b-citiGray-300 after:m-auto">
          <span className="block w-4" />
          OR
          <span className="block w-4" />
        </h1>
      </div>
      <Formik<FormValues>
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          password: "",
          userType: "customer",
          checkbox: false,
          country: "NG",
        }}
        onSubmit={handleSubmit}
        validationSchema={SignupSchema}
      >
        {({ values, handleChange, setFieldValue, handleBlur }) => (
          <Form>
            <div>
              <div className="mt-8">
                <div className="flex justify-between mt-8 rounded-md">
                  <div>
                    <FormikCustomInput
                      className={`h-[52px] rounded-md border border-citiGray-300`}
                      id="firstName"
                      inputClassName={`placeholder:text-14 placeholder:text-citiGray-300`}
                      name="firstName"
                      placeholder="First Name"
                      type="text"
                    />
                  </div>
                  <div className="ml-4">
                    <FormikCustomInput
                      className={`h-[52px] border border-citiGray-300  rounded-md placeholder:text-14 placeholder:text-citiGray-300`}
                      id="lastName"
                      inputClassName="placeholder:text-14 placeholder:text-citiGray-300"
                      name="lastName"
                      placeholder="Last Name"
                      type="text"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <FormikCustomInput
                    className={`bg-white border border-citiGray-300 p-4 rounded-md text-citiGray-200  `}
                    container="!px-0"
                    icon="email"
                    id="email"
                    inputClassName="placeholder:text-14 placeholder:text-citiGray-300"
                    name="email"
                    placeholder="Your Email"
                    type="email"
                  />
                </div>

                <div className="mt-4">
                  <FormikPhoneInput
                    id="phoneNumber"
                    name="phoneNumber"
                    onBlur={handleBlur}
                    onChange={(value: string) => setFieldValue("phoneNumber", value)}
                    onCountryChange={(value: string) => setFieldValue("country", value.toUpperCase())}
                  />
                </div>

                <div>
                  <FormikCustomInput
                    className={`border border-citiGray-300 focus:border-citiBlue-400 p-4 rounded-md mt-4 text-citiGray-200 `}
                    container="!px-0"
                    icon="lockIcon"
                    id="password"
                    inputClassName="placeholder:text-14 placeholder:text-citiGray-300"
                    name="password"
                    onKeyUp={handleOnKeyUp}
                    placeholder=" Your Password"
                    type="password"
                  />
                </div>
              </div>
              <div className="mt-4 text-[#507283] text-14">
                <span className={`${checks.capsCheck ? "text-citiBlue-200" : ""}`}>Must contain uppercase, </span>
                <span className={`${checks.passwordLength ? "text-citiBlue-200" : ""}`}>8 characters, </span>
                <span className={`${checks.numCheck ? "text-citiBlue-200" : ""}`}>A number, </span>
                <span className={`${checks.specialCharacterCheck ? "text-citiBlue-200" : ""}`}>A special character</span>
              </div>
              <div className="flex mt-8">
                <FormikCustomCheckbox
                  checked={values.checkbox}
                  className="border-citiGray-200 w-5 h-5  rounded-lg"
                  label="I agree to Terms & Conditions"
                  labelClassName="text-[#B0B7C3] text-16 font-normal whitespace-nowrap"
                  labelPosition="end"
                  name="checkbox"
                  onChange={handleChange}
                  type="checkbox"
                />
              </div>
              <div className="text-center bg-citiBlue-200 mt-8 rounded-md">
                <CustomButton
                  customClass="!w-full font-14 rounded-md "
                  handleClick={() => {}}
                  isDisabled={loading}
                  isSubmitting={loading}
                  size={ButtonProperties.SIZES.small}
                  title="Create Account"
                  type="submit"
                  variant={ButtonProperties.VARIANT.secondary.name}
                />
              </div>
            </div>
            <SetFormikErrors externalErrors={apiErrorMessage} />
          </Form>
        )}
      </Formik>
      <div className="border border-citiBlue-200 text-center mt-4 rounded-md">
        <a href={goToMerchantPath(MerchantAppPath.CREATE_ACCT)}>
          <CustomButton customClass="font-bold !w-full font-14 bg-none rounded-md text-citiBlue-200" handleClick={() => {}} title="Sign Up As Merchant" />
        </a>
      </div>
      <div className="flex justify-center mt-3">
        <div className="text-citiGray-300 flex items-center">
          <span className="text-16 text-[#B0B7C3] font-normal">Already have an account?</span>
          <CustomLink customClass="text-citiBlue-200 ml-1" destination="/auth/login" hover="citiBlue-400">
            Login
          </CustomLink>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
