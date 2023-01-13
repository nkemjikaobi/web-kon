import React, { FC } from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import { EntityMenu } from "@components/organisms/EntityMenu";
import OrderDetail from "@components/organisms/OrderDetailPage/OrderDetail/OrderDetail";

import { ButtonProperties } from "@shared/libs/helpers";
import { MenuProps } from "@shared/models";

import { OrderDetailsSkeleton } from "@skeletons/OrderDetailsSkeleton";
import ServicesSubMenuSkeleton from "@skeletons/ServicesSubMenuSkeleton";

interface OrderDetailPagesProps {
  orderLoading?: boolean;
  menu: MenuProps[];
}
export const OrderDetailsPages: FC<OrderDetailPagesProps> = ({ menu, orderLoading }) => {
  const menuData = {
    menu,
    title: "MY ACTIVITY",
  };

  const handleComplain = () => {
    // todo
  };
  return (
    <div>
      <div className="tablet:flex tablet:flex-col smallLaptop:flex-row">
        {orderLoading ? (
          <div className="hidden smallLaptop:block">
            <ServicesSubMenuSkeleton />
          </div>
        ) : (
          <EntityMenu menu={menuData.menu} title={menuData.title} />
        )}

        <div className="bg-white ml-[1rem] py-6 smallLaptop:w-[68.313rem]">{orderLoading ? <OrderDetailsSkeleton /> : <OrderDetail />}</div>
      </div>
      <div className="flex items-center justify-center mt-12 mb-8 bigLaptop:ml-[20%] television:ml-[8%]">
        <CustomButton
          customClass=""
          handleClick={handleComplain}
          isTransparent={true}
          size={ButtonProperties.SIZES.small}
          title="Have a Complain"
          variant={ButtonProperties.VARIANT.secondary.name}
        />
      </div>
    </div>
  );
};

OrderDetailsPages.defaultProps = {
  orderLoading: false,
};
