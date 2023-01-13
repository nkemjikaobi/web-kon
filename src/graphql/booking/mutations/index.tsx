import { gql } from "@apollo/client";

const CREATE_BOOKING = gql`
  mutation Mutation($createBookingInput: CreateBookingInput) {
    createBooking(createBookingInput: $createBookingInput) {
      ... on CreateBookingSuccess {
        data {
          _id
          orderId
          numPerson
          productName
          arrivalTime
          depatureTime
        }
        status
        message
      }
      ... on ServerError {
        status
        message
      }
    }
  }
`;

export { CREATE_BOOKING };
