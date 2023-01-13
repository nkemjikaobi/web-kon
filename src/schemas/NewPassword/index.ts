import * as yup from "yup";
import yupPassword from "yup-password";

import { errorMessages } from "@shared/libs/helpers";

yupPassword(yup); // extend yup

export const NewPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required(errorMessages.required)
    .min(8, errorMessages.minChar(8))
    .minLowercase(1, errorMessages.minLowerCase(1))
    .minUppercase(1, errorMessages.minUpperCase(2))
    .minNumbers(1, errorMessages.minNumber(1))
    .minSymbols(1, errorMessages.minSymbol(1)),
  confirmPassword: yup
    .string()
    .required(errorMessages.required)
    .oneOf([yup.ref("password"), null], errorMessages.passwordMatch),
});
