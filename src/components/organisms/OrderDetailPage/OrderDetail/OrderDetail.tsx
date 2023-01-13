import { useRouter } from "next/router";
import React from "react";

import Icon from "@components/atoms/Icons";

import BookingDetails from "../BookingDetails/BookingDetails";
import OrderOverview from "../OrderOverview/OrderOverview";
import PaymentInformation from "../PaymentInformation/PaymentInformation";

const OrderDetail = () => {
  const router = useRouter();
  return (
    <div>
      <h4 className="flex px-8 items-center mb-4 text-citiBlue-750 font-normal text-16">
        <Icon className="mr-2 cursor-pointer" name="back" onClick={() => router.push("/account/orders")} /> Order Details
      </h4>
      <hr />
      <OrderOverview />
      <BookingDetails />
      {/* <GuestInformation /> */}
      <PaymentInformation />
    </div>
  );
};

export default OrderDetail;
