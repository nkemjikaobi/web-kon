import { gql } from "@apollo/client";

const INITIATE_FLUTTERWAVE_PAYMENT = gql`
  mutation InitializeTransaction($orderId: String!) {
    initializeTransaction(orderId: $orderId) {
      ... on InitializeTransactionResponse {
        status
        data {
          status
          message
          data {
            link
          }
        }
        message
      }
      ... on ServerError {
        status
        message
      }
    }
  }
`;

export { INITIATE_FLUTTERWAVE_PAYMENT };
