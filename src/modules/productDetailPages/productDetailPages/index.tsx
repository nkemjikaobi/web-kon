import React, { FC } from "react";
import { useSelector } from "react-redux";
import { AppState } from "src/store/rootReducer";

import MoreDetailsOfProduct from "@components/organisms/ProductDetailPage/MoreDetailsOfProduct";
import OfferedBy from "@components/organisms/ProductDetailPage/OfferedBy";
import ProductImageAndVariants from "@components/organisms/ProductDetailPage/ProductImageAndVariants";

import MoreDetailsOfProductSkeleton from "@skeletons/MoreDetailsOfProductSkeleton";
import OfferedBySkeleton from "@skeletons/OfferedBySkeleton";
import ProductImageAndVariantsSkeleton from "@skeletons/ProductImageAndVariantsSkeleton";

interface ProductDetailPagesProps {
  sku: string;
}

export const ProductDetailPages: FC<ProductDetailPagesProps> = () => {
  const { currentProduct, loading } = useSelector((state: AppState) => state.product);

  return loading ? (
    <div className="">
      <h2 className="animate-pulse bg-gray-300 w-48 my-8 pt-[1.438rem] ml-[1rem] smallLaptop:ml-0" />
      <div className="flex flex-col smallLaptop:flex-row">
        <div className="smallLaptop:w-[70%] smallLaptop:pb-[45px] pb-[0.375rem] ">
          <ProductImageAndVariantsSkeleton />
          <MoreDetailsOfProductSkeleton />
        </div>
        <div className="px-4 py-6 smallLaptop:w-[30%] smallLaptop:mr-[0.438rem] smallLaptop:ml-[1.5rem] h-[80%] mb-[0.438rem] smallLaptop:mb-0">
          <OfferedBySkeleton />
        </div>
      </div>
    </div>
  ) : (
    <div className="">
      <h2 className="text-16 bigLaptop:text-24 font-bold text-citiDarkText mb-8 font-nunitoSans pt-[1.438rem] ml-[1rem] smallLaptop:ml-0 capitalize">{currentProduct?.name}</h2>
      <div className="flex flex-col smallLaptop:flex-row">
        <div className="smallLaptop:w-[100%] smallLaptop:pb-[45px] pb-[0.375rem] ">
          <ProductImageAndVariants images={currentProduct?.imageUrl || []} />
          <MoreDetailsOfProduct />
        </div>
        <div className="bg-white px-4 bigLaptop:px-8 py-6 smallLaptop:w-[30%] smallLaptop:mr-[0.438rem] smallLaptop:ml-[1.5rem] h-[80%] mb-[0.438rem] smallLaptop:mb-0">
          <OfferedBy />
        </div>
      </div>
    </div>
  );
};
