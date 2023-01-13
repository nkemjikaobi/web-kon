import { useQuery } from "@apollo/client";
import type { GetServerSideProps, NextPage } from "next";
import React, { useState, useEffect } from "react";
import { ImSpinner9 } from "react-icons/im";
import { useDispatch } from "react-redux";
import { setAllOrder, setLoading } from "src/store/order";

import { citiToast } from "@components/atoms/Toast";
import DashboardBaseLayout from "@components/layouts/dashboard/DashboardBaseLayout/DashboardBaseLayout";
import { EmptyState } from "@components/molecules/EmptyState";
import ReservationStatus from "@components/organisms/SpaReserve/ReservationStatus/ReservationStatus";

import { GET_CUSTOMER_SINGLE_ORDER } from "@graphql/order/queries";

import { OrderProps } from "@dto/Order/OrderProps";

import { NotificationTypes, Status } from "@shared/libs/helpers";
import { ReservationPageProps } from "@shared/models";

const _SpaReserve: NextPage<ReservationPageProps> = ({ reservationId }: ReservationPageProps) => {
  const [orders, setOrders] = useState<Array<OrderProps>>([]);

  const dispatch = useDispatch();

  const {
    data: orderData,
    error: orderError,
    loading: orderLoading,
  } = useQuery(GET_CUSTOMER_SINGLE_ORDER, {
    variables: {
      getCustomerSingleOrderId: reservationId,
    },
  });

  useEffect(() => {
    if (orderData) {
      const { status, message, data } = orderData.getCustomerSingleOrder;

      if (status === Status.SUCCESS) {
        const result: Array<OrderProps> = data;
        setOrders(result);
        dispatch(setAllOrder(result));
      }
      if (status === Status.FAILED) {
        citiToast(NotificationTypes.ERROR, message);
      }

      dispatch(setLoading(false));
    }
    if (orderError) {
      dispatch(setLoading(false));
      citiToast(NotificationTypes.ERROR, "An error occurred...Make sure you are signed in");
    }
  }, [orderData, orderError]);

  return (
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
