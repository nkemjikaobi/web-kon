import { useLazyQuery, useQuery } from "@apollo/client";
import { GetServerSideProps, NextPage } from "next";
import Error from "next/error";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentProduct, setLoading } from "src/store/product";
import { AppState } from "src/store/rootReducer";

import { BreadCrumbProps } from "@components/atoms/CustomBreadCrumb/BreadCrumbProps";
import { citiToast } from "@components/atoms/Toast";
import DashboardBaseLayout from "@components/layouts/dashboard/DashboardBaseLayout/DashboardBaseLayout";
import { MobileNav } from "@components/layouts/dashboard/Navigation/MobileNav";

import { GET_CATEGORY_BY_ENTITY } from "@graphql/entities/queries";
import { GET_PRODUCT_BY_ID } from "@graphql/product/queries";

import { EntityMenuProps } from "@dto/Product/ProductProps";

import { NotificationTypes, Status } from "@shared/libs/helpers";
import { MenuProps } from "@shared/models";

import { ProductDetailPages } from "@modules/productDetailPages";

interface ProductDetailPageProps {
  sku: string;
  entity: string;
}

const ProductDetailPage: NextPage<ProductDetailPageProps> = ({ sku, entity }: ProductDetailPageProps) => {
  const { currentProduct } = useSelector((state: AppState) => state.product);
  const [menu, setMenu] = useState<any>(null);
  const [errorState, setErrorState] = useState<string>("");

  const {
    data: productData,
    error: productError,
    loading: productLoading,
  } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { productId: sku },
  });

  const dispatch = useDispatch();

  const getBreadCrumbs = () => {
    let breadCrumb: BreadCrumbProps[] = [{ text: "Home", url: "/" }];

    if (currentProduct?.entity?.name) {
      breadCrumb = [...breadCrumb, { text: String(currentProduct.entity.name), url: `/${currentProduct?.entity?.urlKey}` }, { text: currentProduct?.name }];
    }

    return breadCrumb;
  };

  useEffect(() => {
    if (productData) {
      const { status, message, data } = productData.getProductById;
      if (status === Status.SUCCESS) {
        dispatch(setCurrentProduct(data));
      }
      if (status === Status.ERROR || status === Status.FAILED) {
        setErrorState(message);
      }

      if (!data) {
        setErrorState("An error occurred...");
      }
    }

    if (productError) {
      setErrorState("An error occurred...");
    }

    dispatch(setLoading(productLoading));
  }, [productData, productError, productLoading]);

  const [getCategoryByEntity, { data: categoryData, error: categoryError }] = useLazyQuery(GET_CATEGORY_BY_ENTITY, {
    variables: { urlKey: entity },
  });

  useEffect(() => {
    if (entity) {
      getCategoryByEntity({
        variables: {
          urlKey: entity,
        },
      });
    }
  }, [entity]);

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

  const getMenuStructure = (): MenuProps[] => {
    return (menu || []).map((menu: EntityMenuProps) => ({
      id: menu._id,
      name: menu.name,
      route: `/${menu.entity.urlKey}/search?category=${menu.urlKey}`,
      urlKey: menu.urlKey,
    }));
  };

  const menuData = {
    menu: getMenuStructure(),
    title: "CATEGORIES",
  };

  return errorState ? (
    <Error statusCode={404} title={errorState} />
  ) : (
    <DashboardBaseLayout
      breadcrumbs={getBreadCrumbs()}
      category={entity}
      customMobileMenu={(menuProp) => <MobileNav hasFilters={true} {...menuData} {...menuProp} />}
      title="Product Detail Page"
    >
      <div className="bg-citiBlue-70 smallLaptop:pl-[1.625rem]">
        <ProductDetailPages sku={sku} />
      </div>
    </DashboardBaseLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query: { sku, entity } }) => {
  return {
    props: {
      sku,
      entity,
    },
  };
};

export default ProductDetailPage;
