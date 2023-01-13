import type { NextPage } from "next";
import React from "react";

import PageNotFound from "@components/layouts/PageNotFound";

import BasePageLayout from "@layouts/BasePageLayout";

const NotFound: NextPage = () => {
  return (
    <BasePageLayout showFooter={false} title="Not Found">
      <div className="flex justify-center items-center">
        <PageNotFound />
        <img className=" w-screen absolute bottom-0" src="/images/png/carsAndMountain.png" />
      </div>
    </BasePageLayout>
  );
};

export default NotFound;
