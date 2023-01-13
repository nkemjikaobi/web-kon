import React, { useState } from "react";

import DescriptionEtAl from "./DescriptionEtAl";
import Reservations from "./Reservations";

const MoreDetailsOfProduct = () => {
  const [showReservationForm, setShowReservationForm] = useState<boolean>(false);

  return (
    <>
      <div className="mt-4 flex flex-col bigLaptop:flex-row bg-white p-4 bigLaptop:p-8 bigLaptop:mt-12 justify-between rounded-lg">
        <div className="w-[21.188rem] bg-[#FAFDFF] bigLaptop:h-[24.375rem]  bigLaptop:hidden">
          <Reservations setShowReservationForm={setShowReservationForm} />
        </div>
        <div className="text-citiDarkText bigLaptop:w-full">
          <DescriptionEtAl setShowReservationForm={setShowReservationForm} showReservationForm={showReservationForm} />
        </div>
      </div>
    </>
  );
};

export default MoreDetailsOfProduct;
