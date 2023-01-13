import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "src/store/rootReducer";

import Icon from "@components/atoms/Icons";

import { addNairaToPrice } from "@shared/libs/helpers";

const PaymentInformation = () => {
  const { currentOrder } = useSelector((state: AppState) => state.order);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [paymentInfo, setPaymentInfo] = useState([]);

  useEffect(() => {
    if (currentOrder) {
      const data: any = [
        {
          id: 1,
          name: "Price",
          price: currentOrder?.price ? currentOrder?.price : 0,
        },
        {
          id: 4,
          name: "Service Charge ",
          price: currentOrder?.serviceCharge ? currentOrder?.serviceCharge : 0,
        },
        {
          id: 5,
          name: "Total",
          price: currentOrder?.totalAmount ? currentOrder?.totalAmount : 0,
          isTotal: true,
        },
      ];
      setPaymentInfo(data);
    }
  }, [currentOrder]);

  return (
    <div className="mt-12 relative">
      <div className="bg-citiGray-100 h-[2.75rem] pl-8 smallLaptop:pl-12 py-4  flex justify-between items-center cursor-pointer" onClick={() => setIsVisible(!isVisible)}>
        <h4 className="uppercase text-14 font-bold text-citiBlue-600"> payment information</h4>
        {isVisible ? <Icon className="absolute right-10" name="caretUp" /> : <Icon className="absolute right-10" name="caretDown2" />}
      </div>
      {isVisible && (
        <div className="mt-8 pl-8 smallLaptop:pl-12 smallLaptop:-ml-8">
          {paymentInfo &&
            paymentInfo.map((payment: any) => (
              <div className="flex justify-between items-center mb-4" key={payment.id}>
                <p className={`${payment.isTotal ? "text-16 tablet:text-24 text-citiBlue-400" : "text-12 tablet:text-16 text-black"} font-semibold`}>{payment.name}</p>
                <p className={`${payment.isTotal ? "text-16 tablet:text-24 text-citiBlue-400" : "text-12 tablet:text-16 text-black"} absolute right-10 font-semibold`}>
                  {addNairaToPrice(payment.price)}
                </p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default PaymentInformation;
