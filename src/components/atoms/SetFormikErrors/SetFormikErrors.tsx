import { FormikErrors, useFormikContext } from "formik";
import { FC, useEffect } from "react";

const SetFormikErrors: FC<{ externalErrors: FormikErrors<unknown> }> = ({ externalErrors }) => {
  const { errors, setErrors, values } = useFormikContext();

  useEffect(() => setErrors({ ...errors, ...externalErrors }), [externalErrors, setErrors]);

  useEffect(() => setErrors({ ...errors }), [errors, setErrors, values]);

  return null;
};

export default SetFormikErrors;
