import { useSelector } from "react-redux";
import ReservationInfo from "src/modals/ReservationInfo/ReservationInfo";
import { AppState } from "src/store/rootReducer";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import ExpandableText from "@components/atoms/ExpandableText";

import { useWindowSize } from "@hooks/useWindowSize";

import { ButtonProperties } from "@shared/libs/helpers";

import ActivityGuideView from "./ActivityGuideView";

interface DescriptionEtAlProps {
  setShowReservationForm: Function;
  showReservationForm: boolean;
}

const DescriptionEtAl: React.FC<DescriptionEtAlProps> = ({ setShowReservationForm, showReservationForm }: DescriptionEtAlProps) => {
  const { currentProduct } = useSelector((state: AppState) => state.product);

  const [width] = useWindowSize();

  const isMobile = width < 600;

  const SummaryData = [
    {
      id: 1,
      price: currentProduct?.price,
      name: "Price For Session",
    },
    {
      id: 2,
      price: 0,
      name: "Service Fee",
    },
    {
      id: 3,
      price: currentProduct?.price,
      name: "Total",
      isTotal: true,
    },
  ];

  return (
    <>
      <div className={`${isMobile ? "grid" : "flex justify-between"}`}>
        <h4 className={`${isMobile ? "pr-0 order-last" : "break-all pr-24 text-14 bigLaptop:text-16 mt-3"}`}>
          <ExpandableText max={500} text={currentProduct?.description} />
        </h4>
        <div className={`${isMobile ? "mb-4" : ""}`}>
          <p className={`text-12 smallLaptop:text-16 ${isMobile ? "text-left" : "text-right"}`}>Per Person</p>
          <p className="text-20 smallLaptop:text-40 font-bold text-citiBlue-400">₦{currentProduct?.price?.toLocaleString()}</p>
        </div>
      </div>
      <p className="mt-6 font-bold text-14 bigLaptop:text-16 mb-2">Address</p>
      {currentProduct?.location ? (
        <p className="text-14 bigLaptop:text-16">
          {currentProduct?.location}, {currentProduct?.lga}, {currentProduct?.state}
        </p>
      ) : (
        <p className="text-14 bigLaptop:text-16">No address yet..</p>
      )}

      <hr className="smallLaptop:hidden mt-4" />
      {currentProduct?.entity.name?.toLowerCase() === "vacations" && (
        <>
          <p className="mt-6 font-bold text-14 bigLaptop:text-16 mb-2">Activities</p>
          <div className="grid grid-cols-1 tablet:grid-cols-3">
            <ActivityGuideView activities={currentProduct?.activities || []} />
          </div>
        </>
      )}
      {/* <div className="grid grid-cols-1 tablet:grid-cols-3 gap-2 text-14 bigLaptop:text-16">
        {AmenitiesData.map((amenity) => (
          <div className="flex my-2 items-center" key={amenity.id}>
            <Icon className="mr-4" name={amenity.icon} />
            <p>{amenity.name}</p>
          </div>
        ))}
      </div> */}
      <hr className="smallLaptop:hidden mt-4" />
      <div className="mt-4 text-14 bigLaptop:text-16">
        {SummaryData.map((summary) => (
          <div className="flex justify-between items-center mb-4" key={summary.id}>
            <p>{summary.name}</p>
            <p className={`font-bold ${summary.isTotal ? "text-citiBlue-400" : ""}`}>₦{summary.price?.toLocaleString()}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-[38px] pb-[64px]">
        <CustomButton
          customClass="hidden smallLaptop:flex smallLaptop:items-center text-14"
          handleClick={() => {
            setShowReservationForm(true);
          }}
          size={ButtonProperties.SIZES.big}
          title="MAKE RESERVATION"
          variant={ButtonProperties.VARIANT.secondary.name}
        />
      </div>
      {showReservationForm && (
        <CustomModal toggleVisibility={setShowReservationForm} visibility={showReservationForm}>
          <ReservationInfo setShowReservationForm={setShowReservationForm} />
        </CustomModal>
      )}
    </>
  );
};

export default DescriptionEtAl;

// const AmenitiesData = [
//   {
//     id: 1,
//     icon: "internet",
//     name: "Internet",
//   },
//   {
//     id: 2,
//     icon: "parking",
//     name: "Parking Space",
//   },
//   {
//     id: 3,
//     icon: "pool",
//     name: "Swimming Pool",
//   },
//   {
//     id: 4,
//     icon: "gym",
//     name: "Gym",
//   },
//   {
//     id: 5,
//     icon: "restaurant",
//     name: "Restaurant",
//   },
//   {
//     id: 6,
//     icon: "bar",
//     name: "Bar",
//   },
// ];
