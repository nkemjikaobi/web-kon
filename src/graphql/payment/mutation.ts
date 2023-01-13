import { gql } from "@apollo/client";

const VERIFY_TRANSACTION = gql`
  mutation VerifyTransaction($txRef: String!) {
    verifyTransaction(tx_ref: $txRef) {
      ... on GetTransactionResponse {
        status
        data {
          _id
          entity
          merchant
          amount
          commission
          gateway
          gatewayRef
          order
          status
          createdAt
          updatedAt
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

export { VERIFY_TRANSACTION };
