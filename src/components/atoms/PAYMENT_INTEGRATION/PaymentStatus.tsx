import moment from "moment";
import { useRouter } from "next/router";

import { OrderProps } from "@dto/Order/OrderProps";
import { PaymentProps } from "@dto/Payment/PaymentProps";

import { ButtonProperties, Status } from "@shared/libs/helpers";

import CustomButton from "../CustomButton/CustomButton";
import Icon from "../Icons";

interface PaymentStatusProps {
  trxVerificationData: PaymentProps;
  order: OrderProps;
}

const PaymentStatus = ({ trxVerificationData, order }: PaymentStatusProps) => {
  const route = useRouter();

  const arrivalDate = moment(order.arrivalTime).format("DD MMMM YYYY");
  const departureDate = moment(order.depatureTime).format("DD MMMM YYYY");

  const isPaymentSuccessful = trxVerificationData.status === Status.SUCCESS;

  const PaymentDetails = [
    { title: "Order", info: order.product.name },
    { title: "Visitors", info: order.numPerson },
    { title: "Scheduled Date and Time", info: `${arrivalDate}${order.depatureTime ? ` - ${departureDate}` : ""}` },
  ];

  const handleViewOrder = () => {
    if (isPaymentSuccessful) {
      route.push(`/account/orders/${order.orderId}`);
    } else {
      route.push(`/payment/${order.orderId}/payment-method`);
    }
  };

  return (
    <div className="tablet:w-[625px] pt-5 tablet:pt-12 bg-white tablet:m-auto mt-2">
      <div
        className={`bg-citiBlue-b50 w-[70px] h-[70px] tablet:w-[103px] tablet:h-[103px] m-auto rounded-full flex justify-center items-center ${
          !isPaymentSuccessful ? "bg-citiRed-100" : ""
        } `}
      >
        <Icon name={isPaymentSuccessful ? "blueTick" : "redCrossShield"} />
      </div>

      <div className="px-6">
        <h1 className="font-bold text-24 text-center mt-8 tablet:text-40">{isPaymentSuccessful ? "Payment Success" : "Payment Failed"}</h1>
        <p className="text-center text-14 mt-2 leading-5 tablet:text-16">
          Your payment of NGN {order.totalAmount?.toLocaleString()} for {order.entity.name?.toLowerCase()} services by {order?.merchant?.storeName} has been confirmed
        </p>
        <div className="flex justify-between mt-8 text-12 tablet:text-14">
          <p>Date</p>
          <p>{moment(trxVerificationData.createdAt).format("DD MMMM YYYY - hh:mma")}</p>
        </div>
        <p
          className={`p-4 bg-citiBlue-b50 rounded-md text-10 mt-4 font-bold tablet:text-14 text-center text-[#093851] ${
            !isPaymentSuccessful ? "bg-citiRed-100 text-citiRed-800 " : ""
          }`}
        >
          ORDER ID: {order.orderId}
        </p>
        <div className=" mt-6">
          <h1 className="text-citiBlue-400 text-12 font-bold tablet:text-10">PAYMENT DETAILS</h1>
          <div>
            <div>
              {PaymentDetails.map((data, index) => (
                <div className="flex justify-between mt-4 text-12 tablet:text-14" key={index}>
                  <p className="font-bold">{data.title}</p>
                  <p>{data.info}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 mb-14 tablet:w-[70%] tablet:m-auto tablet:mt-10 tablet:mb-14">
          <CustomButton
            customClass="text-12 !w-full font-bold bg-citiBlue-400"
            handleClick={handleViewOrder}
            size={ButtonProperties.SIZES.big}
            title={isPaymentSuccessful ? "VIEW ORDER" : "TRY AGAIN"}
            variant={ButtonProperties.VARIANT.secondary.name}
          />
          {!isPaymentSuccessful && (
            <CustomButton customClass="text-12 font-bold !w-full text-citiBlue-400 !bg-transparent border border-citiBlue-400 mt-4" handleClick={() => {}} title="GET HELP" />
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentStatus;

PaymentStatus.defaultProps = {
  isPaymentSuccessful: false,
};
