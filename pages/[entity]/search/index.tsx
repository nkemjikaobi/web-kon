import { GetServerSideProps } from "next";
import React from "react";

import DashboardBaseLayout from "@components/layouts/dashboard/DashboardBaseLayout/DashboardBaseLayout";

import { SearchPages } from "@modules/searchPages";

interface SearchPageProps {
  entity: string;
}

const SearchPage: React.FC<SearchPageProps> = ({ entity }: SearchPageProps) => {
  const breadCrumb = [
    { text: "Home", url: "/" },
    { text: entity, url: `/${entity}` },
    { text: "Search", url: `/${entity}/search` },
  ];

  return (
    <DashboardBaseLayout breadcrumbs={breadCrumb} category={entity} hasFilters={true} showBreadCrumbs={true} title="Search Page">
      <div className="bg-citiBlue-70 smallLaptop:pl-[1.625rem]">
        <SearchPages entity={entity} />
      </div>
    </DashboardBaseLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query: { entity } }) => {
  return {
    props: {
      entity,
    },
  };
};

export default SearchPage;
