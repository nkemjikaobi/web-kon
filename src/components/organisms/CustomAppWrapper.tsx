import { useQuery } from "@apollo/client";
import moment from "moment";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "src/store/auth";

import { GET_USER } from "@graphql/auth/queries";
import { GET_PRODUCT_ENTITIES, GET_RANDOM_PRODUCTS } from "@graphql/product/queries";

import { getUrlQuery, LocalStorageKeys } from "@shared/libs/helpers";

const CustomAppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [loopCount, setLoopCount] = useState(0);

  const { data, error } = useQuery(GET_USER);
  const {} = useQuery(GET_RANDOM_PRODUCTS);
  const {} = useQuery(GET_PRODUCT_ENTITIES);

  const dispatch = useDispatch();
  const router = useRouter();

  const { pathname, query } = router;

  const authKeyPaths = ["account", "payment", "reserve"];
  const userIsInSecuredPath = authKeyPaths.find((path) => pathname.includes(path.replaceAll("/", "")) && !pathname.includes("auth"));

  const logout = () => {
    const redirectPath = `${pathname}${getUrlQuery(query).replace("?", "&")}`;

    localStorage.removeItem(LocalStorageKeys.TOKEN);
    localStorage.removeItem(LocalStorageKeys.EXPIRATION_TIME);

    dispatch(setCurrentUser({}));

    if (userIsInSecuredPath) router.push(`/auth/login?rdr=${redirectPath}`);
  };

  useEffect(() => {
    const token = localStorage.getItem(LocalStorageKeys.TOKEN);
    const tokenExpirationTime = localStorage.getItem(LocalStorageKeys.EXPIRATION_TIME);

    if (token && moment() > moment(tokenExpirationTime)) logout();
    if (!token && userIsInSecuredPath) logout();

    setTimeout(() => {
      setLoopCount(loopCount + 1);
    }, 1000);
  }, [loopCount]);

  useEffect(() => {
    if (data?.getUser?.data?.user) {
      dispatch(setCurrentUser(data?.getUser?.data?.user));
    } else if (error) logout();
  }, [data, error]);

  return <>{children}</>;
};

export default CustomAppWrapper;
