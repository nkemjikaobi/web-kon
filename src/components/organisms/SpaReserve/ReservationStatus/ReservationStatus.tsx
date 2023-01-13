import moment from "moment";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { AppState } from "src/store/rootReducer";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import Icon from "@components/atoms/Icons";

import { OrderProps } from "@dto/Order/OrderProps";

import { ButtonProperties } from "@shared/libs/helpers";

interface ReservationStatusProps {
  title?: string;
  orders: OrderProps[];
}

const ReservationStatus = ({ orders, title }: ReservationStatusProps) => {
  const { firstName, lastName, email, phoneNumber } = useSelector((state: AppState) => state.auth.user || {});

  const router = useRouter();

  const order = orders[0];

  // const confirmed = order?.orderStatus === OrderStatusProps.COMPLETED;
  const confirmed = order?.isApproved;

  const ReservationDetails = [
    {
      ReserveDetails: [
        {
          title: `${order?.product.name == null ? "" : "PRODUCT NAME"}`,
          info: `${order?.product.name == null ? "" : order?.product.name}`,
        },
        {
          title: `${order?.numPerson == null ? "" : "NUMBER OF GUEST"}`,
          info: `${order?.numPerson == null ? "" : `${order?.numPerson} Guests`}`,
        },
        {
          title: `${order?.arrivalTime == null ? "" : "VACATION DATE"}`,
          info: `${order?.arrivalTime == null ? "" : moment(order?.arrivalTime).format("DD, MMMM YYYY")}`,
        },
        {
          title: `${order?.depatureTime == null ? "" : "END DATE"}`,
          info: `${order?.depatureTime == null ? "" : moment(order?.depatureTime).format("DD, MMMM YYYY")}`,
        },
        {
          title: `${order?.timeRange == null ? "" : "NUMBER OF DAYS"}`,
          info: `${order?.timeRange == null ? "" : `${order?.timeRange} OF DAYS`}`,
        },
        {
          title: `${order?.totalAmount == null ? "" : "AMOUNT"}`,
          info: `${order?.totalAmount == null ? "" : `NGN ${order?.totalAmount?.toLocaleString()}`}`,
        },
      ],
    },
    {
      PersonalDetails: [
        {
          title: "FULL NAME ",
          info: `${firstName} ${lastName}`,
        },
        {
          title: "EMAIL ADDRESS ",
          info: email,
        },
        {
          title: "PHONE NUMBER",
          info: phoneNumber,
        },
      ],
    },
  ];

  return (
    <>
      <div className="bg-[#EFF7FB] flex justify-center items-center pb-4">
        <div className="mt-6 smallLaptop:w-[802px] m-auto">
          <div>
            <div className={`flex bg-[#FFF5E6] p-[18px] ${confirmed === true ? "!bg-citiGreen-50" : ""} `}>
              <div className="bg-white p-[18px] smallLaptop:p-[30px] rounded-lg flex justify-center items-center">
                {confirmed == true ? <Icon name="confirmCheck" /> : <Icon name="danger" />}
              </div>
              <div className="pl-4 mt-1">
                <h1 className={`text-12 smallLaptop:text-16 text-[#6B4100] font-bold ${confirmed === true ? "!text-citiGreen-150" : ""}`}>
                  {confirmed == true ? "Your reservation has been confirmed" : "Watch out for your reservation confirmation"}
                </h1>
                <p className={`text-12 mt-1 smallLaptop:pr-20 smallLaptop:text-16 text-[#8E8372] ${confirmed === true ? "!text-citiGreen-250" : ""} `}>
                  {confirmed == true ? "Your Reservation has been confirmed please proceed to payment" : "Thank you for making a reservation, we will get back to you shortly."}
                </p>
              </div>
            </div>

            <div className="pl-4 bg-white pb-10 smallLaptop:pb-24">
              <div className="pt-12">
                <h1 className="font-bold">Reservation Details</h1>
                {ReservationDetails.map((data, index) => (
                  <div className="flex flex-wrap mt-2" key={index}>
                    {data.ReserveDetails?.map((data, index) => (
                      <div className={`mr-[80px] mb-[34px]  ${!data.title ? "hidden" : "block"}`} key={index}>
                        <h1 className="text-citiGray-500 text-10 font-bold">{data.title}</h1>
                        <p className="text-12 font-bold">{data.info}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <h1 className="font-bold">Personal Details</h1>
              {ReservationDetails.map((data, index) => (
                <div className="flex  flex-wrap mt-2" key={index}>
                  {data.PersonalDetails?.map((data, index) => (
                    <div className="mr-[80px]  mb-[34px]" key={index}>
                      <h1 className="text-citiGray-500 text-10 ">{data.title}</h1>
                      <p className="text-12 font-bold">{data.info}</p>
                    </div>
                  ))}
                </div>
              ))}
              {confirmed === true && (
                <div className="flex justify-center pt-16">
                  <CustomButton
                    customClass="smallLaptop:w-[427px] font-bold"
                    handleClick={() => router.push(`/payment/${order.orderId}/payment-method`)}
                    isDisabled={false}
                    isSubmitting={false}
                    size={ButtonProperties.SIZES.small}
                    title={`NGN ${order?.totalAmount?.toLocaleString()}`}
                    variant={ButtonProperties.VARIANT.secondary.name}
                  />
                </div>
              )}
            </div>
            {!confirmed && (
              <div className="flex justify-center pt-16">
                <CustomButton
                  customClass="smallLaptop:w-[427px] text-14"
                  handleClick={() => {
                    router.push(`/${order.entity.urlKey}`);
                  }}
                  size={ButtonProperties.SIZES.small}
                  title={"Continue Browsing"}
                  variant={ButtonProperties.VARIANT.secondary.name}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservationStatus;

ReservationStatus.defaultProps = {
  title: "",
};
