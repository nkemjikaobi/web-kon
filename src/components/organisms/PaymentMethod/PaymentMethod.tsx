import { useMutation } from "@apollo/client";
// import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { ImSpinner } from "react-icons/im";

import CustomModal from "@components/atoms/CustomModal/CustomModal";
import Icon from "@components/atoms/Icons";
import { citiToast } from "@components/atoms/Toast";

import { INITIATE_FLUTTERWAVE_PAYMENT } from "@graphql/payment/query";

import { OrderProps } from "@dto/Order/OrderProps";

import { ENTITIES, NotificationTypes, externalDocs } from "@shared/libs/helpers";

const PaymentMethod = ({ orderData }: { orderData: OrderProps[] }) => {
  const [initiatePayment, { data: flutterWaveData, loading: initiatingPayment }] = useMutation(INITIATE_FLUTTERWAVE_PAYMENT, {
    variables: {
      orderId: orderData[0].orderId,
    },
  });

  const data: {
    data: { link: string };
    status: NotificationTypes;
    message: string;
  } = flutterWaveData?.initializeTransaction?.data || {};

  const handlePayment = () => {
    initiatePayment();
  };

  if (data?.status === NotificationTypes.SUCCESS) {
    window.location.replace(data.data.link);
  }

  if (data?.status === NotificationTypes.ERROR) {
    citiToast(NotificationTypes.ERROR, data.message || "Failed to initiate payment. Please try again.");
  }

  const handleRedirect = () => {
    if (orderData[0].entity.urlKey === ENTITIES.REAL_ESTATE) {
      return externalDocs.MORTGAGE;
    }
    return externalDocs.BNPL;
  };

  return (
    <>
      <div className="w-full tablet:w-[719px] h-[600px] tablet:m-auto bg-white">
        <div className="flex p-6">
          <div className="mt-2">
            <Icon name="creditCard" />
          </div>
          <h1 className="text-citiBlue-400 ml-[10px] text-20 mt-1 tablet:text-24 tablet:mt-0 font-bold">Make Payment</h1>
        </div>
        <div className="mt-5 smallLaptop:mt-12">
          <div className="flex justify-between p-4 tablet:p-6 cursor-pointer" onClick={handlePayment}>
            <div className="flex">
              <Icon name="flutterWaveLogo" />
              <p className="font-bold ml-4 mt-3">Pay with Flutterwave</p>
            </div>
            <div className="mt-3">
              <Icon name="arrowRight" />
            </div>
          </div>
          <hr />
          <a href={handleRedirect()} rel="noreferrer" target="_blank">
            <div className="flex justify-between p-4 tablet:p-6 cursor-pointer">
              <div className="flex">
                <Icon name="shoppingCartCircle" />
                <p className="font-bold ml-4 mt-3">Pay with buy now pay later</p>
              </div>
              <div className="mt-3">
                <Icon name="arrowRight" />
              </div>
            </div>
          </a>
          <hr />
        </div>
      </div>
      <CustomModal visibility={initiatingPayment}>
        <div className="w-full grid place-items-center">
          <ImSpinner className="animate-spin" size={100} />
        </div>
      </CustomModal>
    </>
  );
};

export default PaymentMethod;
