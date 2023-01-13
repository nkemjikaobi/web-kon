import type { NextPage } from "next";

import DashboardBaseLayout from "@components/layouts/dashboard/DashboardBaseLayout/DashboardBaseLayout";
import AccountMenu from "@components/layouts/dashboard/Navigation/AccountMenu";
import ProfileInfo from "@components/organisms/ProfileInformation/ProfileInformation";

const ProfileInformation: NextPage = () => {
  return (
    <DashboardBaseLayout showBreadCrumbs={false} showFooter={false} title="My Account">
      <div className="smallLaptop:min-h-[calc(100vh-95px)] pt-5 bg-[#EFF7FB] smallLaptop:flex television:justify-center">
        <div className="hidden smallLaptop:block">
          <AccountMenu />
        </div>
        <ProfileInfo />
      </div>
    </DashboardBaseLayout>
  );
};

export default ProfileInformation;
