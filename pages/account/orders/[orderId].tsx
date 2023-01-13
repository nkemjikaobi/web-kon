import { useQuery } from "@apollo/client";
import { GetServerSideProps, NextPage } from "next";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentOrder } from "src/store/order";

import { citiToast } from "@components/atoms/Toast";
import DashboardBaseLayout from "@components/layouts/dashboard/DashboardBaseLayout/DashboardBaseLayout";

import { GET_CUSTOMER_SINGLE_ORDER } from "@graphql/order/queries";
import { GET_PRODUCT_ENTITIES } from "@graphql/product/queries";

import { EntityProps } from "@dto/Product/ProductProps";

import { getEntityIconWithUrlKey, NotificationTypes, Status } from "@shared/libs/helpers";
import { MenuProps } from "@shared/models";

import { OrderDetailsPages } from "@modules/orderDetailsPages";

interface OrderDetailsPageProps {
  orderId: string;
}

const OrderDetailsPage: NextPage<OrderDetailsPageProps> = ({ orderId }: OrderDetailsPageProps) => {
  const dispatch = useDispatch();

  const {
    data: orderData,
    error: orderError,
    loading: orderLoading,
  } = useQuery(GET_CUSTOMER_SINGLE_ORDER, {
    variables: { getCustomerSingleOrderId: orderId },
  });

  const { data: entityData } = useQuery(GET_PRODUCT_ENTITIES);

  const { data } = entityData?.getProductEntities || {};

  const getMenuStructure = (): MenuProps[] => {
    return (data || []).map((entity: EntityProps) => ({
      id: entity._id,
      icon: getEntityIconWithUrlKey(entity?.urlKey || ""),
      name: entity.name,
      route: `/account/orders?entity=${entity.urlKey}`,
      urlKey: entity.urlKey,
    }));
  };

  useEffect(() => {
    if (orderData) {
      const { status, message, data } = orderData.getCustomerSingleOrder;

      if (status === Status.SUCCESS) {
        dispatch(setCurrentOrder(data[0]));
      }
      if (status === Status.FAILED) {
        citiToast(NotificationTypes.ERROR, message);
      }
    }

    if (orderError) {
      citiToast(NotificationTypes.ERROR, "An error occurred...Make sure you are signed in");
    }
  }, [orderData, orderError]);

  return (
    <DashboardBaseLayout showBreadCrumbs={false} title="Order Details Page">
      <div className="smallLaptop:ml-4 mr-4 mt-8  tablet:mr-[2.625rem] bg-citiBlue-70">
        <div className="max-w-[1440px]">
          <OrderDetailsPages menu={getMenuStructure()} orderLoading={orderLoading} />
        </div>
      </div>
    </DashboardBaseLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query: { orderId } }) => {
  return {
    props: {
      orderId,
    },
  };
};

export default OrderDetailsPage;
