import Order from "@components/molecules/Order";

import { OrderProps } from "@dto/Product/ProductProps";

interface OrderListingProps {
  orderListing: OrderProps[];
}

const OrderListings = ({ orderListing }: OrderListingProps) => (
  <>
    {orderListing.map((order, index) => (
      <Order key={index} {...order} />
    ))}
  </>
);

export default OrderListings;
