import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import moment from "moment";
import { useSelector } from "react-redux";
import { AppState } from "src/store/rootReducer";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomLink from "@components/atoms/CustomLink/CustomLink";

import { ButtonProperties } from "@shared/libs/helpers";

const Selection = ({ orders }: any) => {
  const { firstName, lastName, email, phoneNumber } = useSelector((state: AppState) => state.auth.user || {});
  const { orders: getOrder } = useSelector((state: AppState) => state.order || {});

  const FlutterwaveConfig = {
    public_key: "FLWPUBK-36e129ec63e423f421574420b63528de-X",
    tx_ref: "1",
    amount: getOrder[0]?.totalAmount ? getOrder[0]?.totalAmount : 0,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: `${email}`,
      phone_number: `${phoneNumber}`,
      name: `${firstName} ${lastName}`,
    },
    customizations: {
      title: "Citisquare Payment",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(FlutterwaveConfig);

  const SelectionData = [
    {
      title: "DATE",
      info: moment(orders?.arrivalTime).format("DD MMM YYYY"),
    },
    {
      title: `${orders?.timeRange == null ? "" : "Duration"}`,
      info: `${orders?.timeRange == null ? "" : orders?.timeRange}`,
    },
    {
      title: "TIME",
      info: moment(orders?.arrivalTime).format("hh:mma"),
    },
    {
      title: "NUMBER OF PERSONS",
      info: `${orders?.numPerson} people`,
    },
    {
      title: "GENDER",
      info: "Mixed",
    },
  ];

  return (
    <div className="hidden tablet:block px-4 pt-8 bg-white mt-4 tablet:mt-6 pb-9 tablet:pb-24">
      <div className="flex justify-between mb-6">
        <h1 className="font-bold text-citiBlue-250 text-14 tablet:text-16">YOUR SELECTION</h1>
        <CustomLink customClass="text-citiBlue-400 font-bold text-14 tablet:text-16" destination="#">
          MODIFY
        </CustomLink>
      </div>
      <hr />
      <div className="text-12 tablet:text-16 mt-4 tablet:mt-8 tablet:flex">
        {SelectionData.map((data, index) => (
          <div className={`tablet:pr-16 mt-4 tablet:mt-0 ${data.title === "" ? "hidden" : "block"}`} key={index}>
            <p className="font-bold">{data.title}</p>
            <p>{data.info}</p>
          </div>
        ))}
      </div>
      <div className="w-[70%] m-auto tablet:w-[50%] bg-citiBlue-200 mt-12 tablet:mt-28 rounded-md">
        <CustomButton
          customClass="text-12 font-bold !w-full rounded-md "
          handleClick={() => {
            handleFlutterPayment({
              callback: (response) => {
                console.log(response);
                closePaymentModal();
              },
              onClose: () => {},
            });
          }}
          isDisabled={false}
          isSubmitting={false}
          size={ButtonProperties.SIZES.small}
          title="PROCEED TO PAYMENT"
          type="submit"
          variant={ButtonProperties.VARIANT.secondary.name}
        />
      </div>
    </div>
  );
};

export default Selection;
