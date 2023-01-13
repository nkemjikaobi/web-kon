import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "src/store/rootReducer";

import { formatTime } from "@shared/libs/helpers";

const OrderOverview = () => {
  const { currentOrder } = useSelector((state: AppState) => state.order);
  const [arrivalDate, setArrivalDate] = useState<string>("");

  useEffect(() => {
    if (currentOrder?.arrivalTime) {
      const date = formatTime(currentOrder?.arrivalTime);
      setArrivalDate(date);
    }
  }, [currentOrder]);

  return (
    <div className="flex tablet:items-center flex-col tablet:flex-row justify-between font-bold space-y-4 mt-8 px-8">
      <div className="space-y-4">
        <p className="text-10 text-citiBlue-b200">{arrivalDate}</p>
        {currentOrder?.merchant?.storeName ? (
          <h1 className="text-16 tablet:text-24 text-citiSkyBlue-800">Merchant : {currentOrder?.merchant?.storeName}</h1>
        ) : (
          <h1 className="text-16 tablet:text-24 text-citiSkyBlue-800">No merchant</h1>
        )}
        {currentOrder?.orderId && <p className="text-10 text-citiSkyBlue-800">ORDER ID: {currentOrder?.orderId}</p>}
        {currentOrder?.orderStatus && (
          <div className="tablet:hidden">
            <div className="bg-citiRed-500 w-[9.875rem] text-10 text-citiRed-100 rounded-[36px] px-5 py-3 uppercase">{currentOrder?.orderStatus}</div>
          </div>
        )}
      </div>
      {currentOrder?.orderStatus && (
        <div className="hidden tablet:block">
          <div className="bg-citiRed-500 text-10 text-citiRed-100 rounded-[36px] px-5 py-3 uppercase">{currentOrder?.orderStatus}</div>
        </div>
      )}
    </div>
  );
};

export default OrderOverview;
