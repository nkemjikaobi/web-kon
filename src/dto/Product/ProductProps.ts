export interface ProductProps {
  _id?: string;
  name?: string;
  catalogProductEntityId?: string;
  catalogProductCategoryId?: string;
  quantity?: number;
  activities?: [];
  description?: string;
  imageUrl?: Array<string>;
  featuredImage?: string;
  location?: string;
  state?: string;
  productState?: string;
  lga?: string;
  arrivalTime?: string;
  depatureTime?: string;
  timeRange?: string;
  price?: number;
  priceDiscount?: number;
  status?: Boolean;
  merchant: MerchantProps;
  category: CategoryProps;
  entity: EntityProps;
  termsCondition?: any;
}

export interface MerchantProps {
  _id?: string;
  storeName?: string;
  storeUrl?: string;
}

export interface CategoryProps {
  _id?: string;
  name?: string;
  urlKey?: string;
}

export interface EntityProps {
  _id?: string;
  name?: string;
  urlKey?: string;
}

export interface EntityMenuProps {
  _id: string;
  name: string;
  urlKey: string;
  entity: EntityProps;
}

export interface CustomerProps {
  _id: string;
  firstName: string;
  lastName: string;
}

export interface OrderProps {
  __typename: string;
  _id: string;
  orderId: string;
  arrivalTime: string;
  bookingType: string;
  category: CategoryProps;
  customer: CustomerProps;
  depatureTime: string | null;
  depositedAmount: [];
  entity: EntityProps;
  product: Pick<ProductProps, "_id" | "name" | "imageUrl" | "description">;
  merchant: MerchantProps;
  numPerson: string;
  orderStatus: "processing" | "completed";
  paymentGatewayStatus: "pending" | string;
  paymentPlanId: string | null;
  paymentStatus: "unpaid" | string;
  status: boolean;
  timeRange: string;
  totalAmount: string;
  totalAmountPaid: string;
  isApproved: boolean;
  createdAt: string;
  updatedAt: string;
}
