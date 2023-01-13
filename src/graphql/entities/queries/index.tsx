import { gql } from "@apollo/client";

const GET_CATEGORY_BY_ENTITY = gql`
  query GetCategoryByEntity($urlKey: String!) {
    getCategoryByEntity(urlKey: $urlKey) {
      ... on GetProductEntityCategory {
        status
        data {
          _id
          name
          urlKey
          entity {
            _id
            name
            urlKey
          }
          status
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

export { GET_CATEGORY_BY_ENTITY };
