import React, { FC } from "react";

import { getSanitizedHtml } from "@shared/libs/helpers";

import BreadCrumbSkeleton from "@skeletons/BreadCrumbSkeleton";

import CustomLink from "../CustomLink/CustomLink";
import { BreadCrumbProps } from "./BreadCrumbProps";

interface CustomBreadCrumbProps {
  breadCrumbs?: Array<BreadCrumbProps>;
  loading?: boolean;
}
const CustomBreadCrumb: FC<CustomBreadCrumbProps> = ({ breadCrumbs, loading }) => {
  return loading ? (
    <BreadCrumbSkeleton />
  ) : (
    <div className="flex items-center text-12 text-citiBlue-b200 pl-[1.625rem]">
      {breadCrumbs &&
        Object.entries(breadCrumbs).map(([index, breadCrumb]) => {
          if (parseInt(index) === Object.entries(breadCrumbs).length - 1) {
            return <div className="capitalize" dangerouslySetInnerHTML={getSanitizedHtml(breadCrumb.text ? breadCrumb.text : "")} key={breadCrumb.text} />;
          }
          return (
            <div className="mr-2 flex items-center" key={breadCrumb.text}>
              <div className="mr-2 capitalize">
                <CustomLink destination={breadCrumb.url ? breadCrumb.url : "#"}>{breadCrumb.text ? breadCrumb.text : ""}</CustomLink>
              </div>
              /
            </div>
          );
        })}
    </div>
  );
};

export default CustomBreadCrumb;

CustomBreadCrumb.defaultProps = {
  breadCrumbs: [],
  loading: false,
};
