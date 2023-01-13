import { useQuery } from "@apollo/client";
import type { GetServerSideProps, NextPage } from "next";
import Error from "next/error";
import React, { useState, useEffect } from "react";
import { ImSpinner9 } from "react-icons/im";
import { useDispatch } from "react-redux";
import { setAllOrder, setLoading } from "src/store/order";

import DashboardBaseLayout from "@components/layouts/dashboard/DashboardBaseLayout/DashboardBaseLayout";
import { EmptyState } from "@components/molecules/EmptyState";
import ReservationStatus from "@components/organisms/SpaReserve/ReservationStatus/ReservationStatus";

import { GET_CUSTOMER_SINGLE_ORDER } from "@graphql/order/queries";

import { OrderProps } from "@dto/Order/OrderProps";

import { Status } from "@shared/libs/helpers";
import { ReservationPageProps } from "@shared/models";

const _SpaReserve: NextPage<ReservationPageProps> = ({ reservationId }: ReservationPageProps) => {
  const [orders, setOrders] = useState<Array<OrderProps>>([]);
  const [errorState, setErrorState] = useState<string>("");

  const dispatch = useDispatch();

  const {
    data: getOrderData,
    error: orderError,
    loading: orderLoading,
  } = useQuery(GET_CUSTOMER_SINGLE_ORDER, {
    variables: {
      getCustomerSingleOrderId: reservationId,
    },
  });

  const data = getOrderData?.getCustomerSingleOrder;

  useEffect(() => {
    if (data) {
      const { status, data: orderData, message } = data;

      if (status === Status.SUCCESS) {
        const result: Array<OrderProps> = orderData;
        setOrders(result);
        dispatch(setAllOrder(result));
      }
      if (status === Status.FAILED || status === Status.ERROR) {
        setErrorState(message);
      }

      dispatch(setLoading(false));
    }
    if (orderError) {
      dispatch(setLoading(false));
      setErrorState("An error occurred...");
    }
  }, [getOrderData, orderError]);

  if (orderError || (data && (data.status === Status.FAILED || data.__typename === "ServerError"))) {
    return <Error statusCode={404} />;
  }

  return errorState ? (
    <Error statusCode={404} title={errorState} />
  ) : (
    <DashboardBaseLayout showFooter={false} showSearch={true} title="Spa Reserve">
      <div className="px-2 bigLaptop:px-32 py-5 bg-citiBlue-70 min-h-[calc(100vh-70px)] smallLaptop:min-h-[calc(100vh-120px)] flex flex-col justify-center items-center">
        {orderLoading ? <ImSpinner9 className="animate-spin" /> : orders && <ReservationStatus orders={orders} />}
        {!orderLoading && !orders && <EmptyState icon="bagCross" title="Failed to get your order details, please contact customer service..." />}
      </div>
    </DashboardBaseLayout>
  );
};

export default _SpaReserve;

export const getServerSideProps: GetServerSideProps = async ({ query: { reservationId } }) => {
  return {
    props: {
      reservationId,
    },
  };
};
