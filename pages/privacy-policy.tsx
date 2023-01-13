import type { NextPage } from "next";
import React from "react";

import PrivacyPolicy from "@components/organisms/PrivacyPolicy/PrivacyPolicy";

import BasePageLayout from "@layouts/BasePageLayout";

const PrivacyPolicyPage: NextPage = () => {
  return (
    <BasePageLayout showFooter={false} title="Privacy Policy">
      <div className="flex justify-center items-center">
        <PrivacyPolicy />
      </div>
    </BasePageLayout>
  );
};

export default PrivacyPolicyPage;
