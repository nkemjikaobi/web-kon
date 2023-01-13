import * as yup from "yup";

import { errorMessages } from "@shared/libs/helpers";

export const ReservationSchema = yup.object().shape({
  timeRange: yup.string().required(errorMessages.required),
  numPerson: yup.number().required(errorMessages.required),
});
