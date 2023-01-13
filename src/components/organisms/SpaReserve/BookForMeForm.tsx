import { Form, Formik } from "formik";
import * as Yup from "yup";

import CustomLabel from "@components/atoms/CustomLabel/CustomLabel";
import FormikCustomInput from "@components/molecules/FormikCustomInput";
import FormikCustomPhoneInput from "@components/molecules/FormikPhoneInput/FormikPhoneInput";

import { errorMessages } from "@shared/libs/helpers";

interface FormValues {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
}

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
  lastName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
  email: Yup.string().email("Invalid email").required(errorMessages.required),
  phoneNumber: Yup.string().min(11, errorMessages.minChar(11)).max(50, "Too Long!").required(errorMessages.required),
});

const BookForMeForm = () => {
  const handleSubmit = async (values: FormValues) => {
    console.log(values);
  };

  return (
    <div className="text-14">
      <div>
        <Formik<FormValues>
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={SignupSchema}
        >
          {({ values, handleChange, setFieldValue, handleBlur }) => (
            <Form>
              <div>
                <div className="tablet:mt-8 tablet:flex p-4 tablet:p-0 tablet:justify-between  tablet:w-[70%] m-auto">
                  <div className="tablet:mt-8 rounded-md tablet:mr-24 tablet:w-1/2">
                    <div>
                      <CustomLabel title="First Name" />
                      <FormikCustomInput
                        className={`rounded-md h-[46px] mt-2 w-full border border-citiGray-300 `}
                        container="!px-0"
                        id="firstName"
                        inputClassName={`placeholder:text-14 bg-[#FAFBFC] placeholder:text-citiGray-300`}
                        name="firstName"
                        placeholder="First Name"
                        type="text"
                      />
                    </div>
                    <div className="mt-4 tablet:mt-6">
                      <CustomLabel title="Email Address" />
                      <FormikCustomInput
                        className={`rounded-md w-full h-[46px] mt-2 border border-citiGray-300  `}
                        container="!pr-0 bg-[#FAFBFC]"
                        icon="email"
                        id="email"
                        inputClassName="placeholder:text-14 placeholder:text-citiGray-300 bg-[#FAFBFC]"
                        name="email"
                        placeholder="Your Email"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="mt-4 tablet:mt-8 tablet:w-1/2">
                    <div>
                      <CustomLabel title="Last Name" />
                      <FormikCustomInput
                        className={`rounded-md w-full h-[46px] mt-2 border border-citiGray-300`}
                        container="!px-0"
                        id="lastName"
                        inputClassName="placeholder:text-14 placeholder:text-citiGray-300 bg-[#FAFBFC]"
                        name="lastName"
                        placeholder="Last Name"
                        type="text"
                      />
                    </div>

                    <div className="mt-4 tablet:mt-6">
                      <CustomLabel title="Phone Number" />
                      <FormikCustomPhoneInput
                        className="!mt-2"
                        id="phoneNumber"
                        inputClass="!w-full !h-[46px] !bg-[#FAFBFC]"
                        name="phoneNumber"
                        onBlur={handleBlur}
                        onChange={(value: string) => setFieldValue("phoneNumber", value)}
                        onCountryChange={(value: string) => setFieldValue("country", value.toUpperCase())}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default BookForMeForm;
