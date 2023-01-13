import { ApolloCache, DefaultContext, MutationFunctionOptions, OperationVariables, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "src/store/auth";

import { citiToast } from "@components/atoms/Toast";

import { LOGIN_USER } from "@graphql/auth/mutations";

import { getTokenExpirationTime, getUrlQuery, LocalStorageKeys, NotificationTypes } from "@shared/libs/helpers";

interface LoginSuccessData {
  data: {
    token: string;
    user: {
      email: string;
      phoneNumber: string;
      firstName: string;
      lastName: string;
      _id: string;
    };
  };
  status: "success";
}

interface LoginFailureData {
  status: "error";
  message: string;
}

type loginProps = MutationFunctionOptions<any, OperationVariables, DefaultContext, ApolloCache<any>> | undefined;

interface useLoginMutationProps {
  login: (options?: loginProps) => void;
  isLoading: boolean;
}

const useLoginMutation = (): useLoginMutationProps => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onLoginSuccessDestination = "/vacations";

  const router = useRouter();
  const dispatch = useDispatch();

  const [loginMutation, { data, error }] = useMutation(LOGIN_USER);

  const { loginUser }: { loginUser: LoginSuccessData | LoginFailureData } = data || {};

  const login = (value: loginProps) => {
    setIsLoading(true);
    loginMutation(value);
  };

  useEffect(() => {
    if (loginUser && loginUser.status === "success") {
      const query = router.query;
      const { rdr } = query;

      delete query.rdr;

      const loginDestination = `${rdr}${getUrlQuery(query)}`;

      localStorage.setItem(LocalStorageKeys.TOKEN, loginUser.data.token);
      localStorage.setItem(LocalStorageKeys.EXPIRATION_TIME, String(getTokenExpirationTime()));

      dispatch(setCurrentUser(loginUser.data.user));
      router.push(rdr ? loginDestination : onLoginSuccessDestination);
    } else if (loginUser && loginUser.status === "error") {
      setIsLoading(false);
      citiToast(NotificationTypes.ERROR, "Invalid email/password, please try again.");
    }
    if (error) {
      setIsLoading(false);
      citiToast(NotificationTypes.ERROR, "Failed to login, please check your network.");
    }
  }, [data, error]);

  return { login, isLoading };
};

export default useLoginMutation;
