import { useQuery, useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { CustomDropdownProps } from "@components/atoms/CustomDropdown";
import CustomPagination from "@components/atoms/CustomPagination";
import { EmptyState } from "@components/molecules/EmptyState";
import { EntityMenu } from "@components/organisms/EntityMenu";
import OrderListings from "@components/organisms/OrderListings";

import { GET_CUSTOMER_ORDERS } from "@graphql/order/queries";
import { GET_PRODUCT_ENTITIES } from "@graphql/product/queries";

import { MenuProps } from "@shared/models";

import { MyOrdersPageSkeleton } from "@skeletons/MyOrdersPageSkeleton";
import ServicesSubMenuSkeleton from "@skeletons/ServicesSubMenuSkeleton";

interface MyOrdersProps {
  menu: MenuProps[];
  title: string;
}

export const MyOrders = ({ menu, title }: MyOrdersProps) => {
  const router = useRouter();

  const { data: entityQueryData, loading: loadingEntity } = useQuery(GET_PRODUCT_ENTITIES);
  const [getOrders, { data: orderQueryData, loading: loadingOrders }] = useLazyQuery(GET_CUSTOMER_ORDERS);

  const { entity, status, page } = router?.query || {};
  const { data: entityData } = entityQueryData?.getProductEntities || {};
  const { data: orderListing, meta } = orderQueryData?.getCustomerOrdersByEntity || {};

  const handlePageChange = (page: number) => {
    if (status) {
      router.push({
        pathname: "/account/orders",
        query: { entity, status, page },
      });
    } else {
      router.push({
        pathname: "/account/orders",
        query: { entity, page },
      });
    }
  };

  const handleFilterOrder = (filterValue: string) => {
    if (filterValue) {
      router.push({
        pathname: "/account/orders",
        query: { entity, status: filterValue, page: 1 },
      });
    } else {
      router.push({
        pathname: "/account/orders",
        query: { entity, page: 1 },
      });
    }
  };

  useEffect(() => {
    if (!entity && entityData && entityData.length > 0) {
      const newEntity = `${entityData[0].urlKey}`;

      router.push({
        pathname: "/account/orders",
        query: { entity: newEntity, page: 1 },
      });

      getOrders({
        variables: {
          getCustomerOrdersFilterInput: {
            urlKey: newEntity,
            page: 1,
          },
        },
      });
    } else if (entity) {
      let queryValues: Record<string, string | number> = { urlKey: entity as string };

      if (status) queryValues = { ...queryValues, orderStatus: status as string };
      if (page) queryValues = { ...queryValues, page: Number(page) };

      getOrders({
        variables: {
          getCustomerOrdersFilterInput: queryValues,
        },
      });
    }
  }, [entityData, entity, status, page]);

  return (
    <div className="flex justify-between w-full">
      {loadingEntity ? (
        <div className="hidden smallLaptop:block">
          <ServicesSubMenuSkeleton />
        </div>
      ) : (
        <EntityMenu menu={menu} selectedItem={(entity as string) || ""} title={title} />
      )}

      <div className="bg-white w-full smallLaptop:w-[78%]">
        {loadingOrders || loadingEntity ? (
          <MyOrdersPageSkeleton />
        ) : (
          <>
            <div className="flex justify-between items-center px-4 tablet:px-6 py-4 border-b border-citiBlue-b40">
              <div>
                <span className="block text-14 tablet:text-16 font-nunitoSans text-[#07354D] pb-1">My Orders</span>
                <span className="block text-citiBlue-b100 text-12 tablet:text-14 font-nunitoSans">{meta?.total || 0} orders</span>
              </div>
              <div className="flex items-center font-nunitoSans">
                <span className="text-12 tablet:text-16 font-bold">Filter:&nbsp;</span>
                <CustomDropdownProps
                  asSelect={true}
                  onSelect={handleFilterOrder}
                  options={filterOptions}
                  showSelectedCheckMark={true}
                  title="Filter options"
                  value={(status as string) || ""}
                />
              </div>
            </div>

            <OrderListings orderListing={orderListing || []} />
            {!loadingOrders && !loadingEntity && !Boolean(orderListing?.length) && (
              <div className="my-16">
                <EmptyState icon="bagCross" title={`No order for ${((entity as string) || "").replaceAll("-", " ")}`} />
              </div>
            )}
          </>
        )}
        {meta && Boolean(meta.pages) && (
          <div className="flex justify-center tablet:mt-12 mb-5">
            <CustomPagination forcePage={Number(page) || 1} onChange={handlePageChange} pageCount={meta.pages} />
          </div>
        )}
      </div>
    </div>
  );
};

const filterOptions = [
  { label: "Show All", value: "" },
  { label: "Processing", value: "processing" },
  { label: "Completed", value: "completed" },
];
