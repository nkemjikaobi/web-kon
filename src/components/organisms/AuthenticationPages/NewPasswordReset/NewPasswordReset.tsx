import { useMutation } from "@apollo/client";
import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import { citiToast } from "@components/atoms/Toast";
import FormikCustomInput from "@components/molecules/FormikCustomInput";

import { RESET_PASSWORD } from "@graphql/auth/mutations";

import { NewPasswordSchema } from "@schemas/NewPassword";

import { ButtonProperties, NotificationTypes, Status } from "@shared/libs/helpers";

interface step {
  step: {};
}

const NewPasswordReset = ({ step }: step) => {
  const initialState = {
    password: "",
    confirmPassword: "",
  };

  const router = useRouter();

  const { token } = router.query;

  const [resetPassword, { data, loading, error }] = useMutation(RESET_PASSWORD);

  const handleSubmit = async (values: Values, actions: FormikHelpers<Values>) => {
    toast.dismiss();
    await resetPassword({
      variables: {
        resetPasswordInput: {
          token,
          newPassword: values.password,
        },
      },
    });
  };

  useEffect(() => {
    if (data) {
      const { status, message } = data.resetPassword;
      if (status === Status.SUCCESS) {
        citiToast(NotificationTypes.SUCCESS, message);
        setTimeout(() => {
          router.push("/auth/login");
        }, 2000);
      }
      if (status === Status.FAILED) {
        citiToast(NotificationTypes.ERROR, message);
      }
    }
  }, [data, error]);

  interface Values {
    password: string;
    confirmPassword: string;
  }

  return (
    <div className=" ml-4 mr-4 rounded-lg pl-4 pr-4 pb-10 hide-scrollbar smallLaptop:overflow-y-auto h-auto tablet:h-[calc(100vh-300px)]">
      <div className="mt-9 font-nunitoSans">
        <h1 className="flex justify-center text-24 text-center font-bold">Enter New Password</h1>
        <p className="flex justify-center mt-3 text-[#8A94A6] text-center">
          Please enter the email associated with your account and we’ll send an email with instructions to reset your password.
        </p>
      </div>

      <div>
        <div className=" font-nunitoSans">
          <Formik initialValues={initialState} onSubmit={handleSubmit} validationSchema={NewPasswordSchema}>
            {(props: FormikProps<Values>) => (
              <Form>
                <div className="mt-8">
                  <FormikCustomInput
                    className="border border-citiGray-300 p-4 rounded-md text-citiGray-200"
                    container="!px-0"
                    icon="lockIcon"
                    name="password"
                    placeholder=" New Password"
                    type="password"
                  />
                  <FormikCustomInput
                    className="border border-citiGray-300 p-4 rounded-md mt-4 text-citiGray-200"
                    container="!px-0"
                    icon="lockIcon"
                    name="confirmPassword"
                    placeholder=" Confirm Password"
                    type="password"
                  />
                </div>

                <div className="bg-citiBlue-200 text-center mt-8 rounded-md">
                  <CustomButton
                    customClass="!w-full font-14 rounded-md"
                    handleClick={() => {}}
                    isDisabled={loading}
                    isSubmitting={loading}
                    size={ButtonProperties.SIZES.big}
                    title="Reset Password"
                    type="submit"
                    variant={ButtonProperties.VARIANT.secondary.name}
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default NewPasswordReset;
