import Head from "next/head";
import React from "react";

import DesktopFooter from "./Footer/DesktopFooter";
import MobileFooter from "./Footer/MobileFooter";
import DesktopNavigation from "./NavBar/DesktopNavigation";
import MobileNavigation from "./NavBar/MobileNavigation";

interface BasePageLayout {
  children: any;
  showNavigation?: boolean;
  showFooter?: boolean;
  title?: string;
  description?: string;
  keywords?: string;
}

const BasePageLayout = ({ children, showNavigation, showFooter, title, description, keywords }: BasePageLayout) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
        <meta content={keywords} name="keywords" />
        <link href="/static/fav.png" rel="shortcut icon" />
      </Head>
      <section className="smallLaptop:px-0">
        {showNavigation && (
          <>
            <div className="hidden smallLaptop:block smallLaptop:sticky smallLaptop:w-full smallLaptop:top-0 smallLaptop:z-50">
              <DesktopNavigation />
            </div>
            <div className="block sticky w-full top-0 z-50 smallLaptop:hidden">
              <MobileNavigation />
            </div>
          </>
        )}
        <main className="h-auto">{children}</main>
        {showFooter && (
          <>
            <div className="hidden smallLaptop:block smallLaptop:w-full">
              <DesktopFooter />
            </div>
            <div className="block w-full smallLaptop:hidden">
              <MobileFooter />
            </div>
          </>
        )}
      </section>
    </div>
  );
};

BasePageLayout.defaultProps = {
  showFooter: true,
  showNavigation: true,
  title: "CitiSquare Africa",
  description: "Buy now Pay Later, Rent Shortlets",
  keywords: "rent, loan, ecommerce, shortlets, vacations, spa",
};

export default BasePageLayout;
