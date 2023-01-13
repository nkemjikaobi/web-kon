import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "src/store/rootReducer";

import Icon from "@components/atoms/Icons";

import { useWindowSize } from "@hooks/useWindowSize";

import { formatTime, truncateText } from "@shared/libs/helpers";

const BookingDetails = () => {
  const { currentOrder } = useSelector((state: AppState) => state.order);

  const [width] = useWindowSize();

  const textDescriptionLimit = width > 768 ? 140 : 100;

  const [arrivalDate, setArrivalDate] = useState<string>("");

  useEffect(() => {
    if (currentOrder?.arrivalTime) {
      const date = formatTime(currentOrder?.arrivalTime);
      setArrivalDate(date);
    }
  }, [currentOrder]);

  const BookingDetailsData = [
    {
      id: 1,
      name: currentOrder?.numPerson ? `${currentOrder?.numPerson} Guests` : "No guests",
      icon: "users",
    },
    {
      id: 2,
      name: arrivalDate ? `${arrivalDate}` : "No date specified",
      icon: "calendar",
    },
    {
      id: 3,
      name: currentOrder?.timeRange ? `${currentOrder?.timeRange}` : "Duration not specified",
      icon: "clock",
    },
  ];

  return (
    <div className="mt-12">
      <div className="bg-citiGray-100 pl-8 smallLaptop:pl-12 py-4 h-[2.75rem]">
        <h4 className="uppercase text-14 font-bold text-[#105F89]"> booking details</h4>
      </div>
      <div className="mt-8 flex pl-8 smallLaptop:pl-12 -ml-8">
        {currentOrder?.product?.imageUrl && (
          <div className="shrink-0 grow-0 basis-auto pl-4">
            <Image height={133} src={currentOrder?.product?.imageUrl[0]} width={151} />
          </div>
        )}

        <div className="w-[70%] ml-6">
          {currentOrder?.product?.name && <h2 className="text-16 tablet:text-24 font-normal mb-4">{currentOrder?.product?.name}</h2>}
          {currentOrder?.product?.description && (
            <p className="text-12 tablet:text-16 font-normal text-citiDarkText">{truncateText(currentOrder?.product?.description, textDescriptionLimit)}</p>
          )}
        </div>
      </div>
      <div className="flex smallLaptop:items-center flex-col smallLaptop:flex-row mt-8 pl-8 smallLaptop:pl-12 -ml-8 space-y-4 smallLaptop:space-y-0">
        {BookingDetailsData.map((booking) => (
          <div className="flex items-center mr-4 ml-4" key={booking.id}>
            <Icon className="mr-2 w-6" name={booking.icon} />
            <p className="text-12 tablet:text-16 font-normal text-citiBlue-700 whitespace-nowrap">{booking.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingDetails;
