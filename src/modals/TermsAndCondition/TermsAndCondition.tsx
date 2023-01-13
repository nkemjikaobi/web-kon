import { useMutation } from "@apollo/client";
import { Formik, FormikHelpers, Form } from "formik";
import moment from "moment";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { AppState } from "src/store/rootReducer";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import Icon from "@components/atoms/Icons";
import { citiToast } from "@components/atoms/Toast";
import FormikCustomCheckbox from "@components/molecules/FormikCustomCheckbox";

import { CREATE_BOOKING } from "@graphql/booking/mutations";

import { ButtonProperties, formatTime, NotificationTypes, Status } from "@shared/libs/helpers";

import { Values } from "../ReservationInfo/ReservationInfo";

interface TermsAndConditionProps {
  setShowReservationForm: Function;
  bookingDetails: Values | null;
}

const TermsAndCondition: React.FC<TermsAndConditionProps> = ({ setShowReservationForm, bookingDetails }) => {
  const [createBooking, { data, loading, error }] = useMutation(CREATE_BOOKING);
  const { currentProduct } = useSelector((state: AppState) => state.product);

  const router = useRouter();

  const handleSubmit = async (values: Values, actions: FormikHelpers<Values>) => {
    await createBooking({
      variables: {
        createBookingInput: { ...bookingDetails },
      },
    });
  };

  useEffect(() => {
    const element = document.getElementById("terms");
    if (element) {
      element.scrollTop = 0;
    }
  }, []);

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
    termsAndCondition: false,
  };

  interface Values {
    termsAndCondition: boolean;
  }

  return (
    <div className="pt-6 bg-[#FAFDFF] pb-[5.625rem] rounded-md text-black relative overflow-y-scroll h-[31rem] smallLaptop:h-[43.5rem]" id="terms">
      <div className="flex justify-between items-center px-8">
        <div className="w-[16rem]">
          <h1 className="text-24 font-bold whitespace-nowrap">Terms and Conditions</h1>
          <p className="text-12 mt-2 text-citiBlue-b200">Updated {formatTime(moment())}</p>
        </div>
        <Icon className="cursor-pointer" name="close" onClick={() => setShowReservationForm(false)} />
      </div>
      <p className="text-14 mt-4 mb-8 leading-6 px-8" dangerouslySetInnerHTML={{ __html: currentProduct?.termsCondition }} />

      <div>
        <div>
          <Formik enableReinitialize initialValues={initialState} onSubmit={handleSubmit}>
            {({ values, handleChange }) => (
              <Form>
                <div className="">
                  <div className="flex items-center space-x-6">
                    <div className="w-[14.688rem] mb-8 pl-4 smallLaptop:pl-8">
                      <FormikCustomCheckbox
                        checked={values.termsAndCondition}
                        className="border-citiGray-200 w-5 h-5  rounded-lg"
                        label="I agree to Terms & Conditions"
                        labelClassName="text-16 font-normal whitespace-nowrap"
                        labelPosition="end"
                        name="termsAndCondition"
                        onChange={handleChange}
                        type="checkbox"
                      />
                    </div>
                  </div>
                  <div className="mt-24 flex justify-center items-center fixed w-full bottom-0 h-[5.313rem] bg-white">
                    <CustomButton
                      customClass="fixed bottom-5 w-[90%]"
                      handleClick={() => {}}
                      isDisabled={!values.termsAndCondition || loading}
                      isSubmitting={loading}
                      size={ButtonProperties.SIZES.big}
                      title="ACCEPT AND PROCEED"
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

export default TermsAndCondition;
