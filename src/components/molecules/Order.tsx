import moment from "moment";
import Image from "next/image";
import Link from "next/link";

import Icon from "@components/atoms/Icons";
import { StatusBadge } from "@components/atoms/StatusBadge";

import { OrderProps } from "@dto/Product/ProductProps";

import { noImagePlaceholder } from "@shared/libs/helpers";

const Order = ({ product, arrivalTime, orderId, orderStatus, numPerson, timeRange, createdAt }: OrderProps) => (
  <>
    <div className="hidden tablet:flex justify-between items-center border-b border-citiBlue-b40 p-6 font-nunitoSans">
      <div className="flex">
        <div className="w-[151px] h-full">
          {product.imageUrl && product?.imageUrl?.length > 0 ? (
            <Image className="object-cover rounded-sm" height={133} src={product?.imageUrl[0]} width={151} />
          ) : (
            <Image className="object-cover rounded-sm" height={133} src={noImagePlaceholder} width={151} />
          )}
        </div>
        <div className="ml-4">
          <span className="block text-10 font-bold font-nunitoSans capitalize text-citiBlue-b200">{moment(createdAt).format("DD-MM-YYYY h:mma")}</span>
          <div className="flex items-center my-1">
            <span className="font-nunitoSans text-20 text-black mr-2">{product.name}</span>
            <StatusBadge status={orderStatus} success={orderStatus.toLowerCase().includes("complete")} />
          </div>
          <span className="text-citiBlue-b200 text-10 font-bold">ORDER ID: {orderId}</span>
          <div>
            <span className="block capitalize text-citiBlue-900 my-2">Booking details</span>
            <div className="flex">
              {numPerson && (
                <span className="flex items-center mr-4">
                  <Icon name="persons" />
                  <span className="block ml-2 text-16 text-citiBlue-b600">{numPerson} Guests</span>
                </span>
              )}
              {arrivalTime && (
                <span className="flex items-center mr-4">
                  <Icon name="calendar2" />
                  <span className="block ml-2 text-16 text-citiBlue-b600">{moment(arrivalTime).format("DD-MM-YYYY h:mma")}</span>
                </span>
              )}
              {timeRange && (
                <span className="flex items-center mr-4">
                  <Icon name="clock" />
                  <span className="block ml-2 text-16 text-citiBlue-b600">{timeRange}</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <Link href={`/account/orders/${orderId}`}>
        <div className="capitalize mr-10 text-12 font-bold font-nunitoSans text-citiBlue-400 cursor-pointer">view Details</div>
      </Link>
    </div>

    <div className="flex-col tablet:hidden items-center border-b border-citiBlue-b40 mx-4 py-4 tablet:p-6 font-nunitoSans">
      <div className="flex mb-4">
        {product.imageUrl && product.imageUrl?.length > 0 ? (
          <Image className="object-cover rounded-sm" height={106} layout="fixed" src={product.imageUrl[0]} width={120} />
        ) : (
          <Image className="object-cover rounded-sm" height={106} layout="fixed" src={noImagePlaceholder} width={120} />
        )}
        <div className="ml-4">
          <span className="block text-[8px] font-bold font-nunitoSans capitalize text-citiBlue-b200">{moment(createdAt).format("DD-MM-YYYY h:mma")}</span>
          <span className="block font-nunitoSans text-14 font-semibold text-black my-2">{product.name}</span>
          <span className="block text-citiBlue-b200 text-[8px] font-normal mb-3">
            ORDER ID: <br /> {orderId}
          </span>
          <StatusBadge status={orderStatus} success={orderStatus.toLowerCase().includes("complete")} />
        </div>
      </div>
      <div>
        <span className="block capitalize text-14 font-bold text-citiBlue-900 mb-2">Booking details</span>
        <div className="flex-col">
          {numPerson && (
            <span className="flex items-center mr-3 mb-3">
              <Icon name="persons" />
              <span className="block ml-2 text-12 text-citiBlue-b600">{numPerson} Guests</span>
            </span>
          )}
          {arrivalTime && (
            <span className="flex items-center mr-3 mb-3">
              <Icon name="calendar2" />
              <span className="block ml-2 text-12 text-citiBlue-b600">{moment(arrivalTime).format("DD-MM-YYYY h:mma")}</span>
            </span>
          )}
          {timeRange && (
            <span className="flex items-center mr-3 mb-3">
              <Icon name="clock" />
              <span className="block ml-2 text-12 text-citiBlue-b600">{timeRange}</span>
            </span>
          )}
        </div>
      </div>
      <Link href={`/account/orders/${orderId}`}>
        <div className="capitalize mr-10 text-12 font-bold font-nunitoSans text-citiBlue-400 cursor-pointer">view Details</div>
      </Link>
    </div>
  </>
);

export default Order;
