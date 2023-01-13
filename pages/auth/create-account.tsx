import React from "react";

import StepperComponent from "@components/atoms/StepperComponent/StepperComponent";
import AuthLayout from "@components/layouts/auth/AuthBaseLayout";
import CreateAccount from "@components/organisms/AuthenticationPages/CreateAccounts/CreateAccount";
import EmailVerification from "@components/organisms/AuthenticationPages/EmailVerification/EmailVerification";

import { StepProps } from "@dto/StepperComponent/StepProps";

const CreateCustomerAccount = () => {
  return (
    <AuthLayout>
      <StepperComponent steps={createAccountStep} />
    </AuthLayout>
  );
};

export default CreateCustomerAccount;

const createAccountStep = [
  { element: (stepProps: StepProps) => <CreateAccount step={stepProps} /> },
  { element: (stepProps: StepProps) => <EmailVerification step={stepProps} /> },
];
