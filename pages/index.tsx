import { useQuery } from "@apollo/client";
import type { NextPage } from "next";
import React from "react";

import Logo from "@components/atoms/Logo";

import { GET_RANDOM_PRODUCTS } from "@graphql/product/queries";

import BasePageLayout from "@layouts/BasePageLayout";

import { HomePage } from "@modules/landingPages";

const Home: NextPage = () => {
  const { loading } = useQuery(GET_RANDOM_PRODUCTS);

  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center animate-pulse">
        <Logo />
      </div>
    );
  }

  return (
    <BasePageLayout title="CitiSquare Home">
      <HomePage />
    </BasePageLayout>
  );
};

export default Home;
