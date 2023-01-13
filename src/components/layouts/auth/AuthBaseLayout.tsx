import { ReactNode } from "react";

import AuthFooter from "./AuthFooter";
import AuthNavBar from "./AuthNavBar";
import MobileAuthNavBar from "./MobileAuthNavBar";

interface AuthLayoutProps {
  children: ReactNode;
  showNavigation?: boolean;
}

const AuthLayout = ({ children, showNavigation }: AuthLayoutProps) => {
  return (
    <div className={`bg-citiBlue-50 pb-6 min-h-screen smallLaptop:h-screen overflow-hidden`}>
      <section className="smallLaptop:px-0">
        {showNavigation && (
          <>
            <div className="hidden smallLaptop:block smallLaptop:sticky smallLaptop:w-full smallLaptop:top-0 smallLaptop:z-50">
              <AuthNavBar />
            </div>
            <div className="block sticky w-full top-0 z-50 smallLaptop:hidden">
              <MobileAuthNavBar />
            </div>
          </>
        )}
      </section>
      <div className="flex items-center justify-center">{children}</div>
      <AuthFooter />
    </div>
  );
};

AuthLayout.defaultProps = {
  showNavigation: true,
};

export default AuthLayout;
