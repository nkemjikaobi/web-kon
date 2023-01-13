/* eslint-disable camelcase */
import { useLazyQuery, useMutation } from "@apollo/client";
import type { GetServerSideProps, NextPage } from "next";
import Error from "next/error";
import React, { useEffect, useState } from "react";
import { ImSpinner9 } from "react-icons/im";

import PaymentStatus from "@components/atoms/PAYMENT_INTEGRATION/PaymentStatus";
import DashboardBaseLayout from "@components/layouts/dashboard/DashboardBaseLayout/DashboardBaseLayout";

import { GET_CUSTOMER_SINGLE_ORDER } from "@graphql/order/queries";
import { VERIFY_TRANSACTION } from "@graphql/payment/mutation";

import { NotificationTypes, Status } from "@shared/libs/helpers";

interface PaymentStatProps {
  txRef: string;
  transactionId: string;
}

const PaymentStat: NextPage<PaymentStatProps> = ({ transactionId, txRef }: PaymentStatProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [verifyTransaction, { data: verifyTxnData, error: verifyTxnError }] = useMutation(VERIFY_TRANSACTION);

  const [getOrderDetails, { data: orderDetailsData }] = useLazyQuery(GET_CUSTOMER_SINGLE_ORDER);

  const { data: trxData, status: verifyTransactionStatus } = verifyTxnData?.verifyTransaction || {};
  const { status: orderDetailsStatus, data: orderData } = orderDetailsData?.getCustomerSingleOrder || {};

  useEffect(() => {
    if (txRef) {
      verifyTransaction({ variables: { txRef } });
      setIsLoading(true);
    }
  }, [txRef, transactionId]);

  useEffect(() => {
    if (verifyTransactionStatus === Status.SUCCESS) {
      getOrderDetails({
        variables: {
          getCustomerSingleOrderId: trxData.order,
        },
      });
    }
  }, [verifyTransactionStatus]);

  useEffect(() => {
    if (orderDetailsStatus === Status.SUCCESS) {
      setIsLoading(false);
    }
  }, [orderDetailsStatus]);

  if (verifyTxnError || verifyTransactionStatus === Status.FAILED || verifyTransactionStatus === NotificationTypes.ERROR) {
    return <Error statusCode={404} />;
  }

  return (
    <DashboardBaseLayout showSearch={false} title="Payment Status">
      <div className="px-2 bigLaptop:px-32 py-5 smallLaptop:py-5 bg-[#EFF7FB] flex flex-col television:items-center">
        {isLoading ? (
          <div className="w-full grid place-content-center h-[calc(100vh-100px)]">
            <ImSpinner9 className="animate-spin" />
          </div>
        ) : (
          orderData && orderData.length > 0 && <PaymentStatus order={orderData[0]} trxVerificationData={trxData} />
        )}
      </div>
    </DashboardBaseLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query: { tx_ref, transaction_id } }) => {
  if (!tx_ref) {
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
    };
  }

  return {
    props: {
      txRef: tx_ref,
      transactionId: transaction_id,
    },
  };
};

export default PaymentStat;
