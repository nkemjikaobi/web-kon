import { useQuery } from "@apollo/client";
import type { GetServerSideProps, NextPage } from "next";
import Error from "next/error";
import { ImSpinner9 } from "react-icons/im";

import DashboardBaseLayout from "@components/layouts/dashboard/DashboardBaseLayout/DashboardBaseLayout";
import { EmptyState } from "@components/molecules/EmptyState";
import BuyNowPayLater from "@components/organisms/PaymentMethod/BuyNowPayLater";

import { GET_CUSTOMER_SINGLE_ORDER } from "@graphql/order/queries";

import { Status } from "@shared/libs/helpers";
import { ReservationPageProps } from "@shared/models";

const PaymentMethods: NextPage<ReservationPageProps> = ({ reservationId }: ReservationPageProps) => {
  const {
    data: orderData,
    error,
    loading: orderLoading,
  } = useQuery(GET_CUSTOMER_SINGLE_ORDER, {
    variables: {
      getCustomerSingleOrderId: reservationId,
    },
  });

  const { data } = orderData?.getCustomerSingleOrder || {};

  if (error || (data && (data.status === Status.FAILED || data.__typename === "ServerError"))) {
    return <Error statusCode={404} />;
  }

  return (
    <DashboardBaseLayout showFooter={false} showSearch={true} title="Payment Status">
      <div className="px-2 bigLaptop:px-32 py-5 bg-citiBlue-70 min-h-[calc(100vh-70px)] smallLaptop:min-h-[calc(100vh-120px)] flex flex-col justify-center items-center">
        {orderLoading ? <ImSpinner9 className="animate-spin" /> : data && <BuyNowPayLater orderData={data} />}
        {!orderLoading && !data && <EmptyState icon="bagCross" title="Failed to get your order details, please contact customer service..." />}
      </div>
    </DashboardBaseLayout>
  );
};

export default PaymentMethods;

export const getServerSideProps: GetServerSideProps = async ({ query: { reservationId } }) => {
  return {
    props: {
      reservationId,
    },
  };
};
