import { useQuery } from "@apollo/client";
import React, { FC } from "react";

import { GET_USER } from "@graphql/auth/queries";

export const UserDashboardPage: FC = () => {
  const { data, error, loading } = useQuery(GET_USER);

  if (loading) return <span>Loading...</span>;
  if (error) return <span>{JSON.stringify(error)}</span>;
  return <span>{JSON.stringify(data)}</span>;
};
