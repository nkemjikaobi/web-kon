import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import moment from "moment";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import StarRatings from "react-star-ratings";
import { AppState } from "src/store/rootReducer";

import CustomButton from "@components/atoms/CustomButton/CustomButton";

import { ButtonProperties, noImagePlaceholder } from "@shared/libs/helpers";

const Summary = ({ orders }: any) => {
  const { firstName, lastName, email, phoneNumber } = useSelector((state: AppState) => state.auth.user || {});
  const { orders: getOrder } = useSelector((state: AppState) => state.order || {});

  const [image, setImage] = useState("");

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

  useEffect(() => {
    setImage(orders?.product?.imageUrl[0]);
  }, [orders]);

  const SummaryDatas = [
    {
      title: "Number of Persons",
      info: orders?.numPerson,
    },
    {
      title: "Date",
      info: moment(orders?.arrivalTime).format("DD MMM YYYY"),
    },
    {
      title: "Time",
      info: moment(orders?.arrivalTime).format("hh:mma"),
    },
    {
      title: `${orders?.timeRange == null ? "" : "Duration"}`,
      info: `${orders?.timeRange == null ? "" : orders?.timeRange}`,
    },
    {
      price: [
        {
          title: `${orders?.price == null ? "" : "Price Per Person"}`,
          info: `${orders?.price == null ? "" : `$${orders?.price.toLocaleString()}`}`,
        },
        // {
        //   title: `${orders?.timeRange == null ? "" : `Price (${orders?.timeRange} hours)`}`,
        //   info: `${orders?.timeRange == null ? "" : costNoOfHours(orders?.numPerson, orders?.price).toLocaleString()}`,
        // },
        {
          title: `Price (${orders?.numPerson} persons)`,
          info: `$${orders?.totalAmount.toLocaleString()}`,
        },
        {
          title: "Service Charge",
          info: `$${orders?.serviceCharge == null ? 0 : orders?.serviceCharge}`,
        },
      ],
    },
  ];

  return (
    <div className="ml-0 tablet:ml-5 bg-white mt-4 tablet:mt-0 px-4 pb-9">
      <h1 className="font-bold tablet:text-16 text-14 pt-6 pb-5 text-citiBlue-250">SUMMARY</h1>
      <hr />
      <div className="flex mt-6">
        {<Image height={70} src={image || noImagePlaceholder} width={79} />}
        <div className="ml-2">
          <h1 className="font-bold text-14 tablet:text-16 capitalise">{orders?.product.name}</h1>
          <h2 className="text-citiBlue-150 text-14 tablet:text-16 mt-1">No location</h2>
          <div className="flex items-center mt-2">
            <div className="flex">
              <StarRatings numberOfStars={3} rating={0} starDimension="16px" starRatedColor="#FFAF33" starSpacing="0" />
            </div>
            <p className="ml-2 text-12 mt-1  text-citiBlue-400">0 Reviews</p>
          </div>
        </div>
      </div>
      <div className="mt-6">
        {SummaryDatas.map((data, index) => (
          <div key={index}>
            <div className={`flex justify-between text-14 tablet:text-16 mt-4 ${data.title === "" ? "hidden" : "block"}`}>
              <p>{data.title}</p>
              <p>{data.info}</p>
            </div>
            {data.price?.map((price, index) => (
              <div className={`flex font-bold justify-between text-16 mb-4 ${!price.title ? "hidden" : "block"}`} key={index}>
                <p>{price.title}</p>
                <p className="font-bold">{price.info}</p>
              </div>
            ))}
          </div>
        ))}
        <div className="flex justify-between text-20 tablet:text-24 text-citiBlue-400 mt-4 font-bold">
          <p>Total</p>
          <p>${orders?.totalAmount.toLocaleString()}</p>
        </div>
      </div>
      <div />
      <div className="tablet:hidden w-[95%] m-auto tablet:w-[50%] bg-citiBlue-200 mt-12 tablet:mt-28 rounded-md">
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

export default Summary;
