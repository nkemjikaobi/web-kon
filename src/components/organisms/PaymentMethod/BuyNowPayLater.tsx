import { useRouter } from "next/router";

import Icon from "@components/atoms/Icons";

import { OrderProps } from "@dto/Order/OrderProps";

import PaymentForm from "./PaymentForm";

const BuyNowPayLater = ({ orderData }: { orderData: OrderProps[] }) => {
  const router = useRouter();

  return (
    <>
      <div className="bg-citiBlue-70">
        <div className="smallLaptop:mb-10 smallLaptop:w-[719px] smallLaptop:m-auto bg-white pt-6">
          <div className="flex  px-5 pb-6">
            <div
              className="mt-3 mr-3 tablet:mr-6 cursor-pointer"
              onClick={() => {
                router.push(`/payment/${orderData[0].orderId}/payment-method`);
              }}
            >
              <Icon name="arrowLeft" />
            </div>
            <div>
              <Icon name="shoppingCartCircle" />
            </div>
            <h1 className=" ml-[10px] font-bold mt-3">Pay with Buy Now Pay Later</h1>
          </div>
          <hr />
          <div className="m-4">
            <div className="bg-citiGreen-50 p-4 rounded">
              <h1 className="font-bold text-citiGreen-150">Buy Now Pay Later</h1>
              <p className="text-citiGreen-150 w-[90%] mt-2">
                You are making payments with buy now pay later, fill in the form an agent will reach out to you shortly about your payment method
              </p>
            </div>
          </div>

          <PaymentForm totalAmount={Number(orderData[0].totalAmount)} />
        </div>
      </div>
    </>
  );
};

export default BuyNowPayLater;
