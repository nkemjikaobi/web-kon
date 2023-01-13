import { Form, Formik } from "formik";
import { useSelector } from "react-redux";
import { AppState } from "src/store/rootReducer";
import * as Yup from "yup";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import FormikCustomInput from "@components/molecules/FormikCustomInput";

import { ButtonProperties, errorMessages } from "@shared/libs/helpers";

interface FormValues {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  amount?: number;
}

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
  lastName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
  email: Yup.string().email("Invalid email").required(errorMessages.required),
  amount: Yup.string().required(errorMessages.required),
  phoneNumber: Yup.string().min(11, errorMessages.minChar(11)).max(50, "Too Long!").required(errorMessages.required),
});

const PaymentForm = ({ totalAmount }: { totalAmount: number }) => {
  const { firstName, lastName, email, phoneNumber } = useSelector((state: AppState) => state.auth.user || {});

  const handleSubmit = async (values: FormValues) => {
    console.log(values);
  };

  return (
    <>
      <div>
        <Formik<FormValues>
          initialValues={{
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            amount: totalAmount,
          }}
          onSubmit={handleSubmit}
          validationSchema={SignupSchema}
        >
          {({ values, handleChange, setFieldValue, handleBlur }) => (
            <Form>
              <div>
                <div className="tablet:mt-8  p-4 tablet:p-0  tablet:w-[70%] m-auto">
                  <div className="tablet:flex ">
                    <div>
                      <FormikCustomInput
                        className={`rounded-md h-[53px] w-full tablet:w-[235px] mt-2  border border-citiGray-300 `}
                        container="!px-0"
                        disabled={true}
                        id="firstName"
                        inputClassName={`placeholder:text-14 placeholder:text-citiGray-300`}
                        name="firstName"
                        placeholder="First Name"
                        type="text"
                      />
                    </div>
                    <div className="tablet:ml-3">
                      <FormikCustomInput
                        className={`rounded-md  h-[53px] w-full tablet:w-[235px] mt-2 border border-citiGray-300`}
                        container="!px-0"
                        disabled={true}
                        id="lastName"
                        inputClassName="placeholder:text-14 placeholder:text-citiGray-300"
                        name="lastName"
                        placeholder="Last Name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-4 tablet:mt-6 ">
                      <FormikCustomInput
                        className={`rounded-md  h-[53px] w-full tablet:w-[483px] mt-2 border border-citiGray-300  `}
                        container="!pr-0"
                        disabled={true}
                        icon="email"
                        id="email"
                        inputClassName="placeholder:text-14 placeholder:text-citiGray-300"
                        name="email"
                        placeholder="Your Email"
                        type="email"
                      />
                    </div>
                    <div className="mt-4 tablet:mt-6">
                      <FormikCustomInput
                        className={`rounded-md  h-[53px] w-full tablet:w-[483px] mt-2 border border-citiGray-300`}
                        disabled={true}
                        icon="callIcon"
                        id="phoneNumber"
                        inputClassName="placeholder:text-14 placeholder:text-citiGray-300"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        type="text"
                        value={values.phoneNumber}
                      />
                    </div>

                    <div className="mt-4 tablet:mt-6">
                      <FormikCustomInput
                        className={`rounded-md  h-[53px] w-full tablet:w-[235px] mt-2 border border-citiGray-300`}
                        container="!px-0"
                        disabled={true}
                        id="amount"
                        inputClassName="placeholder:text-14 placeholder:text-citiGray-300 disabled"
                        name="amount"
                        placeholder="Amount"
                        type="text"
                        value={`₦ ${values.amount?.toLocaleString()}`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-20 flex justify-center pb-20">
                <CustomButton handleClick={() => {}} size={ButtonProperties.SIZES.small} title="Submit Request" variant={ButtonProperties.VARIANT.secondary.name} />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default PaymentForm;
