import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import moment from "moment";
import { useRouter } from "next/router";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { toast } from "react-toastify";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomInput from "@components/atoms/CustomInput/CustomInput";
import Icon from "@components/atoms/Icons";
import { citiToast } from "@components/atoms/Toast";
import FormikCustomInput from "@components/molecules/FormikCustomInput";
import FormikCustomSelect from "@components/molecules/FormikPhoneInput/FormikCustomSelect";

import { ButtonProperties, checkProperties, NotificationTypes } from "@shared/libs/helpers";

import { IServiceSubMenu } from "./ServicesSubMenu";

interface ServiceSearchMobileProps {
  entity: string;
  categoryList: IServiceSubMenu[] | null;
}

type ValueKeys = "category" | "location" | "price" | "arrivalTime" | "timeRange";

interface Values {
  category: string;
  location: string;
  price: string;
  arrivalTime: string;
  timeRange: string;
}

export const ServiceSearchMobile = ({ entity, categoryList }: ServiceSearchMobileProps) => {
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
  const [departureDate, setDepartureDate] = useState<Date | undefined>();

  const router = useRouter();

  const handleSubmit = async (values: Values, actions: FormikHelpers<Values>) => {
    toast.dismiss();

    // Check if all are empty
    const isEmpty = checkProperties(values);
    if (isEmpty && !departureDate) {
      citiToast(NotificationTypes.INFO, "No filters applied...");
    }

    let date = "";

    if (departureDate) {
      date = moment(departureDate).format("DD MMM YYYY");
    }

    let filterValues = { ...values };

    Object.entries(filterValues).forEach(([key, value]) => {
      if (!value) delete filterValues[key as ValueKeys];
    });

    if (date) {
      filterValues = { ...values, arrivalTime: date };
    }

    setIsSearchActive(false);

    router.push({
      pathname: `/${entity}/search`,
      query: { ...filterValues },
    });
  };

  const initialState = {
    category: (router.query.category as string) || "",
    location: (router.query.location as string) || "",
    price: (router.query.price as string) || "",
    arrivalTime: (router.query.arrivalTime as string) || "",
    timeRange: (router.query.timeRange as string) || "",
  };

  const getCategoryOptions = () => {
    return (categoryList || []).map((category) => ({ text: category.name, value: category.urlKey }));
  };

  return (
    <Formik enableReinitialize initialValues={initialState} onSubmit={handleSubmit}>
      {({ setFieldValue, values }: FormikProps<Values>) => (
        <Form>
          <div className="block smallLaptop:hidden">
            {isSearchActive ? (
              <div className="bg-[#EFF7FB] py-16 px-4 fixed top-0 left-0 h-screen w-screen z-[999] transition-all duration-500">
                <div className="bg-white rounded pt-6 px-4 pb-20">
                  <span className="block text-white cursor-pointer mb-14" onClick={() => setIsSearchActive(false)}>
                    <Icon name="goBackArrow" />
                  </span>

                  {/* <p className="text-black mb-4 font-nunitoSans text-20 font-bold">Where to?</p> */}

                  <FormikCustomInput
                    className="border rounded h-[2.813rem] mr-4 mb-4 w-full border-[#A6B7C0]"
                    icon="search"
                    iconPosition="start"
                    inputClassName="placeholder:text-xs mobileBelow:ml-4 border-black pl-0"
                    name="location"
                    placeholder="Enter location"
                    type="text"
                  />
                  <FormikCustomSelect
                    className="mr-4 ml-0"
                    container="mr-4"
                    name="category"
                    onChange={(e: any) => setFieldValue("category", e.target.value)}
                    options={getCategoryOptions()}
                    parentContainer="h-[2.813rem] rounded-[0.125rem] mr-4 mb-4 border-[0.084rem] !border-[#A6B7C0]"
                    placeholder="category"
                    value={values.category}
                  />
                  {entity.includes("vacation") && (
                    <DatePicker
                      customInput={
                        <FormikCustomInput
                          className="border rounded h-[2.813rem] mr-4 mb-4 w-full border-[#A6B7C0]"
                          icon="calendar2"
                          iconPosition="start"
                          inputClassName="placeholder:text-xs ml-4 pl-0"
                          name="arrivalTime"
                          type="text"
                        />
                      }
                      dateFormat="yyyy-MM-dd"
                      minDate={new Date()}
                      name="arrivalTime"
                      onChange={(date: Date) => setDepartureDate(date)}
                      placeholderText={"Select Date"}
                      selected={departureDate}
                    />
                  )}
                  {/* <CustomInput
                      className="border rounded h-[2.813rem] mr-4 mb-4 w-full border-[#A6B7C0]"
                      icon="persons"
                      iconPosition="start"
                      inputClassName="placeholder:text-xs mobileBelow:ml-4 pl-0"
                      name="location"
                      onChange={() => {}}
                      placeholder="No Of Persons"
                      required
                      type="text"
                      value=""
                    /> */}
                  <FormikCustomInput
                    className="border rounded h-[2.813rem] mr-4 mb-4 w-full border-[#A6B7C0]"
                    icon="naira"
                    iconClass="w-4 h-4"
                    iconPosition="start"
                    inputClassName="placeholder:text-xs mobileBelow:ml-4 pl-0"
                    name="price"
                    placeholder="Enter Amount"
                    type="text"
                  />
                  {entity.includes("vacation") && (
                    <FormikCustomInput
                      className="border rounded h-[2.813rem] mr-4 mb-4 w-full border-[#A6B7C0]"
                      icon="clock"
                      iconPosition="start"
                      inputClassName="placeholder:text-xs mobileBelow:ml-4 pl-0"
                      name="timeRange"
                      placeholder="Select Duration"
                      type="text"
                    />
                  )}
                  <CustomButton
                    customClass="ml-auto mt-12 rounded-none"
                    handleClick={() => {}}
                    size={ButtonProperties.SIZES.medium}
                    title="Search"
                    type="submit"
                    variant={ButtonProperties.VARIANT.secondary.name}
                  />
                </div>
              </div>
            ) : (
              <div className="p-1 bg-white mb-4">
                <CustomInput
                  className="border rounded-[0.125rem] h-[2.813rem] mr-4 w-full"
                  icon="search"
                  iconPosition="start"
                  inputClassName="placeholder:text-xs mobileBelow:ml-4 border-black"
                  name="location"
                  onFocus={() => setIsSearchActive(true)}
                  placeholder=""
                  readOnly
                  required
                  type="text"
                  value=""
                />
              </div>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};
