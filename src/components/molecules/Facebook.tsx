import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import FacebookLogin, { ReactFacebookFailureResponse, ReactFacebookLoginInfo } from "react-facebook-login";
import { AiOutlineFacebook } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "src/store/auth";

import { citiToast } from "@components/atoms/Toast";

import { FACEBOOK_LOGIN } from "@graphql/auth/mutations";

import { getTokenExpirationTime, getUrlQuery, LocalStorageKeys, NotificationTypes, Status } from "@shared/libs/helpers";
import { Portal } from "@shared/models";

const { NEXT_PUBLIC_FACEBOOK_APP_ID } = process.env;

interface FacebookSignInProps {
  signUp: boolean;
  successDestination: string;
}

const FacebookSignIn = ({ signUp, successDestination }: FacebookSignInProps) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [signInWIthFacebook, { data: facebookLoginData, error: facebookLoginError }] = useMutation(FACEBOOK_LOGIN, {
    variables: {},
  });

  const handleFacebookCallback = (response: ReactFacebookLoginInfo | ReactFacebookFailureResponse) => {
    if ((response as ReactFacebookFailureResponse).status === "unknown") {
      alert("Login failed!");
      citiToast(NotificationTypes.ERROR, "Failed to login. Please try again.");
      return false;
    }
    if ((response as ReactFacebookLoginInfo).accessToken) {
      signInWIthFacebook({
        variables: {
          accessToken: (response as ReactFacebookLoginInfo).accessToken,
          portal: Portal.CUSTOMER,
        },
      });
    } else {
      citiToast(NotificationTypes.ERROR, "Failed to login. Please try again.");
    }
  };

  useEffect(() => {
    const { status, message, data } = facebookLoginData?.facebookLogin || {};

    if (status === Status.SUCCESS) {
      const query = router.query;
      const { rdr } = query;

      delete query.rdr;

      const loginDestination = `${rdr}${getUrlQuery(query)}`;

      localStorage.setItem(LocalStorageKeys.TOKEN, data.token);
      localStorage.setItem(LocalStorageKeys.EXPIRATION_TIME, String(getTokenExpirationTime()));

      dispatch(setCurrentUser(data.user));
      router.push(rdr ? loginDestination : successDestination);
    } else if (status === Status.FAILED) {
      citiToast(NotificationTypes.ERROR, message);
    }
  }, [facebookLoginData, facebookLoginError]);

  return (
    <FacebookLogin
      appId={NEXT_PUBLIC_FACEBOOK_APP_ID as string}
      autoLoad={false}
      callback={handleFacebookCallback}
      cssClass="flex items-center text-white bg-[#4c69ba] px-4 py-[6px] rounded-[3px] text-14"
      fields="name,email,picture"
      icon={<AiOutlineFacebook className="mr-4" size={25} />}
      scope="public_profile,email,user_friends"
      textButton={signUp ? "Sign up with Facebook" : "Sign in with facebook"}
    />
  );
};

export default FacebookSignIn;
