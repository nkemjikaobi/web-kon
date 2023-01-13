import React from "react";

import StepperComponent from "@components/atoms/StepperComponent/StepperComponent";
import AuthLayout from "@components/layouts/auth/AuthBaseLayout";
import EmailVerificationSuccess from "@components/organisms/AuthenticationPages/EmailVerificationSuccess/EmailVerificationSuccess";
import ForgotPassword from "@components/organisms/AuthenticationPages/ForgotPassword/ForgotPassword";

import { StepProps } from "@dto/StepperComponent/StepProps";

const ForgotPasswordStep = () => {
  return (
    <AuthLayout>
      <StepperComponent steps={forgotPasswordStep} />
    </AuthLayout>
  );
};

export default ForgotPasswordStep;

const forgotPasswordStep = [
  { element: (stepProps: StepProps) => <ForgotPassword step={stepProps} /> },
  { element: (stepProps: StepProps) => <EmailVerificationSuccess step={stepProps} /> },
];
