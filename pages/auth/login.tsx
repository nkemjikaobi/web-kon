import React from "react";

import AuthLayout from "@components/layouts/auth/AuthBaseLayout";
import Login from "@components/organisms/AuthenticationPages/Login/Login";

const LoginCustomer = () => {
  return (
    <AuthLayout>
      <Login />
    </AuthLayout>
  );
};

export default LoginCustomer;
