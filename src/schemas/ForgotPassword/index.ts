import * as yup from "yup";

import { errorMessages } from "@shared/libs/helpers";

export const ForgotPasswordSchema = yup.object().shape({
  email: yup.string().email(errorMessages.email).required(errorMessages.required),
});
