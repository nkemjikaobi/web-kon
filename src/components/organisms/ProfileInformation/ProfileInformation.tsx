import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { AppState } from "src/store/rootReducer";
import * as Yup from "yup";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomLabel from "@components/atoms/CustomLabel/CustomLabel";
import Icon from "@components/atoms/Icons";
import { StatusBadge } from "@components/atoms/StatusBadge";
import FormikCustomInput from "@components/molecules/FormikCustomInput";

import { ButtonProperties, errorMessages } from "@shared/libs/helpers";

interface FormValues {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  gender?: string;
  country?: string;
}

const ProfileInfoSchema = Yup.object().shape({
  firstName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
  lastName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
  email: Yup.string().email("Invalid email").required(errorMessages.required),
  phoneNumber: Yup.string().min(11, errorMessages.minChar(11)).max(50, "Too Long!").required(errorMessages.required),
});

const ProfileInfo = () => {
  const { firstName, lastName, email, phoneNumber, country } = useSelector((state: AppState) => state.auth.user || {});

  const router = useRouter();

  const handleSubmit = async (values: FormValues) => {
    console.log(values);
  };

  return (
    <div className="bg-white smallLaptop:h-fit pb-60 pt-6 smallLaptop:mt-4 smallLaptop:w-full television:w-[1093px]  smallLaptop:mx-4">
      <div className="flex">
        <div className="smallLaptop:hidden cursor-pointer ml-4" onClick={() => router.push("/account")}>
          <Icon name="caretLeftBlack" />
        </div>
        <div className="hidden smallLaptop:block cursor-pointer ml-4" onClick={() => router.push("/account")}>
          <Icon name="arrowBack" />
        </div>
        <h1 className="ml-4 smallLaptop:ml-3 text-16 pb-5 mt-[2px]">Profile Information</h1>
      </div>
      <hr />

      <div>
        <div>
          <Formik<FormValues>
            initialValues={{
              firstName: firstName || "",
              lastName: lastName || "",
              email: email || "",
              phoneNumber: phoneNumber || "",
              gender: "",
              country: country || "",
            }}
            onSubmit={handleSubmit}
            validationSchema={ProfileInfoSchema}
          >
            {({ values, handleChange, setFieldValue, handleBlur }) => (
              <Form>
                <div>
                  <div className="mt-4 tablet:mt-12 tablet:pl-7 tablet:mr-[63px]">
                    <div className="tablet:mt-8 tablet:flex p-4 tablet:p-0 tablet:justify-between">
                      <div className="tablet:w-1/2">
                        <CustomLabel title="First Name" />
                        <FormikCustomInput
                          className={`rounded-md h-[50px] mt-2 w-full border border-citiGray-300 `}
                          container="!px-0"
                          id="firstName"
                          inputClassName={`placeholder:text-14 placeholder:text-citiGray-300`}
                          name="firstName"
                          placeholder="John"
                          type="text"
                          values={values.firstName}
                        />
                      </div>
                      <div className="tablet:w-1/2 tablet:pl-7 mt-5 smallLaptop:mt-0">
                        <CustomLabel title="Last Name" />
                        <FormikCustomInput
                          className={`rounded-md w-full h-[50px] mt-2 border border-citiGray-300  `}
                          container="!pr-0 !pl-0 "
                          id="lastName"
                          inputClassName="placeholder:text-14  placeholder:text-citiGray-300"
                          name="lastName"
                          placeholder="Doe"
                          type="text"
                          values={values.lastName}
                        />
                      </div>
                    </div>
                    <div className="tablet:mt-6 mt-2 tablet:flex px-4 tablet:p-0 tablet:justify-between">
                      <div className="relative tablet:w-1/2">
                        <CustomLabel title="Email Address" />
                        <FormikCustomInput
                          className={`rounded-md w-full h-[50px] mt-2 border border-citiGray-300`}
                          container="!px-0"
                          id="email"
                          inputClassName="placeholder:text-14 placeholder:text-citiGray-300"
                          name="email"
                          placeholder="johndoe@gmail.com"
                          type="email"
                        />
                        <div className="absolute top-10 right-5">
                          <StatusBadge customClass="!bg-white !text-citiBlue-400 !font-bold" icon="tickCircleBlue" status="VERIFIED" success={true} />
                        </div>
                      </div>

                      <div className="relative tablet:w-1/2 tablet:pl-7 mt-5  tablet:mt-0">
                        <CustomLabel title="Phone Number" />
                        <FormikCustomInput
                          className={`rounded-md w-full h-[50px] mt-2 border border-citiGray-300`}
                          container="!px-0"
                          id="phoneNumber"
                          inputClassName="placeholder:text-14 placeholder:text-citiGray-300"
                          name="phoneNumber"
                          placeholder="+234905847839"
                          type="text"
                        />
                        <div className="absolute top-10 right-5">
                          <StatusBadge customClass="!bg-white !text-citiRed-600 !font-bold" status="VERIFY NOW" />
                        </div>
                      </div>
                    </div>
                    <div className="tablet:mt-6 tablet:flex px-4 mt-4 tablet:p-0 tablet:justify-between">
                      <div className="tablet:w-1/2">
                        <CustomLabel title="Gender" />
                        <FormikCustomInput
                          className={`rounded-md w-full h-[50px] mt-2 border border-citiGray-300`}
                          container="!px-0"
                          id="gender"
                          inputClassName="placeholder:text-14 placeholder:text-citiGray-300"
                          name="gender"
                          placeholder="Male"
                          type="text"
                        />
                      </div>
                      <div className="mt-5 tablet:mt-0 tablet:w-1/2 tablet:pl-7">
                        <CustomLabel title="Country" />
                        <FormikCustomInput
                          className={`rounded-md w-full h-[50px] mt-2 border border-citiGray-300`}
                          container="!px-0"
                          id="country"
                          inputClassName="placeholder:text-14 placeholder:text-citiGray-300"
                          name="country"
                          placeholder="Nigeria"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pr-4 tablet:pr-[54px]">
                  <div className="flex justify-end">
                    <CustomButton customClass="!text-red-600 text-12 !border-none mr-4 tablet:mr-0  font-bold" handleClick={() => router.push("/account")} title="CANCEL" />
                    <CustomButton
                      customClass="text-14"
                      handleClick={() => {}}
                      size={ButtonProperties.SIZES.small}
                      title="Save Changes"
                      type="submit"
                      variant={ButtonProperties.VARIANT.secondary.name}
                    />
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
