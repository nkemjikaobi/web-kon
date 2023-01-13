import { useLazyQuery, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";

import { citiToast } from "@components/atoms/Toast";
import ServicesSearchComponent from "@components/organisms/DashboardLandingPage/ServicesSearchComponent";
import { IServiceSubMenu } from "@components/organisms/DashboardLandingPage/ServicesSubMenu";
import Filters from "@components/organisms/SearchPage/Filters/Filters";
import { SearchListing } from "@components/organisms/SearchPage/SearchListing/SearchListing";

import { GET_CATEGORY_BY_ENTITY } from "@graphql/entities/queries";
import { GET_PRODUCTS_BY_CATEGORY } from "@graphql/product/queries";

import { ProductProps } from "@dto/Product/ProductProps";

import { NotificationTypes, Status } from "@shared/libs/helpers";

import MoreDetailsOfProductSkeleton from "@skeletons/MoreDetailsOfProductSkeleton";
import OfferedBySkeleton from "@skeletons/OfferedBySkeleton";
import ProductImageAndVariantsSkeleton from "@skeletons/ProductImageAndVariantsSkeleton";

interface SearchPagesProps {
  entity: string;
}

export const SearchPages: FC<SearchPagesProps> = ({ entity }: SearchPagesProps) => {
  const router: any = useRouter();

  const [menu, setMenu] = useState<Array<IServiceSubMenu> | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [products, setProducts] = useState<Array<ProductProps>>([]);

  const LIMIT = 10;

  const {
    data: categoryData,
    error: categoryError,
    loading: categoryLoading,
  } = useQuery(GET_CATEGORY_BY_ENTITY, {
    variables: { urlKey: entity },
  });

  const [getProductsByCategory, { data: requeryData, loading: requeryLoader, error: requeryError }] = useLazyQuery(GET_PRODUCTS_BY_CATEGORY);

  const { status, message, data, meta } = requeryData?.getProductsByCategory || {};

  const { category } = router?.query || {};

  const getFilterValues = () => {
    const filterValues = { ...router?.query };

    Object.entries(filterValues).forEach(([key, value]) => {
      if (!value) delete filterValues[key];
    });

    delete filterValues.entity;
    delete filterValues.category;

    return filterValues;
  };

  const fetchMoreProducts = () => {
    setCurrentPage(currentPage + 1);
  };

  const getProductsByPage = (page: number) => {
    getProductsByCategory({
      variables: {
        urlKey: category,
        productFilterInput: { ...getFilterValues(), page, limit: LIMIT },
      },
    });
  };

  useEffect(() => {
    if (categoryData) {
      const { status, message, data } = categoryData.getCategoryByEntity;

      if (status === Status.SUCCESS) {
        setMenu(data);
      }
      if (status === Status.FAILED) {
        citiToast(NotificationTypes.ERROR, message);
      }
    }

    if (categoryError) {
      citiToast(NotificationTypes.ERROR, "Error fetching categories...");
    }
  }, [categoryData, categoryError]);

  useEffect(() => {
    if (requeryData) {
      if (status === Status.SUCCESS) {
        const result: ProductProps[] = data;
        let newProducts: ProductProps[] = [];

        if (currentPage === 1) {
          newProducts = [...result];
        } else if (currentPage > 1) {
          newProducts = [...products, ...result];
        }

        setProducts(newProducts);
      } else if (status === Status.FAILED) {
        citiToast(NotificationTypes.ERROR, message);
      }
    } else if (requeryError) {
      // citiToast(NotificationTypes.ERROR, "An error occurred...Make sure you are signed in");
    }
  }, [requeryData, requeryError, requeryLoader]);

  useEffect(() => {
    if (currentPage === 1) getProductsByPage(1);
    else if (currentPage > 1) setCurrentPage(1);
  }, [router.query]);

  useEffect(() => getProductsByPage(currentPage), [currentPage]);

  return false ? (
    <div className="">
      <h2 className="animate-pulse bg-gray-300 w-48 my-8 pt-[1.438rem] ml-[1rem] smallLaptop:ml-0" />
      <div className="flex flex-col smallLaptop:flex-row">
        <div className="smallLaptop:w-[70%] smallLaptop:pb-[2.813rem] pb-[0.375rem] ">
          <ProductImageAndVariantsSkeleton />
          <MoreDetailsOfProductSkeleton />
        </div>
        <div className="px-4 py-6 smallLaptop:w-[30%] smallLaptop:mr-[0.438rem] smallLaptop:ml-[1.5rem] h-[80%] mb-[0.438rem] smallLaptop:mb-0">
          <OfferedBySkeleton />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex mt-4 mb-[8.938rem]">
      <div className="hidden smallLaptop:block mr-4 bg-white w-[17.125rem] h-full">
        <Filters activeCategory={router.query.category} menu={menu} />
      </div>
      <div className="w-full smallLaptop:w-[65.875rem] television:w-full">
        <ServicesSearchComponent categoryList={menu} entity={entity} />
        <SearchListing
          currentPage={currentPage}
          fetchMoreProducts={fetchMoreProducts}
          loading={requeryLoader || categoryLoading}
          meta={meta}
          products={products}
          title={router.query.location || menu?.find((data) => data.urlKey === router.query.category)?.name}
        />
      </div>
    </div>
  );
};
