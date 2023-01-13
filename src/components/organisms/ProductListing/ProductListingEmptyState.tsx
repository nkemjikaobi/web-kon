import { EmptyState } from "@components/molecules/EmptyState";

export const ProductListingEmptyState = () => (
  <EmptyState
    icon="bagCross"
    subText="Sorry there are no product listings available at the moment  as we are under maintenance
please check back later thanks"
    title="No Product Listing available"
  />
);
