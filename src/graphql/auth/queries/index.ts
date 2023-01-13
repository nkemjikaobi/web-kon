import { gql } from "@apollo/client";

const GET_USER = gql`
  query GetUser {
    getUser {
      ... on UserLoginResponse {
        status
        data {
          token
          user {
            _id
            email
            phoneNumber
            firstName
            lastName
            userType
            country
            isVerified
            status
            photo
          }
        }
        message
      }
    }
  }
`;

export { GET_USER };
