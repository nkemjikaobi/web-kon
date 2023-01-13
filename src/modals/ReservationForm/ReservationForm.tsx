import { useMutation, useQuery } from "@apollo/client";
import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import { isEmpty } from "lodash";
import { useRouter } from "next/router";
import React, { useState, FC, useEffect } from "react";
import ReactDatePicker from "react-datepicker";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { AppState } from "src/store/rootReducer";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomInput from "@components/atoms/CustomInput/CustomInput";
import CustomLabel from "@components/atoms/CustomLabel/CustomLabel";
import { citiToast } from "@components/atoms/Toast";
import FormikCustomInput from "@components/molecules/FormikCustomInput";

import { GET_USER } from "@graphql/auth/queries";
import { CREATE_BOOKING } from "@graphql/booking/mutations";

import { ReservationSchema } from "@schemas/Reservations/index";

import { UserProps } from "@dto/User/UserProps";

import { ButtonProperties, LocalStorageKeys, NotificationTypes, Status } from "@shared/libs/helpers";

interface ReservationFormProps {
  setShowReservationForm: Function;
}

const ReservationForm: FC<ReservationFormProps> = ({ setShowReservationForm }) => {
  const router = useRouter();

  const { numPerson, timeRange, date, entity, sku } = router.query || {};
  const [departureDate, setDepartureDate] = useState<Date | undefined>(date ? new Date(date as string) : undefined);
  const [user, setUser] = useState<UserProps>();
  const [createBooking, { data, loading, error }] = useMutation(CREATE_BOOKING);
  const { currentProduct } = useSelector((state: AppState) => state.product);

  const { data: getUserData, error: getUserError } = useQuery(GET_USER);

  const handleSubmit = async (values: Values, actions: FormikHelpers<Values>) => {
    toast.dismiss();
    if (user && !isEmpty(currentProduct) && localStorage.getItem(LocalStorageKeys.TOKEN)) {
      await createBooking({
        variables: {
          createBookingInput: {
            customerId: user._id,
            catalogProductEntityId: currentProduct?.entity._id,
            catalogProductCategoryId: currentProduct?.category._id,
            productId: currentProduct?._id,
            numPerson: String(values.numPerson),
            arrivalTime: departureDate,
            timeRange: String(values.timeRange),
          },
        },
      });
    } else {
      citiToast(NotificationTypes.ERROR, "Please sign in before making a reservation", 3000);
      router.push(`/auth/login?rdr=/${entity}/${sku}&numPerson=${values.numPerson}&timeRange=${values.timeRange}&date=${departureDate}`);
    }
  };

  useEffect(() => {
    if (data) {
      const { status, data: reservationData } = data.createBooking;

      if (status === Status.SUCCESS) {
        router.push(`/payment/${reservationData.orderId}`);
      }
      if (status === Status.FAILED) {
        citiToast(NotificationTypes.ERROR, "An error occurred");
      }
    }
  }, [data, error]);

  useEffect(() => {
    if (getUserData) {
      const { status, data: result } = getUserData.getUser;

      if (status === Status.SUCCESS) {
        setUser(result.user);
      }
    }
  }, [getUserData, getUserError]);

  const initialState = {
    customerId: "",
    catalogProductEntityId: "",
    catalogProductCategoryId: "",
    numPerson: (numPerson as string) || "",
    arrivalTime: "",
    timeRange: (timeRange as string) || "",
  };

  interface Values {
    customerId: string;
    catalogProductEntityId: string;
    catalogProductCategoryId: string;
    numPerson: string;
    arrivalTime: string;
    timeRange: string;
  }

  return (
    <>
      <Formik enableReinitialize initialValues={initialState} onSubmit={handleSubmit} validationSchema={ReservationSchema}>
        {(props: FormikProps<Values>) => (
          <Form>
            <div className="h-[24.375rem] bg-[#FAFDFF] rounded-md">
              <div className="py-5 px-4">
                <div className="">
                  <CustomLabel className="text-citiDarkText text-14 font-normal font-nunitoSans" id="date" title="Date" />
                  <ReactDatePicker
                    customInput={
                      <CustomInput
                        className="border rounded-[0.125rem] h-[2.813rem] mr-4 mt-2 mb-4"
                        container="!pl-0 !pr-[0.3rem]"
                        icon="calendar2"
                        iconPosition="end"
                        id="date"
                        inputClassName="placeholder:text-xs mobileBelow:ml-4 border-black bg-citiBlue-80"
                        name="arrivalTime"
                        required
                        type="text"
                        value=""
                      />
                    }
                    dateFormat="yyyy-MM-dd"
                    minDate={new Date()}
                    name="arrivalTime"
                    onChange={(date: Date) => setDepartureDate(date)}
                    placeholderText={"Select Date"}
                    required
                    selected={departureDate}
                  />
                </div>
                <div className="">
                  <CustomLabel className="text-citiDarkText text-14 font-normal font-nunitoSans" id="duration" title="Duration" />
                  <FormikCustomInput
                    className="border rounded-[0.125rem] h-[2.813rem] mr-4 mt-2 mb-4 "
                    container="!pl-0 !pr-[0.3rem]"
                    icon="clock"
                    iconPosition="end"
                    id="duration"
                    inputClassName="placeholder:text-xs mobileBelow:ml-4 border-black bg-citiBlue-80"
                    name="timeRange"
                    placeholder="2 hrs"
                    type="number"
                  />
                </div>
                <div className="">
                  <CustomLabel className="text-citiDarkText text-14 font-normal font-nunitoSans" id="persons" title="No of Persons" />
                  <FormikCustomInput
                    className="border rounded-[0.125rem] h-[2.813rem] mr-4 mt-2 mb-4 "
                    container="!pl-0 !pr-[0.3rem]"
                    icon="users"
                    iconPosition="end"
                    id="numPerson"
                    inputClassName="placeholder:text-xs mobileBelow:ml-4 border-black bg-citiBlue-80"
                    name="numPerson"
                    type="number"
                  />
                </div>
                <div className="">
                  <CustomButton
                    customClass="my-4 !w-full"
                    handleClick={() => {}}
                    isDisabled={loading}
                    isSubmitting={loading}
                    size={ButtonProperties.SIZES.big}
                    title="Reserve"
                    type="submit"
                    variant={ButtonProperties.VARIANT.secondary.name}
                  />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ReservationForm;
