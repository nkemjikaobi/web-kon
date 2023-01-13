import { useQuery } from "@apollo/client";
import type { GetServerSideProps, NextPage } from "next";
import Error from "next/error";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "src/store/product";

import CustomBreadCrumb from "@components/atoms/CustomBreadCrumb/CustomBreadCrumb";
import { citiToast } from "@components/atoms/Toast";
import DashboardBaseLayout from "@components/layouts/dashboard/DashboardBaseLayout/DashboardBaseLayout";
import { MobileNav } from "@components/layouts/dashboard/Navigation/MobileNav";
import PopularMerchant from "@components/organisms/PopularMerchants/PopularMerchant";
import { ProductListing } from "@components/organisms/ProductListing/ProductListing";
import PopularCategory from "@components/organisms/RealEstate/PopularCategory";
import PopularVacations from "@components/organisms/Vacations/PopularVacations";

import { GET_CATEGORY_BY_ENTITY } from "@graphql/entities/queries";
import { GET_PRODUCTS_BY_ENTITY } from "@graphql/product/queries";

import { EntityMenuProps, ProductProps } from "@dto/Product/ProductProps";

import { NotificationTypes, Status } from "@shared/libs/helpers";
import { MenuProps } from "@shared/models";

import { CategoryPages } from "@modules/categoryPages";

interface EntityPageProps {
  entity: string;
}

const EntityPage: NextPage<EntityPageProps> = ({ entity }: EntityPageProps) => {
  const [products, setProducts] = useState<Array<ProductProps>>([]);
  const [menu, setMenu] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [errorState, setErrorState] = useState<string>("");

  const LIMIT = 10;

  const dispatch = useDispatch();

  const { data: categoryData, error: categoryError } = useQuery(GET_CATEGORY_BY_ENTITY, {
    variables: {
      urlKey: entity,
    },
  });

  const {
    data: productsData,
    error: productsError,
    loading: productsLoading,
  } = useQuery(GET_PRODUCTS_BY_ENTITY, {
    variables: {
      urlKey: entity,
      productFilterInput: {
        limit: LIMIT,
        page: currentPage,
      },
    },
  });

  const { status, message, data, meta } = productsData?.getProductsByEntity || {};

  const getBreadCrumbs = () => {
    let breadCrumb = [{ text: "Home", url: "/" }];

    if (entity) {
      breadCrumb = [...breadCrumb, { text: entity.replaceAll("-", " "), url: `/${entity}` }];
    }

    return breadCrumb;
  };

  const getMenuStructure = (): MenuProps[] => {
    return (menu || []).map((menu: EntityMenuProps) => ({
      id: menu._id,
      name: menu.name,
      route: `/${menu.entity.urlKey}/search?category=${menu.urlKey}`,
      urlKey: menu.urlKey,
    }));
  };

  const fetchMoreProducts = () => {
    setCurrentPage(currentPage + 1);
  };

  const menuData = {
    menu: getMenuStructure(),
    title: "CATEGORIES",
  };

  useEffect(() => {
    if (categoryData) {
      const { status, message, data } = categoryData.getCategoryByEntity;

      if (status === Status.SUCCESS) {
        setMenu(data);
      }
      if (status === Status.ERROR || status === Status.FAILED) {
        setErrorState(message);
      }
    }

    if (categoryError) {
      citiToast(NotificationTypes.ERROR, "Error fetching categories...");
    }
  }, [categoryData, categoryError]);

  useEffect(() => {
    if (productsData) {
      if (status === Status.SUCCESS) {
        const result: Array<ProductProps> = data;
        const newProducts = [...products, ...result];

        setProducts(newProducts);
      } else if (status === Status.ERROR || status === Status.FAILED) {
        setErrorState(message);
      }

      dispatch(setLoading(false));
    } else if (productsError) {
      dispatch(setLoading(false));
      citiToast(NotificationTypes.ERROR, "An error occurred...Make sure you are signed in");
    }
  }, [productsData, productsError, productsLoading]);

  return errorState ? (
    <Error statusCode={404} title={errorState} />
  ) : (
    <DashboardBaseLayout
      category={entity}
      customMobileMenu={(menuProp) => <MobileNav entity={entity} hasFilters={true} {...menuData} {...menuProp} />}
      showBreadCrumbs={false}
      title="Category Page"
    >
      <div className="hidden tablet:block mt-4 pl-0 bigLaptop:pl-[105px] television:pl-0 television:-ml-7">
        <CustomBreadCrumb breadCrumbs={getBreadCrumbs()} />
      </div>
      <div className="px-4 bigLaptop:px-32 py-5 smallLaptop:py-5 bg-citiBlue-70 flex flex-col television:items-center">
        <div className="max-w-[1440px]">
          <CategoryPages entity={entity} />
          {entity.includes("real-estate") ? <PopularCategory category={entity} /> : <PopularVacations category={entity} />}
          <ProductListing currentPage={currentPage} fetchMoreProducts={fetchMoreProducts} loading={productsLoading} meta={meta} products={products} />
          <PopularMerchant />
        </div>
      </div>
    </DashboardBaseLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query: { entity } }) => {
  return {
    props: {
      entity,
    },
  };
};

export default EntityPage;
