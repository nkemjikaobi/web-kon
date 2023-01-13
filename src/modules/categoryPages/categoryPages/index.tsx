import { useQuery } from "@apollo/client";
import { StaticImageData } from "next/image";
import React, { FC, useEffect, useState } from "react";

import { citiToast } from "@components/atoms/Toast";
import ServicesImageComponent from "@components/organisms/DashboardLandingPage/ServicesImageComponent";
import ServicesSearchComponent from "@components/organisms/DashboardLandingPage/ServicesSearchComponent";
import ServicesSubMenu from "@components/organisms/DashboardLandingPage/ServicesSubMenu";

import { GET_CATEGORY_BY_ENTITY } from "@graphql/entities/queries";

import { CitiServices, NotificationTypes, Status } from "@shared/libs/helpers";

import ServicesImageComponentSkeleton from "@skeletons/ServicesImageComponentSkeleton";
import ServicesSearchComponentSkeleton from "@skeletons/ServicesSearchComponentSkeleton";
import ServicesSubMenuSkeleton from "@skeletons/ServicesSubMenuSkeleton";

interface CategoryPagesProps {
  entity: string;
}

export const CategoryPages: FC<CategoryPagesProps> = ({ entity }: CategoryPagesProps) => {
  const [banners, setBanners] = useState<Array<ImageDataProps>>([]);

  const {
    data: categoryData,
    error: categoryError,
    loading: categoryLoading,
  } = useQuery(GET_CATEGORY_BY_ENTITY, {
    variables: { urlKey: entity },
  });

  const { status, message, data: categories } = categoryData?.getCategoryByEntity || {};

  useEffect(() => {
    if (status && status === Status.FAILED) {
      citiToast(NotificationTypes.ERROR, message);
    }

    if (categoryError) {
      citiToast(NotificationTypes.ERROR, "Error fetching categories...");
    }
  }, [status, categoryError]);

  useEffect(() => {
    let mounted = true;

    if (mounted && entity) {
      switch (entity) {
        case CitiServices.VACATION.name:
          setBanners(CitiServices.VACATION.images);
          break;
        case CitiServices.REAL_ESATE.name:
          setBanners(CitiServices.REAL_ESATE.images);
          break;
        default:
          break;
      }
    }

    return () => {
      mounted = false;
      setBanners([]);
    };
  }, []);

  return (
    <>
      {categoryLoading ? (
        <div className="flex">
          <div className="hidden smallLaptop:block mr-4">
            <ServicesSubMenuSkeleton />
          </div>
          <div className="h-[24.375rem] w-full smallLaptop:w-[65.875rem] television:w-full">
            <ServicesSearchComponentSkeleton />
            <ServicesImageComponentSkeleton />
          </div>
        </div>
      ) : (
        categories && (
          <div className="flex">
            <div className="hidden smallLaptop:block mr-4">
              <ServicesSubMenu entity={entity} menu={categories} />
            </div>
            <div className="h-[24.375rem] w-full smallLaptop:w-[65.875rem] television:w-full">
              <ServicesSearchComponent categoryList={categories} entity={entity} />
              <ServicesImageComponent src={banners} />
            </div>
          </div>
        )
      )}
    </>
  );
};

export interface ImageDataProps {
  id: number;
  url: StaticImageData;
}
