import { gql } from "@apollo/client";

const REGISTER_USER = gql`
  mutation Mutation($registerInput: RegisterInput) {
    registerUser(registerInput: $registerInput) {
      ... on UserResponse {
        status
        data {
          email
          phoneNumber
          firstName
          lastName
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

const LOGIN_USER = gql`
  mutation Mutation($loginInput: loginInput) {
    loginUser(loginInput: $loginInput) {
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

      ... on ServerError {
        status
        message
      }
    }
  }
`;

const FORGOT_PASSWORD = gql`
  mutation ForgotPassword($forgotPasswordInput: forgotPasswordInput) {
    forgotPassword(forgotPasswordInput: $forgotPasswordInput) {
      ... on forgotPasswordResponse {
        status
        data {
          userId
          token
          password
          expiresAt
          _id
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

const RESET_PASSWORD = gql`
  mutation ForgotPassword($resetPasswordInput: resetPasswordInput) {
    resetPassword(resetPasswordInput: $resetPasswordInput) {
      ... on forgotPasswordResponse {
        status
        data {
          userId
          token
          password
          expiresAt
          _id
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

const CHANGE_PASSWORD = gql`
  mutation Mutation($changePasswordInput: changePasswordInput) {
    changePassword(changePasswordInput: $changePasswordInput) {
      ... on forgotPasswordResponse {
        status
        data {
          userId
          token
          password
          expiresAt
          _id
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

const VERIFY_ACCOUNT = gql`
  mutation VerifyAccount($verifyAccountInput: VerifyAccountInput) {
    verifyAccount(verifyAccountInput: $verifyAccountInput) {
      ... on UserResponse {
        status
        data {
          email
          phoneNumber
          firstName
          lastName
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

const RESEND_SIGNUP_OTP = gql`
  mutation ResendSignUpOtp($resendOtpInput: forgotPasswordInput) {
    resendSignUpOtp(resendOTPInput: $resendOtpInput) {
      ... on ServerSuccess {
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

const GOOGLE_LOGIN = gql`
  mutation Mutation($idToken: String!, $portal: String!) {
    googleLogin(idToken: $idToken, portal: $portal) {
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

const FACEBOOK_LOGIN = gql`
  mutation FacebookLogin($accessToken: String!, $portal: String!) {
    facebookLogin(accessToken: $accessToken, portal: $portal) {
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
      ... on ServerError {
        status
        message
      }
    }
  }
`;

const MUTATE_MERCHANT = gql`
  mutation MerchantUpdateStore($updateStoreInput: UpdateStoreInput) {
    merchantUpdateStore(updateStoreInput: $updateStoreInput) {
      ... on ServerSuccess {
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

export { MUTATE_MERCHANT, FACEBOOK_LOGIN, GOOGLE_LOGIN, REGISTER_USER, LOGIN_USER, FORGOT_PASSWORD, RESET_PASSWORD, CHANGE_PASSWORD, VERIFY_ACCOUNT, RESEND_SIGNUP_OTP };
