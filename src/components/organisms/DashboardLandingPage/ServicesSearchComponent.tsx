import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import { citiToast } from "@components/atoms/Toast";
import FormikCustomInput from "@components/molecules/FormikCustomInput";
import FormikCustomSelect from "@components/molecules/FormikPhoneInput/FormikCustomSelect";

import { ButtonProperties, checkProperties, CitiServices, NotificationTypes } from "@shared/libs/helpers";

import "react-datepicker/dist/react-datepicker.css";
import { ServiceSearchMobile } from "./SearchSearchMobile";
import { IServiceSubMenu } from "./ServicesSubMenu";

interface ServicesImageComponentProps {
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

const ServicesSearchComponent = ({ categoryList, entity }: ServicesImageComponentProps) => {
  const router = useRouter();

  const handleSubmit = async (values: Values, actions: FormikHelpers<Values>) => {
    toast.dismiss();

    // Check if all are empty
    const isEmpty = checkProperties(values);
    if (isEmpty) {
      citiToast(NotificationTypes.INFO, "No filters applied...");
      return;
    }

    const filterValues = { ...values };

    Object.entries(filterValues).forEach(([key, value]) => {
      if (!value) delete filterValues[key as ValueKeys];
    });

    router.push({
      pathname: `/${entity}/search`,
      query: filterValues.category ? { ...filterValues } : { ...filterValues, category: categoryList![0].urlKey },
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
    <>
      <ServiceSearchMobile categoryList={categoryList} entity={entity} />
      <Formik enableReinitialize initialValues={initialState} onSubmit={handleSubmit}>
        {({ setFieldValue, values }: FormikProps<Values>) => (
          <Form>
            <div className="hidden smallLaptop:flex bg-white items-center justify-around h-[4rem] p-5 mb-4">
              {(entity === CitiServices.VACATION.name || entity === CitiServices.REAL_ESATE.name) && (
                <FormikCustomInput
                  className="border rounded-[0.125rem] h-[2.813rem] mr-4"
                  container="!pl-0 !pr-[0.3rem]"
                  icon="mapMarker"
                  iconPosition="end"
                  inputClassName="placeholder:text-xs mobileBelow:ml-4 border-black"
                  name="location"
                  placeholder="Enter Location"
                  type="text"
                />
              )}
              {(entity === CitiServices.VACATION.name || entity === CitiServices.REAL_ESATE.name) && (
                <>
                  {/* <FormikCustomInput
                    className="border rounded-[0.125rem] h-[2.813rem] mr-4"
                    container="!pl-0 !pr-[0.3rem]"
                    defaultValue={values.category}
                    icon="dollar"
                    iconPosition="end"
                    inputClassName="placeholder:text-xs mobileBelow:ml-4 border-black"
                    name="category"
                    placeholder="Category"
                    type="text"
                  /> */}
                  <FormikCustomSelect
                    className=" mr-4 ml-0"
                    container="mr-4"
                    name="category"
                    onChange={(e: any) => setFieldValue("category", e.target.value)}
                    options={getCategoryOptions()}
                    parentContainer="h-[2.813rem] rounded-[0.125rem] mr-4"
                    placeholder="category"
                    value={values.category}
                  />
                  {/* <FormikCustomSelect className="text-xs text-citiGray-500" parentContainer="h-[2.813rem] rounded-[0.125rem] mx-4" placeholder="Category" />
                  <FormikCustomSelect className="text-xs text-citiGray-500" parentContainer="h-[2.813rem] rounded-[0.125rem] mx-4" placeholder="SubCategory" /> */}
                </>
              )}
              {(entity === CitiServices.VACATION.name || entity === CitiServices.REAL_ESATE.name) && (
                <>
                  <FormikCustomInput
                    className="border rounded-[0.125rem] h-[2.813rem] mr-4"
                    container="!pl-0 !pr-[0.3rem]"
                    icon="naira"
                    iconClass="w-4 h-4"
                    iconPosition="end"
                    inputClassName="placeholder:text-xs mobileBelow:ml-4 border-black"
                    name="price"
                    placeholder="Enter Amount"
                    type="text"
                  />
                </>
              )}
              <CustomButton
                customClass="!w-[9.813rem] h-[2.813rem]"
                handleClick={() => {}}
                size={ButtonProperties.SIZES.medium}
                title="Search"
                type="submit"
                variant={ButtonProperties.VARIANT.secondary.name}
              />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ServicesSearchComponent;
