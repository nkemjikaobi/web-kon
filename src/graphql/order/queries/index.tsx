import { gql } from "@apollo/client";

const GET_CUSTOMER_SINGLE_ORDER = gql`
  query GetOrdersResponse($getCustomerSingleOrderId: String!) {
    getCustomerSingleOrder(id: $getCustomerSingleOrderId) {
      ... on GetOrdersResponse {
        status
        data {
          _id
          orderId
          customer {
            _id
            firstName
            lastName
          }
          entity {
            _id
            name
            urlKey
          }
          product {
            _id
            name
            imageUrl
            description
          }
          category {
            _id
            name
            urlKey
          }
          merchant {
            _id
            storeName
            storeUrl
          }
          orderStatus
          bookingType
          bookingUser
          paymentPlanId
          paymentStatus
          paymentGatewayStatus
          arrivalTime
          price
          serviceCharge
          timeRange
          depatureTime
          totalAmount
          totalAmountPaid
          depositedAmount
          numPerson
          status
          isApproved
          createdAt
          updatedAt
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

const GET_CUSTOMER_ORDERS = gql`
  query Data($getCustomerOrdersFilterInput: GetCustomerOrdersFilterInput) {
    getCustomerOrdersByEntity(getCustomerOrdersFilterInput: $getCustomerOrdersFilterInput) {
      ... on GetOrdersResponse {
        data {
          _id
          orderId
          customer {
            _id
            firstName
            lastName
          }
          entity {
            _id
            name
            urlKey
          }
          product {
            _id
            name
            imageUrl
            description
          }
          category {
            _id
            name
            urlKey
          }
          merchant {
            _id
            storeName
            storeUrl
          }
          orderStatus
          bookingType
          bookingUser
          paymentPlanId
          paymentStatus
          paymentGatewayStatus
          arrivalTime
          price
          serviceCharge
          timeRange
          depatureTime
          totalAmount
          totalAmountPaid
          depositedAmount
          numPerson
          status
          isApproved
          createdAt
          updatedAt
        }
        status
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

const GET_SINGLE_ORDER = gql`
  query GetSingleOrder($getSingleOrderId: String!) {
    getSingleOrder(id: $getSingleOrderId) {
      ... on GetOrderResponse {
        status
        data {
          _id
          customer
          entity {
            _id
            name
            urlKey
          }
          product {
            _id
            name
            imageUrl
            description
          }
          category {
            _id
            name
            urlKey
          }
          orderStatus
          bookingType
          bookingUser
          paymentPlanId
          paymentStatus
          paymentGatewayStatus
          arrivalTime
          price
          serviceCharge
          timeRange
          depatureTime
          totalAmount
          totalAmountPaid
          depositedAmount
          numPerson
          status
          merchant {
            _id
            storeName
            storeUrl
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

export { GET_CUSTOMER_SINGLE_ORDER, GET_CUSTOMER_ORDERS, GET_SINGLE_ORDER };
