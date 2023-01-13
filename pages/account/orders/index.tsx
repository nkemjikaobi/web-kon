import { useQuery } from "@apollo/client";
import type { NextPage } from "next";

import DashboardBaseLayout from "@components/layouts/dashboard/DashboardBaseLayout/DashboardBaseLayout";
import { MobileNav } from "@components/layouts/dashboard/Navigation/MobileNav";

import { GET_PRODUCT_ENTITIES } from "@graphql/product/queries";

import { EntityProps } from "@dto/Product/ProductProps";

import { getEntityIconWithUrlKey } from "@shared/libs/helpers";
import { MenuProps } from "@shared/models";

import { MyOrders } from "@modules/ordersPages";

const MyOrdersPage: NextPage = () => {
  const { data: entityData } = useQuery(GET_PRODUCT_ENTITIES);

  const { data } = entityData?.getProductEntities || {};

  const getMenuStructure = (): MenuProps[] => {
    return (data || []).map((entity: EntityProps) => ({
      id: entity._id,
      icon: getEntityIconWithUrlKey(entity?.urlKey || ""),
      name: entity.name,
      route: `?entity=${entity.urlKey}`,
      urlKey: entity.urlKey,
    }));
  };

  const menuData = {
    menu: getMenuStructure(),
    title: "MY ACTIVITY",
  };

  return (
    <DashboardBaseLayout customMobileMenu={(menuProps) => <MobileNav {...menuProps} {...menuData} />} showBreadCrumbs={false} title="My orders Page">
      <div className="min-h-[calc(100vh-95px)] tablet:px-4 bigLaptop:px-7 py-5 smallLaptop:py-5 bg-[#EFF7FB] flex flex-col television:items-center">
        <MyOrders {...menuData} />
      </div>
    </DashboardBaseLayout>
  );
};

export default MyOrdersPage;
