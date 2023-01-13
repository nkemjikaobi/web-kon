import { useMutation } from "@apollo/client";
import { Formik, FormikHelpers, FormikProps, Form } from "formik";
import { isEmpty } from "lodash";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { AppState } from "src/store/rootReducer";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomInput from "@components/atoms/CustomInput/CustomInput";
import Icon from "@components/atoms/Icons";
import { citiToast } from "@components/atoms/Toast";
import FormikCustomInput from "@components/molecules/FormikCustomInput";

import { CREATE_BOOKING } from "@graphql/booking/mutations";

import { ReservationSchema } from "@schemas/Reservations";

import { ButtonProperties, ENTITIES, LocalStorageKeys, NotificationTypes, Status } from "@shared/libs/helpers";

interface ReservationDetailsProps {
  setBookingDetails: Function;
  setShowReservationForm: Function;
  setShowTermsAndCondition: Function;
}

export interface Values {
  customerId: string;
  catalogProductEntityId: string;
  catalogProductCategoryId: string;
  numPerson: string;
  arrivalTime: string;
  timeRange: string;
}

const ReservationDetails: React.FC<ReservationDetailsProps> = ({ setShowTermsAndCondition, setBookingDetails, setShowReservationForm }) => {
  const router = useRouter();

  const { numPerson, timeRange, date, entity, sku } = router.query || {};
  const { currentProduct } = useSelector((state: AppState) => state.product);
  const [createBooking, { data, loading, error }] = useMutation(CREATE_BOOKING);

  const [departureDate, setDepartureDate] = useState<Date | undefined>(
    date ? new Date(date as string) : currentProduct?.arrivalTime ? new Date(currentProduct?.arrivalTime) : undefined
  );

  const { user } = useSelector((state: AppState) => state.auth);

  const handleSubmit = async (values: Values, actions: FormikHelpers<Values>) => {
    toast.dismiss();
    if (user && !isEmpty(currentProduct) && localStorage.getItem(LocalStorageKeys.TOKEN)) {
      const details = {
        customerId: user._id,
        catalogProductEntityId: currentProduct?.entity._id,
        catalogProductCategoryId: currentProduct?.category._id,
        productId: currentProduct?._id,
        numPerson: String(values.numPerson),
        arrivalTime: departureDate,
        timeRange: String(values.timeRange),
      };
      setBookingDetails(details);
      if (currentProduct?.termsCondition) {
        setShowTermsAndCondition(true);
      } else {
        await createBooking({
          variables: {
            createBookingInput: { ...details },
          },
        });
      }
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

  const initialState = {
    customerId: "",
    catalogProductEntityId: "",
    catalogProductCategoryId: "",
    numPerson: (numPerson as string) || "",
    arrivalTime: "",
    timeRange: (timeRange as string) || currentProduct?.timeRange || "",
  };

  return (
    <div className="px-6 pt-6 bg-[#FAFDFF] rounded-md text-black">
      <div className="flex justify-between items-center">
        <div className="w-[16rem]">
          <h1 className="text-24 font-bold">Reservation Info</h1>
          <p className="text-14 text-citiBlue-b200">Complete the form to make a reservation</p>
        </div>
        <Icon className="cursor-pointer" name="close" onClick={() => setShowReservationForm(false)} />
      </div>
      <div className="bg-citiBlue-b50 whitespace-nowrap pt-4 pb-[1.438rem] mt-6 mb-8 flex justify-between items-center">
        <div className="flex items-center space-x-[1.5rem]">
          <div className="ml-4">
            <h4 className="uppercase text-10 font-bold text-citiBlue-b600">product name</h4>
            <p className="font-bold text-citiBlue-b900 text-14">{currentProduct?.name}</p>
          </div>
          {/* <div>
            <h4 className="uppercase text-10 font-bold text-citiBlue-b600">package</h4>
            <p className="font-bold text-citiBlue-b900 text-14">Couple trip plan</p>
          </div> */}
          <div>
            <h4 className="uppercase text-10 font-bold text-citiBlue-b600">amount</h4>
            <p className="font-bold text-citiBlue-b900 text-14">NGN {currentProduct?.price?.toLocaleString()}</p>
          </div>
        </div>
        <span className="hidden text-citiBlue-400 uppercase font-bold text-14 mr-4 cursor-pointer" onClick={() => setShowReservationForm(false)}>
          change package
        </span>
      </div>
      <div>
        <h5 className="uppercase text-12 font-bold mb-6">reservation information</h5>
        <div>
          <Formik enableReinitialize initialValues={initialState} onSubmit={handleSubmit} validationSchema={ReservationSchema}>
            {(props: FormikProps<Values>) => (
              <Form>
                <div className="h-[20.375rem] bg-[#FAFDFF] rounded-md">
                  <div className="smallLaptop:flex smallLaptop:space-x-6">
                    <div className="smallLaptop:w-[14.688rem]">
                      <FormikCustomInput
                        className="border rounded-[0.125rem] h-[2.813rem] mr-4 mt-2 mb-4 "
                        container="!pl-0 !pr-[0.3rem]"
                        disabled={currentProduct?.timeRange !== "" && true}
                        icon="clock"
                        iconPosition="end"
                        id="duration"
                        inputClassName="placeholder:text-xs mobileBelow:ml-4 border-black bg-citiBlue-80"
                        name="timeRange"
                        placeholder={entity === ENTITIES.SPA ? "Duration (in hrs)" : "Duration (in days)"}
                        type="text"
                      />
                    </div>
                    <div className="smallLaptop:w-[14.688rem]">
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
                        disabled={currentProduct?.arrivalTime !== "" && true}
                        minDate={new Date()}
                        name="arrivalTime"
                        onChange={(date: Date) => setDepartureDate(date)}
                        placeholderText={"Select arrival date"}
                        required
                        selected={departureDate}
                      />
                    </div>
                    <div className="smallLaptop:w-[14.688rem]">
                      <FormikCustomInput
                        className="border rounded-[0.125rem] h-[2.813rem] mr-4 mt-2 mb-4 "
                        container="!pl-0 !pr-[0.3rem]"
                        icon="users"
                        iconPosition="end"
                        id="numPerson"
                        inputClassName="placeholder:text-xs mobileBelow:ml-4 border-black bg-citiBlue-80"
                        name="numPerson"
                        placeholder="Number of Persons"
                        type="number"
                      />
                    </div>
                  </div>
                  <div className="mt-8 smallLaptop:mt-24 flex justify-center items-center">
                    <CustomButton
                      customClass="w-full"
                      handleClick={() => {}}
                      isDisabled={loading}
                      isSubmitting={loading}
                      size={ButtonProperties.SIZES.big}
                      title="MAKE RESERVATION"
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

export default ReservationDetails;
