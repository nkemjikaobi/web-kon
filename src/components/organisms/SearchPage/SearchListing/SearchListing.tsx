import { range } from "lodash";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import { ProductCard } from "@components/molecules/ProductCard";
import { ProductListingEmptyState } from "@components/organisms/ProductListing/ProductListingEmptyState";

import { useWindowSize } from "@hooks/useWindowSize";

import { ProductProps } from "@dto/Product/ProductProps";

import { ButtonProperties } from "@shared/libs/helpers";
import { MetaProps } from "@shared/models";

import ProductCardSkeleton from "@skeletons/ProductCardSkeleton";

import SearchResults from "../SearchResults/SearchResults";

interface SearchListingProps {
  title?: string;
  loading?: boolean;
  products: ProductProps[];
  fetchMoreProducts: Function;
  meta?: MetaProps;
  currentPage: number;
}

export const SearchListing = ({ currentPage, meta, title = "", loading, products, fetchMoreProducts }: SearchListingProps) => {
  const [width] = useWindowSize();

  const entityName = products.length > 0 ? products[0].entity.name : "";

  const productSkeletonCount = width > 600 ? 4 : 2;

  return (
    <SearchResults contentClass="!mx-0 !block desktop:!mx-4 h-fit" id={entityName} products={products} title={title} totalProducts={meta?.total}>
      {!loading && products?.length < 1 ? (
        <ProductListingEmptyState />
      ) : (
        <div className="grid grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-4 desktop:gap-6 w-full">
          {loading && currentPage === 1
            ? range(productSkeletonCount).map((_, index) => <ProductCardSkeleton key={index} />)
            : (products || []).map((product) => <ProductCard key={product._id} product={product} />)}
        </div>
      )}
      {(meta?.next || loading) && (
        <div className=" text-citiBlue-400 mt-4 cursor-pointer uppercase text-14 mr-2 float-right">
          <CustomButton
            customClass=""
            handleClick={fetchMoreProducts}
            isDisabled={loading}
            isSubmitting={loading}
            isTransparent={true}
            title="See More"
            variant={`${ButtonProperties.VARIANT.secondary.name}`}
          />
        </div>
      )}
    </SearchResults>
  );
};

SearchListing.defaultProps = {
  title: "",
  loading: false,
  meta: {},
};
