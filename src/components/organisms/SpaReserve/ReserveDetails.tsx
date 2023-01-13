import { useState } from "react";

import LargeRadioButton from "@components/atoms/LargeRadioButton/LargeRadioButton";

import BookForMeForm from "./BookForMeForm";
import BookForOthers from "./BookForOthers";

const ReserveDetails = () => {
  const [singleUser, setSingleUser] = useState(true);
  const [moreUser, setMoreUser] = useState(false);
  const [checked, setChecked] = useState(true);

  const handleSingleUser = () => {
    setChecked(!checked);
    setSingleUser(true);
    setMoreUser(false);
  };

  const handleMoreUser = () => {
    setChecked(!checked);
    setMoreUser(true);
    setSingleUser(false);
  };

  return (
    <div className="bg-white mt-4 tablet:mt-6 pt-8 pb-24 mb-8">
      <div>
        <h1 className="font-bold text-14 tablet:text-16 mb-6 pl-4 text-citiBlue-250">RESERVATION DETAILS</h1>
        <hr />
        <div className="tablet:flex tablet:justify-between mt-6 tablet:mt-12 p-4">
          <LargeRadioButton
            checked={checked}
            containerClass={`border rounded-lg tablet:w-[31rem] text-14 tablet:text-16  ${singleUser == true ? "bg-[#E3F0F8]" : ""}`}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            icon="singleUser"
            onChange={handleSingleUser}
            title="Book For Me"
          />
          <LargeRadioButton
            checked={!checked}
            containerClass={`tablet:!ml-5 text-14 tablet:text-16 mt-3 tablet:mt-0 border rounded-lg tablet:w-[31rem] ${moreUser == true ? "bg-[#E3F0F8]" : ""}`}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            icon="moreUser"
            onChange={handleMoreUser}
            title="Book For Others"
          />
        </div>
      </div>
      {singleUser && <BookForMeForm />}
      {moreUser && <BookForOthers />}
    </div>
  );
};

export default ReserveDetails;
