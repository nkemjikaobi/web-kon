import React, { useState } from "react";

import ReservationDetails from "../ReservationDetails/ReservationDetails";
import TermsAndCondition from "../TermsAndCondition/TermsAndCondition";

interface ReservationInfoProps {
  setShowReservationForm: Function;
}

export interface Values {
  customerId: string;
  catalogProductEntityId: string;
  catalogProductCategoryId: string;
  numPerson: string;
  arrivalTime: string;
  timeRange: string;
}

const ReservationInfo: React.FC<ReservationInfoProps> = ({ setShowReservationForm }) => {
  const [termsAndCondition, setShowTermsAndCondition] = useState<boolean>(false);
  const [bookingDetails, setBookingDetails] = useState(null);

  return (
    <div className="smallLaptop:px-6 pt-6 bg-[#FAFDFF] rounded-md text-black">
      {!termsAndCondition ? (
        <ReservationDetails setBookingDetails={setBookingDetails} setShowReservationForm={setShowReservationForm} setShowTermsAndCondition={setShowTermsAndCondition} />
      ) : (
        <TermsAndCondition bookingDetails={bookingDetails} setShowReservationForm={setShowReservationForm} />
      )}
    </div>
  );
};

export default ReservationInfo;
