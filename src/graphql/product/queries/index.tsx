import { gql } from "@apollo/client";

const GET_PRODUCT_BY_ID = gql`
  query Query($productId: String!) {
    getProductById(productId: $productId) {
      ... on GetProductResponse {
        status
        data {
          _id
          name
          activities
          catalogProductEntityId
          catalogProductCategoryId
          quantity
          description
          imageUrl
          featuredImage
          location
          state
          productState
          lga
          arrivalTime
          depatureTime
          timeRange
          price
          priceDiscount
          status
          termsCondition
          merchant {
            _id
            storeName
            storeUrl
          }
          category {
            _id
            name
            urlKey
          }
          entity {
            _id
            name
            urlKey
          }
        }
        meta {
          pages
          prev
          next
          total
          page
          limit
        }
        message
      }
    }
  }
`;

const GET_PRODUCTS = gql`
  query GetProducts {
    getProducts {
      ... on GetProductsResponse {
        status
        data {
          _id
          name
          catalogProductEntityId
          catalogProductCategoryId
          quantity
          description
          imageUrl
          featuredImage
          location
          state
          productState
          lga
          arrivalTime
          depatureTime
          timeRange
          price
          priceDiscount
          status
          merchant {
            _id
            storeName
            storeUrl
          }
          category {
            _id
            name
            urlKey
          }
          entity {
            _id
            name
            urlKey
          }
        }
        meta {
          pages
          prev
          next
          total
          page
          limit
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

const GET_PRODUCTS_BY_ENTITY = gql`
  query GetProductsByEntity($urlKey: String!, $productFilterInput: ProductFilterInput) {
    getProductsByEntity(urlKey: $urlKey, productFilterInput: $productFilterInput) {
      ... on GetProductsResponse {
        status
        data {
          _id
          name
          catalogProductEntityId
          catalogProductCategoryId
          quantity
          description
          imageUrl
          featuredImage
          location
          state
          productState
          lga
          arrivalTime
          depatureTime
          timeRange
          price
          priceDiscount
          status
          merchant {
            _id
            storeName
            storeUrl
          }
          category {
            _id
            name
            urlKey
          }
          entity {
            _id
            name
            urlKey
          }
        }
        meta {
          pages
          prev
          next
          total
          page
          limit
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

const GET_PRODUCT_ENTITIES = gql`
  query GetProductEntities {
    getProductEntities {
      ... on GetProductEntityResponse {
        status
        data {
          _id
          name
          status
          urlKey
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

const GET_PRODUCTS_BY_CATEGORY = gql`
  query GetProductsByCategory($urlKey: String!, $productFilterInput: ProductFilterInput) {
    getProductsByCategory(urlKey: $urlKey, productFilterInput: $productFilterInput) {
      ... on GetProductsResponse {
        status
        data {
          _id
          name
          catalogProductEntityId
          catalogProductCategoryId
          quantity
          description
          imageUrl
          featuredImage
          location
          state
          productState
          lga
          urlKey
          arrivalTime
          depatureTime
          timeRange
          price
          priceDiscount
          status
          merchant {
            _id
            storeName
            storeUrl
          }
          category {
            _id
            name
            urlKey
          }
          entity {
            _id
            name
            urlKey
          }
        }
        meta {
          pages
          prev
          next
          total
          page
          limit
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

const GET_RANDOM_PRODUCTS = gql`
  query ProductsResponse {
    getRandomProducts {
      ... on ProductsResponse {
        status
        data {
          _id
          sku
          name
          quantity
          description
          imageUrl
          featuredImage
          location
          state
          productState
          lga
          urlKey
          arrivalTime
          depatureTime
          timeRange
          price
          priceDiscount
          status
          merchant
          canCancel
          cancelDuration
          termsCondition
          amenities
          country
          activities
          createdAt
          updatedAt
          category {
            _id
            name
            urlKey
          }
          entity {
            _id
            name
            urlKey
          }
        }
        message
      }
    }
  }
`;

export { GET_PRODUCT_BY_ID, GET_PRODUCTS, GET_PRODUCTS_BY_ENTITY, GET_PRODUCT_ENTITIES, GET_PRODUCTS_BY_CATEGORY, GET_RANDOM_PRODUCTS };
