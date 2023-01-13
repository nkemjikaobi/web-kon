import Head from "next/head";

import { BreadCrumbProps } from "@components/atoms/CustomBreadCrumb/BreadCrumbProps";
import CustomBreadCrumb from "@components/atoms/CustomBreadCrumb/CustomBreadCrumb";
import DesktopFooter from "@components/layouts/Footer/DesktopFooter";
import MobileFooter from "@components/layouts/Footer/MobileFooter";

import { CustomMobileMenuProps } from "@shared/models";

import DashBoardDesktopNavgiation from "../Navigation/DashBoardDesktopNavgiation";
import DashboardMobileNavgiaton from "../Navigation/DashboardMobileNavgiaton";

interface DashboardBaseLayoutProps extends CustomMobileMenuProps {
  children: any;
  showNavigation?: boolean;
  title?: string;
  description?: string;
  keywords?: string;
  showSearch?: boolean;
  showFooter?: boolean;
  showBreadCrumbs?: boolean;
  breadcrumbs?: Array<BreadCrumbProps>;
  category?: string;
  hasFilters?: boolean;
  loadingContent?: boolean;
}

const DashboardBaseLayout = ({
  children,
  breadcrumbs,
  showBreadCrumbs,
  customMobileMenu,
  showSearch,
  showFooter,
  showNavigation,
  title,
  description,
  keywords,
  category,
  hasFilters,
  loadingContent,
}: DashboardBaseLayoutProps) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
        <meta content={keywords} name="keywords" />
        <link href="/static/fav.png" rel="shortcut icon" />
      </Head>
      <section className="smallLaptop:px-0 bg-citiBlue-70">
        {showNavigation && (
          <>
            <div className="hidden smallLaptop:block smallLaptop:sticky smallLaptop:w-full smallLaptop:top-0 smallLaptop:z-50">
              <DashBoardDesktopNavgiation search={showSearch} />
            </div>
            <div className="block sticky w-full top-0 z-50 smallLaptop:hidden">
              <DashboardMobileNavgiaton category={category} customMobileMenu={customMobileMenu} hasFilters={hasFilters} />
            </div>
          </>
        )}
        {showBreadCrumbs && (
          <div className="hidden smallLaptop:block pt-6  bg-citiBlue-70 max-w-[90rem] mx-auto">
            <CustomBreadCrumb breadCrumbs={breadcrumbs} loading={loadingContent} />
          </div>
        )}
        <main className="h-auto max-w-[90rem] mx-auto ">{children}</main>
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

export default DashboardBaseLayout;

DashboardBaseLayout.defaultProps = {
  customMobileMenu: "",
  showNavigation: true,
  title: "CitiSquare Africa",
  description: "Buy now Pay Later, Rent Shortlets",
  keywords: "rent, loan, ecommerce, shortlets, vacations, spa",
  showSearch: false,
  showFooter: true,
  breadcrumbs: [],
  showBreadCrumbs: true,
  category: "",
  hasFilters: false,
  loadingContent: false,
};
