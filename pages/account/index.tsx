import { NextPage } from "next";
import { useRouter } from "next/router";

import DashboardBaseLayout from "@components/layouts/dashboard/DashboardBaseLayout/DashboardBaseLayout";
import AccountMenu from "@components/layouts/dashboard/Navigation/AccountMenu";

import { useWindowSize } from "@hooks/useWindowSize";

const Account: NextPage = () => {
  const router = useRouter();
  const [width] = useWindowSize();

  const isMobile = width < 1024;

  if (!isMobile) {
    router.push("/account/my-account");
    return <div />;
  }

  return (
    <>
      {Boolean(width) && isMobile && (
        <DashboardBaseLayout showFooter={false} title="My Account">
          <div className="pt-5 bg-[#EFF7FB]">
            <AccountMenu />
          </div>
        </DashboardBaseLayout>
      )}
    </>
  );
};

export default Account;
