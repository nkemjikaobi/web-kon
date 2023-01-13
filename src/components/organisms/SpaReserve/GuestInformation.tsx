import { Formik, Form } from "formik";

import Accordian from "@components/atoms/Accordian/Accordian";
import CustomLabel from "@components/atoms/CustomLabel/CustomLabel";
import FormikCustomInput from "@components/molecules/FormikCustomInput";
import FormikCustomSelect from "@components/molecules/FormikPhoneInput/FormikCustomSelect";
import FormikCustomPhoneInput from "@components/molecules/FormikPhoneInput/FormikPhoneInput";

import { BookForOthersSchema } from "./BookForOthers";

const GuestInformation = () => {
  const handleSubmit = async (values: any) => {
    console.log(values);
  };

  return (
    <div className="mt-12">
      <Accordian header="Guest 1 Information">
        <div>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phoneNumber: "",
              gender: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={BookForOthersSchema}
          >
            {({ values, handleChange, setFieldValue, handleBlur }) => (
              <Form>
                <div className="text-14">
                  <div className="tablet:ml-8 tablet:mt-4 tablet:flex p-4 tablet:p-0 tablet:justify-between">
                    <div className="rounded-md tablet:mr-24 tablet:w-1/2">
                      <div>
                        <CustomLabel title="3rd Party First Name" />
                        <FormikCustomInput
                          className={`rounded-md w-full h-[46px] mt-2 border border-citiGray-300`}
                          container="!px-0"
                          id="firstName"
                          inputClassName={`placeholder:text-14 placeholder:text-citiGray-300 bg-[#FAFBFC]`}
                          name="firstName"
                          placeholder="First Name"
                          type="text"
                        />
                      </div>
                      <div className="mt-4 tablet:mt-6">
                        <CustomLabel title="3rd Party Email Address" />
                        <FormikCustomInput
                          className={`rounded-md  w-full h-[46px] mt-2 border border-citiGray-300  `}
                          container="!pr-0 bg-[#FAFBFC]"
                          icon="email"
                          id="email"
                          inputClassName="placeholder:text-14 placeholder:text-citiGray-300 bg-[#FAFBFC]"
                          name="email"
                          placeholder="Your Email"
                          type="email"
                        />
                      </div>
                      <div className="mt-4 tablet:mt-6">
                        <CustomLabel title="Gender" />
                        <FormikCustomSelect
                          className={`rounded-md border text-14 border-citiGray-300 bg-[#FAFBFC]`}
                          container=" !h-[46px]"
                          name="gender"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          options={[
                            { text: "Male", value: "Male" },
                            { text: "Female", value: "Female" },
                          ]}
                          parentContainer="!mt-2"
                          placeholder="Select your gender"
                          value={values.gender}
                        />
                      </div>
                    </div>
                    <div className="mt-4 tablet:mt-0 tablet:w-1/2">
                      <div>
                        <CustomLabel title="3rd Party Last Name" />
                        <FormikCustomInput
                          className={`h-[46px] mt-2 rounded-md w-full border border-citiGray-300`}
                          container="!px-0"
                          id="lastName"
                          inputClassName="placeholder:text-14 placeholder:text-citiGray-300 bg-[#FAFBFC]"
                          name="lastName"
                          placeholder="Last Name"
                          type="text"
                        />
                      </div>

                      <div className="mt-4 tablet:mt-6">
                        <CustomLabel title="3rd Party Phone Number" />
                        <FormikCustomPhoneInput
                          className=" !mt-2"
                          id="phoneNumber"
                          inputClass="!w-full !h-[46px] !bg-[#FAFBFC]"
                          name="phoneNumber"
                          onBlur={handleBlur}
                          onChange={(value: string) => setFieldValue("phoneNumber", value)}
                          onCountryChange={(value: string) => setFieldValue("country", value.toUpperCase())}
                        />
                      </div>
                      <div className="mt-4 tablet:mt-6">
                        <CustomLabel title="Perferred Masseuse" />
                        <FormikCustomSelect
                          className={` rounded-md border text-14 border-citiGray-300 bg-[#FAFBFC]`}
                          container=" !h-[46px]"
                          name="Select your preferred masseuse"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          options={[
                            { text: "Male", value: "Male" },
                            { text: "Female", value: "Female" },
                          ]}
                          parentContainer="!mt-2"
                          placeholder="Select your gender"
                          value={values.gender}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Accordian>

      <Accordian header="Guest 2 Information">
        <div>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phoneNumber: "",
              gender: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={BookForOthersSchema}
          >
            {({ values, handleChange, setFieldValue, handleBlur }) => (
              <Form>
                <div>
                  <div className="tablet:ml-8 tablet:mt-4 tablet:flex p-4 tablet:p-0 tablet:justify-between">
                    <div className="rounded-md tablet:mr-24 tablet:w-1/2">
                      <div>
                        <CustomLabel title="3rd Party First Name" />
                        <FormikCustomInput
                          className={`rounded-md w-full h-[46px] mt-2 border border-citiGray-300`}
                          container="!px-0"
                          id="firstName"
                          inputClassName={`placeholder:text-14 placeholder:text-citiGray-300 bg-[#FAFBFC]`}
                          name="firstName"
                          placeholder="First Name"
                          type="text"
                        />
                      </div>
                      <div className="mt-4 tablet:mt-6">
                        <CustomLabel title="3rd Party Email Address" />
                        <FormikCustomInput
                          className={`rounded-md  w-full h-[46px] mt-2 border border-citiGray-300  `}
                          container="!pr-0 bg-[#FAFBFC]"
                          icon="email"
                          id="email"
                          inputClassName="placeholder:text-14 placeholder:text-citiGray-300 bg-[#FAFBFC]"
                          name="email"
                          placeholder="Your Email"
                          type="email"
                        />
                      </div>
                      <div className="mt-4 tablet:mt-6">
                        <CustomLabel title="Gender" />
                        <FormikCustomSelect
                          className={`rounded-md border text-14 border-citiGray-300 bg-[#FAFBFC]`}
                          container=" !h-[46px]"
                          name="gender"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          options={[
                            { text: "Male", value: "Male" },
                            { text: "Female", value: "Female" },
                          ]}
                          parentContainer="!mt-2"
                          placeholder="Select your gender"
                          value={values.gender}
                        />
                      </div>
                    </div>
                    <div className="mt-4 tablet:mt-0 tablet:w-1/2">
                      <div>
                        <CustomLabel title="3rd Party Last Name" />
                        <FormikCustomInput
                          className={`h-[46px] mt-2 rounded-md w-full border border-citiGray-300`}
                          container="!px-0"
                          id="lastName"
                          inputClassName="placeholder:text-14 placeholder:text-citiGray-300 bg-[#FAFBFC]"
                          name="lastName"
                          placeholder="Last Name"
                          type="text"
                        />
                      </div>

                      <div className="mt-4 tablet:mt-6">
                        <CustomLabel title="3rd Party Phone Number" />
                        <FormikCustomPhoneInput
                          className=" !mt-2"
                          id="phoneNumber"
                          inputClass="!w-full !h-[46px] !bg-[#FAFBFC]"
                          name="phoneNumber"
                          onBlur={handleBlur}
                          onChange={(value: string) => setFieldValue("phoneNumber", value)}
                          onCountryChange={(value: string) => setFieldValue("country", value.toUpperCase())}
                        />
                      </div>
                      <div className="mt-4 tablet:mt-6">
                        <CustomLabel title="Perferred Masseuse" />
                        <FormikCustomSelect
                          className={` rounded-md border text-14 border-citiGray-300 bg-[#FAFBFC]`}
                          container=" !h-[46px]"
                          name="Select your preferred masseuse"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          options={[
                            { text: "Male", value: "Male" },
                            { text: "Female", value: "Female" },
                          ]}
                          parentContainer="!mt-2"
                          placeholder="Select your gender"
                          value={values.gender}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Accordian>

      <Accordian header="Guest 3 Information">
        <div>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phoneNumber: "",
              gender: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={BookForOthersSchema}
          >
            {({ values, handleChange, setFieldValue, handleBlur }) => (
              <Form>
                <div>
                  <div className="tablet:ml-8 tablet:mt-4 tablet:flex p-4 tablet:p-0 tablet:justify-between">
                    <div className="rounded-md tablet:mr-24 tablet:w-1/2">
                      <div>
                        <CustomLabel title="3rd Party First Name" />
                        <FormikCustomInput
                          className={`rounded-md w-full h-[46px] mt-2 border border-citiGray-300`}
                          container="!px-0"
                          id="firstName"
                          inputClassName={`placeholder:text-14 placeholder:text-citiGray-300 bg-[#FAFBFC]`}
                          name="firstName"
                          placeholder="First Name"
                          type="text"
                        />
                      </div>
                      <div className="mt-4 tablet:mt-6">
                        <CustomLabel title="3rd Party Email Address" />
                        <FormikCustomInput
                          className={`rounded-md  w-full h-[46px] mt-2 border border-citiGray-300  `}
                          container="!pr-0 bg-[#FAFBFC]"
                          icon="email"
                          id="email"
                          inputClassName="placeholder:text-14 placeholder:text-citiGray-300 bg-[#FAFBFC]"
                          name="email"
                          placeholder="Your Email"
                          type="email"
                        />
                      </div>
                      <div className="mt-4 tablet:mt-6">
                        <CustomLabel title="Gender" />
                        <FormikCustomSelect
                          className={`rounded-md border text-14 border-citiGray-300 bg-[#FAFBFC]`}
                          container=" !h-[46px]"
                          name="gender"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          options={[
                            { text: "Male", value: "Male" },
                            { text: "Female", value: "Female" },
                          ]}
                          parentContainer="!mt-2"
                          placeholder="Select your gender"
                          value={values.gender}
                        />
                      </div>
                    </div>
                    <div className="mt-4 tablet:mt-0 tablet:w-1/2">
                      <div>
                        <CustomLabel title="3rd Party Last Name" />
                        <FormikCustomInput
                          className={`h-[46px] mt-2 rounded-md w-full border border-citiGray-300`}
                          container="!px-0"
                          id="lastName"
                          inputClassName="placeholder:text-14 placeholder:text-citiGray-300 bg-[#FAFBFC]"
                          name="lastName"
                          placeholder="Last Name"
                          type="text"
                        />
                      </div>

                      <div className="mt-4 tablet:mt-6">
                        <CustomLabel title="3rd Party Phone Number" />
                        <FormikCustomPhoneInput
                          className=" !mt-2"
                          id="phoneNumber"
                          inputClass="!w-full !h-[46px] !bg-[#FAFBFC]"
                          name="phoneNumber"
                          onBlur={handleBlur}
                          onChange={(value: string) => setFieldValue("phoneNumber", value)}
                          onCountryChange={(value: string) => setFieldValue("country", value.toUpperCase())}
                        />
                      </div>
                      <div className="mt-4 tablet:mt-6">
                        <CustomLabel title="Perferred Masseuse" />
                        <FormikCustomSelect
                          className={` rounded-md border text-14 border-citiGray-300 bg-[#FAFBFC]`}
                          container=" !h-[46px]"
                          name="Select your preferred masseuse"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          options={[
                            { text: "Male", value: "Male" },
                            { text: "Female", value: "Female" },
                          ]}
                          parentContainer="!mt-2"
                          placeholder="Select your gender"
                          value={values.gender}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Accordian>
    </div>
  );
};

export default GuestInformation;
