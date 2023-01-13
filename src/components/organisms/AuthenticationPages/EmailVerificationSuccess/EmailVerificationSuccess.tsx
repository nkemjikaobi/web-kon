import { useMutation } from "@apollo/client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { AppState } from "src/store/rootReducer";

import { citiToast } from "@components/atoms/Toast";

import { FORGOT_PASSWORD } from "@graphql/auth/mutations";

import { StepProps } from "@dto/StepperComponent/StepProps";

import { NotificationTypes, Status } from "@shared/libs/helpers";

interface EmailVerificationSuccessProps {
  step: StepProps;
}

const EmailVerificationSuccess = ({ step }: EmailVerificationSuccessProps) => {
  const { verifyEmail } = useSelector((state: AppState) => state.auth);
  const [forgotPassword, { data, loading, error }] = useMutation(FORGOT_PASSWORD);

  const resendEmailVerificationLink = async () => {
    toast.dismiss();
    await forgotPassword({
      variables: {
        forgotPasswordInput: {
          email: verifyEmail,
        },
      },
    });
  };

  useEffect(() => {
    if (data) {
      const { status, message } = data.forgotPassword;
      if (status === Status.SUCCESS) {
        citiToast(NotificationTypes.SUCCESS, "Email has been sent");
      }
      if (status === Status.FAILED) {
        citiToast(NotificationTypes.ERROR, message);
      }
    }
  }, [data, error]);

  return (
    <div className="flex flex-col items-center p-3 tablet:p-0 overflow-auto h-full tablet:h-[calc(100vh-300px)] hide-scrollbar">
      <h3 className="text-24 my-4 font-bold text-citiGray-200 ">Email Verification</h3>
      <p className="text-citiGray-400 text-center smallLaptop:w-[75%] text-12 mb-4 smallLaptop:text-16 p-2">
        A confirmation email has been sent to the email address you provided {verifyEmail}, click on the link to verify your email address.
      </p>
      <p className="text-12 cursor-pointer font-bold mb-4 text-citiBlue-400 uppercase hover:citiblue-600" onClick={resendEmailVerificationLink}>
        {loading ? "Resending Email..." : "Resend Email"}{" "}
      </p>
    </div>
  );
};

export default EmailVerificationSuccess;
