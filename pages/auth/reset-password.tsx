import React from "react";

import StepperComponent from "@components/atoms/StepperComponent/StepperComponent";
import AuthLayout from "@components/layouts/auth/AuthBaseLayout";
import NewPasswordReset from "@components/organisms/AuthenticationPages/NewPasswordReset/NewPasswordReset";

import { StepProps } from "@dto/StepperComponent/StepProps";

const ResetPasswordPage = () => {
  return (
    <AuthLayout>
      <StepperComponent steps={forgotPasswordStep} />
    </AuthLayout>
  );
};

export default ResetPasswordPage;

const forgotPasswordStep = [{ element: (stepProps: StepProps) => <NewPasswordReset step={stepProps} /> }];
