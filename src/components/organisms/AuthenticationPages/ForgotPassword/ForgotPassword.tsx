import { useMutation } from "@apollo/client";
import { Formik, Form, FormikProps, FormikHelpers } from "formik";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setVerifyEmail } from "src/store/auth";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import { citiToast } from "@components/atoms/Toast";
import FormikCustomInput from "@components/molecules/FormikCustomInput";

import { FORGOT_PASSWORD } from "@graphql/auth/mutations";

import { ForgotPasswordSchema } from "@schemas/ForgotPassword";

import { StepProps } from "@dto/StepperComponent/StepProps";

import { ButtonProperties, NotificationTypes, Status } from "@shared/libs/helpers";

interface ForgotPasswordProps {
  step: StepProps;
}

interface Values {
  email: string;
}

const ForgotPassword = ({ step }: ForgotPasswordProps) => {
  const [forgotPassword, { data, loading, error }] = useMutation(FORGOT_PASSWORD);
  const dispatch = useDispatch();

  const handleSubmit = async (values: Values, actions: FormikHelpers<Values>) => {
    toast.dismiss();
    dispatch(setVerifyEmail(values.email));
    await forgotPassword({
      variables: {
        forgotPasswordInput: {
          ...values,
        },
      },
    });
  };

  const inititialState = {
    email: "",
  };

  useEffect(() => {
    if (data) {
      const { status, message } = data.forgotPassword;
      if (status === Status.SUCCESS) {
        step.goNextStep();
      }
      if (status === Status.FAILED) {
        citiToast(NotificationTypes.ERROR, message);
      }
    }
  }, [data, error]);

  return (
    <div className="flex flex-col items-center h-full tablet:h-[calc(100vh-300px)]">
      <h3 className="text-24 my-4 font-bold text-citiGray-200">Forgot Password</h3>
      <p className="text-[#8A94A6] text-center w-[80%] mb-4 text-16">
        Please enter the email associated with your account and we’ll send an email with instructions to reset your password.
      </p>
      <div className="w-full">
        <Formik initialValues={inititialState} onSubmit={handleSubmit} validationSchema={ForgotPasswordSchema}>
          {(props: FormikProps<Values>) => (
            <Form>
              <div className="flex justify-center items-center flex-col">
                <FormikCustomInput className="h-[52px] !w-[90%] border rounded-md" icon="email" name="email" placeholder="Your Email" required={false} type="email" />
                <CustomButton
                  customClass="mx-4 my-8 !w-[90%]"
                  handleClick={() => {}}
                  isDisabled={loading}
                  isSubmitting={loading}
                  size={`${ButtonProperties.SIZES.big}`}
                  title="Send Instructions"
                  type="submit"
                  variant={`${ButtonProperties.VARIANT.secondary.name}`}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ForgotPassword;
