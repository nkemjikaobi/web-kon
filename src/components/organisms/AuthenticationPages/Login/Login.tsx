import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { FC } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomLink from "@components/atoms/CustomLink/CustomLink";
import Icon from "@components/atoms/Icons";
import FormikCustomInput from "@components/molecules/FormikCustomInput";
import SocialAuth from "@components/organisms/SocialAuth";

import useLoginMutation from "@hooks/useLoginMutation";

import { ButtonProperties, errorMessages, goToMerchantPath, MerchantAppPath, REGEX } from "@shared/libs/helpers";
import { Portal } from "@shared/models";

interface LoginFormProps {
  email: string;
  password: string;
}

const loginValidationSchema = Yup.object({
  email: Yup.string().required(errorMessages.required).matches(REGEX.email, errorMessages.email),
  password: Yup.string().required(errorMessages.required).min(8, errorMessages.minChar(8)),
});

const Login: FC = () => {
  const router = useRouter();

  const { login, isLoading } = useLoginMutation();

  const handleSubmit = (values: LoginFormProps) => {
    toast.dismiss();
    login({ variables: { loginInput: { ...values, portal: Portal.CUSTOMER } } });
  };

  return (
    <div className="bg-white pb-10 h-auto tablet:h-[calc(100vh-170px)] desktop:h-[calc(100vh-100px)] w-[90%] tablet:max-w-[531px] smallLaptop:w-3/5 desktop:w-4/5 hide-scrollbar tablet:overflow-y-auto shadow-lg rounded-lg z-50">
      <div className="flex bg-white desktop:fixed w-[90%] rounded-t-lg tablet:max-w-[531px] smallLaptop:w-3/5 desktop:w-4/5 items-center h-[60px] tablet:h-[88px] border-b-[1px] border-black border-opacity-5 pl-3 tablet:pl-8 z-10">
        {<Icon className="cursor-pointer" name="caretLeft" onClick={() => router.back()} />}
      </div>
      <div className="px-3 tablet:px-6 mt-6 desktop:mt-32">
        <div className="">
          <h1 className="flex justify-center text-20 text-center font-nunitoSans font-bold">Sign In to your account</h1>
          <SocialAuth signUp={false} />
          <h1 className="text-[#B0B7C3] text-16 mt-7 flex flex-row before:flex-1 after:flex-1 before:border-b before:border-b-citiGray-100 before:m-auto after:border-b after:border-b-citiGray-100 after:m-auto">
            <span className="block w-4" />
            OR
            <span className="block w-4" />
          </h1>
        </div>

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={loginValidationSchema}
        >
          <Form>
            <div className="font-nunitoSans">
              <div className="mt-8">
                <FormikCustomInput
                  className={"bg-white border border-citiGray-300 p-4 rounded-md text-citiGray-200"}
                  container="!px-0"
                  icon="email"
                  name="email"
                  placeholder="Your Email"
                  type="email"
                />
                <FormikCustomInput
                  className={"border border-citiGray-300 focus:border-citiBlue-400 p-4 rounded-md mt-4 text-citiGray-200"}
                  container="!px-0"
                  icon="lockIcon"
                  name="password"
                  placeholder="Your Password"
                  type="password"
                />
              </div>
              <div className="mt-8 flex justify-end">
                <CustomLink customClass="text-citiBlue-300" destination="/auth/forgot-password" hover="citiBlue-400">
                  Forgot Password?
                </CustomLink>
              </div>
              <CustomButton
                customClass="!w-full font-14 mt-8 rounded-md bg-citiBlue-200"
                handleClick={() => {}}
                isDisabled={isLoading}
                isSubmitting={isLoading}
                title="Log In"
                type="submit"
                variant={ButtonProperties.VARIANT.secondary.name}
              />
            </div>
          </Form>
        </Formik>
        <a href={goToMerchantPath(MerchantAppPath.LOGIN)}>
          <CustomButton
            customClass="font-bold !w-full font-14 bg-none rounded-md text-citiBlue-200 mt-4"
            handleClick={() => {}}
            isTransparent={true}
            title="Log In As A Merchant"
            variant={ButtonProperties.VARIANT.secondary.name}
          />
        </a>
        <div className="flex justify-center mt-4">
          <div className="flex text-citiGray-300">
            <span className="text-[#B0B7C3]">Already have an account?</span>
            <CustomLink customClass="text-citiBlue-200 ml-2" destination="/auth/create-account" hover="citiBlue-400">
              Signup
            </CustomLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
