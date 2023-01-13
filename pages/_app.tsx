import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import React from "react";
import { ToastContainer } from "react-toastify";
import { wrapper } from "src/store";

import CustomAppWrapper from "@components/organisms/CustomAppWrapper";

import apolloClient from "@shared/libs/apollo";

import "react-toastify/dist/ReactToastify.css";
import "nprogress/nprogress.css";
import "../styles/globals.css";

/**
 * App wrapper for the whole application
 * @param {NextComponentType<NextPageContext, any, {}>} Component
 * @param {any} pageProps
 * @return {AppProps}
 */
const MyApp = ({ Component, pageProps }: AppProps) => {
  NProgress.configure({
    easing: "ease-out",
    minimum: 0.2,
  });

  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());

  return (
    <ApolloProvider client={apolloClient}>
      <CustomAppWrapper>
        <Component {...pageProps} />
        <ToastContainer newestOnTop={false} />
      </CustomAppWrapper>
    </ApolloProvider>
  );
};

export default wrapper.withRedux(MyApp);
