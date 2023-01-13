import { range } from "lodash";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import { GroupCard } from "@components/atoms/GroupCard";
import { ProductCard } from "@components/molecules/ProductCard";

import { useWindowSize } from "@hooks/useWindowSize";

import { ProductProps } from "@dto/Product/ProductProps";

import { ButtonProperties } from "@shared/libs/helpers";
import { MetaProps } from "@shared/models";

import ProductCardSkeleton from "@skeletons/ProductCardSkeleton";

import { ProductListingEmptyState } from "./ProductListingEmptyState";

interface ProductListingProps {
  title?: string;
  loading?: boolean;
  products: ProductProps[];
  fetchMoreProducts: Function;
  meta?: MetaProps;
  currentPage?: number;
}

export const ProductListing = ({ currentPage, title, loading, products, fetchMoreProducts, meta }: ProductListingProps) => {
  const [width] = useWindowSize();

  const entityName = products.length > 0 ? products[0].entity.name : "";
  // const cardTitle = title || `${entityName} Offers`;
  const cardTitle = title || `${entityName?.toLowerCase() === "vacations" ? "vacation" : entityName} Offers`;

  const productSkeletonCount = width > 600 ? 5 : 2;

  return (
    <>
      <GroupCard contentClass="overflow-hidden !block relative !mx-0 desktop:!mx-4" id={entityName} title={cardTitle}>
        {!loading && products?.length < 1 ? (
          <ProductListingEmptyState />
        ) : (
          <>
            <div className="grid grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-5 desktop:gap-6 w-full">
              {loading && currentPage === 1
                ? range(productSkeletonCount).map((_, index) => <ProductCardSkeleton key={index} />)
                : (products || []).map((product) => <ProductCard key={product._id} product={product} />)}
            </div>
            {(meta?.next || loading) && (
              <div className=" text-citiBlue-400 mt-4 cursor-pointer uppercase text-14 float-right mr-3">
                <CustomButton
                  customClass="w-[150px]"
                  handleClick={() => fetchMoreProducts()}
                  isDisabled={loading}
                  isSubmitting={loading}
                  isTransparent={true}
                  title="See More"
                  variant={`${ButtonProperties.VARIANT.secondary.name}`}
                />
              </div>
            )}
          </>
        )}
      </GroupCard>
    </>
  );
};

ProductListing.defaultProps = {
  title: "",
  loading: false,
  meta: {},
  currentPage: 1,
};
