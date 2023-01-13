export interface PaymentProps {
  _id: string;
  entity: string;
  merchant: string;
  amount: number;
  commission: number;
  gateway: string;
  gatewayRef: string;
  order: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __typename: "TransactionsResponseData";
}
