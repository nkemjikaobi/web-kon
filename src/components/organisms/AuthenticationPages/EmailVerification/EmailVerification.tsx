import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import OtpComponent from "@components/atoms/OtpComponent/OtpComponent";
import { citiToast } from "@components/atoms/Toast";

import { VERIFY_ACCOUNT, RESEND_SIGNUP_OTP } from "@graphql/auth/mutations";

import { StepProps } from "@dto/StepperComponent/StepProps";

import { ButtonProperties, NotificationTypes } from "@shared/libs/helpers";

interface EmailVerificationProps {
  step: StepProps;
}
const EmailVerification = ({ step }: EmailVerificationProps) => {
  const [otp, setOtp] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [verifyAccountInput, { data: verifyData, loading: verifyLoading, error: verifyError }] = useMutation(VERIFY_ACCOUNT);

  const [resendOTPInput, { data: resendOtpData, loading: resendOtpLoading, error: resendOtpError }] = useMutation(RESEND_SIGNUP_OTP);

  const email = JSON.parse(localStorage.getItem("CustomerEmail") || "");
  const otpLength = 6;
  const router = useRouter();

  const handleChange = async (otp: string) => {
    if (otp) {
      setErrorMsg("");
      setOtp(otp);
    }
  };

  useEffect(() => {
    if (verifyError) {
      citiToast(NotificationTypes.ERROR, "Something went wrong, please try again.");
    } else if (verifyData?.verifyAccount?.status === "failed") {
      citiToast(NotificationTypes.ERROR, "OTP invalid, please enter a valid OTP");
    } else if (verifyData?.verifyAccount?.status === "success") {
      citiToast(NotificationTypes.SUCCESS, "Email verification successful.s");
      router.push("/auth/login");
    }
  }, [verifyError, verifyData]);

  const handleSubmit = async () => {
    toast.dismiss();

    if (!otp) {
      setErrorMsg("Please input pin");
    } else if (otp.length < otpLength) {
      setErrorMsg("Invalid pin");
    } else if (otp.length == otpLength) {
      await verifyAccountInput({
        variables: {
          verifyAccountInput: {
            email: email,
            otp: otp,
          },
        },
      });
    }
  };
  const ResendOTP = async () => {
    if (!resendOtpLoading) {
      await resendOTPInput({
        variables: {
          resendOtpInput: {
            email: email,
          },
        },
      });
      citiToast(NotificationTypes.SUCCESS, "OTP sent successfully");
    }
  };
  useEffect(() => {
    if (resendOtpError) {
      citiToast(NotificationTypes.ERROR, "Something went wrong, please try again.");
    } else if (resendOtpData?.resendSignUpOtp?.status === "failed") {
      citiToast(NotificationTypes.ERROR, resendOtpData?.resendSignUpOtp?.message);
    } else if (verifyData?.verifyAccount?.status === "success") {
      router.push("/auth/login");
    }
  }, [resendOtpError, resendOtpData]);
  return (
    <div className="flex flex-col items-center p-3 tablet:p-0 overflow-auto h-full tablet:h-[calc(100vh-300px)] hide-scrollbar">
      <h3 className="text-24 my-4 font-bold text-citiGray-200 ">Email Verification</h3>
      <p className="text-[#8A94A6] text-center text-10 smallLaptop:text-16 p-2">Please enter the 6-digit verification code that was sent to your email.</p>
      <div className="text-black w-full tablet:w-[80%] desktop:w-3/4">
        <OtpComponent isInputNum={true} numInputs={6} onChange={handleChange} otp={otp} value={otp} />
      </div>
      <p className="text-red-500">{errorMsg}</p>
      <CustomButton
        customClass="my-4 w-[90%] tablet:w-[80%] desktop:w-[90%]"
        handleClick={handleSubmit}
        isDisabled={verifyLoading}
        isSubmitting={verifyLoading}
        size={ButtonProperties.SIZES.small}
        title="Verify Account"
        variant={ButtonProperties.VARIANT.secondary.name}
      />
      <div className="text-16 mb-4 cursor-pointer text-citiGray-200 hover:text-citiBlue-600" onClick={ResendOTP}>
        {!resendOtpLoading && <p>Resend OTP </p>}
        {resendOtpLoading && <p>Resending OTP.... </p>}
      </div>
    </div>
  );
};

export default EmailVerification;
