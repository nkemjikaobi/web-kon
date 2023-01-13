import type { NextPage } from "next";
import React from "react";

import GroupInvestmentsPage from "@components/organisms/GroupInvestmentsPage/GroupInvestmentsPage";

import BasePageLayout from "@layouts/BasePageLayout";

const GroupInvestment: NextPage = () => {
  return (
    <BasePageLayout title="Group Investments">
      <GroupInvestmentsPage />
    </BasePageLayout>
  );
};

export default GroupInvestment;
