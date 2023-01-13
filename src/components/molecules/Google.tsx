import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "src/store/auth";

import { citiToast } from "@components/atoms/Toast";

import { GOOGLE_LOGIN } from "@graphql/auth/mutations";

import { getTokenExpirationTime, getUrlQuery, LocalStorageKeys, NotificationTypes, Status } from "@shared/libs/helpers";
import { Portal } from "@shared/models";

const { NEXT_PUBLIC_GOOGLE_CLIENT_ID } = process.env;

interface GoogleSignInProps {
  signUp: boolean;
  successDestination: string;
}

const GoogleSignIn = ({ signUp, successDestination }: GoogleSignInProps) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [signupWithGoogle, { data: googleLoginData, error: googleLoginError }] = useMutation(GOOGLE_LOGIN, {
    variables: {},
  });

  const handleGoogleCallback = (response: any) => {
    signupWithGoogle({ variables: { idToken: response.credential, portal: Portal.CUSTOMER } });
  };

  useEffect(() => {
    const { status, message, data } = googleLoginData?.googleLogin || {};

    if (status === Status.SUCCESS) {
      const { rdr } = router.query || {};
      const query = router.query;

      delete query.rdr;

      const loginDestination = `${rdr}${getUrlQuery(query)}`;

      localStorage.setItem(LocalStorageKeys.TOKEN, data.token);
      localStorage.setItem(LocalStorageKeys.EXPIRATION_TIME, String(getTokenExpirationTime()));

      dispatch(setCurrentUser(data.user));
      router.push(rdr ? loginDestination : successDestination);
    } else if (status === Status.FAILED) {
      citiToast(NotificationTypes.ERROR, message);
    }
  }, [googleLoginData, googleLoginError]);

  useEffect(() => {
    if (window && window?.google && window?.google?.accounts) {
      window.google.accounts.id.initialize({
        client_id: NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
        callback: handleGoogleCallback,
      });

      window.google.accounts.id.renderButton(document.getElementById("googleSignIn"), {
        text: signUp ? "signup_with" : "signin_with",
        theme: "outline",
        size: "large",
      });

      window.google.accounts.id.prompt();
    }
  }, []);

  return <div id="googleSignIn" />;
};

export default GoogleSignIn;
