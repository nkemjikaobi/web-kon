import { OrderProps } from "@dto/Order/OrderProps";

import MerchantReserve from "./MerchantReserve";
import Selection from "./Selection";
import Summary from "./Summary";

interface ReservationPageProps {
  title?: string;
  loading?: boolean;
  orders: OrderProps[];
}

const SpaReserve = ({ title, loading, orders }: ReservationPageProps) => {
  const order = orders[0];

  return (
    <div className="smallLaptop:flex">
      <div className="smallLaptop:w-[1050px]">
        <MerchantReserve orders={order} />
        <Selection orders={order} />
        <div className="smallLaptop:hidden">
          <Summary orders={order} />
        </div>
      </div>
      <div className="min-w-[367px] hidden smallLaptop:block">
        <Summary orders={order} />
      </div>
    </div>
  );
};

export default SpaReserve;

SpaReserve.defaultProps = {
  title: "",
  loading: false,
};
