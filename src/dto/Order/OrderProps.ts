/* eslint-disable no-unused-vars */
import { CategoryProps, EntityProps, MerchantProps } from "@dto/Product/ProductProps";

export enum OrderStatusProps {
  PROCESSING = "processing",
  COMPLETED = "completed",
}

export interface OrderProps {
  _id?: string;
  customer?: string;
  entity: EntityProps;
  product: OrderProductProps;
  category: CategoryProps;
  merchant?: MerchantProps;
  orderStatus?: OrderStatusProps;
  bookingType?: string;
  bookingUser?: string;
  paymentPlanId?: string;
  paymentStatus?: string;
  paymentGatewayStatus?: string;
  arrivalTime?: string;
  timeRange?: string;
  depatureTime?: string;
  totalAmount?: number;
  totalAmountPaid?: string;
  depositedAmount?: Array<number>;
  numPerson?: string;
  status?: string;
  price?: number;
  serviceCharge?: number;
  orderId?: string;
  isApproved: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface OrderProductProps {
  _id?: string;
  name?: string;
  imageUrl?: string;
  description?: string;
}
