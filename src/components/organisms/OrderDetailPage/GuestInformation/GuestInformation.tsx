import React, { useState } from "react";

import Icon from "@components/atoms/Icons";

const GuestInformation = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  // const [active, setActive] = useState<number>(-1);

  return (
    <div className="mt-12 relative">
      <div className="bg-citiGray-100 pl-8 smallLaptop:pl-12 py-4 h-[2.75rem] flex justify-between items-center cursor-pointer " onClick={() => setIsVisible(!isVisible)}>
        <h4 className="uppercase text-14 font-bold text-citiBlue-600"> guest information</h4>
        {isVisible ? <Icon className="absolute right-10" name="caretUp" /> : <Icon className="absolute right-10" name="caretDown2" />}
      </div>
      {isVisible && (
        <div className="">
          {/* {GuestInformationData.map((guest) => (
            <div key={guest.id}>
              <div
                className={`flex justify-between items-center  p-5 cursor-pointer ${active === guest.id ? "bg-citiGray-50" : "bg-white"}`}
                key={guest.id}
                onClick={() => setActive(guest.id)}
              >
                <p className="font-normal text-12 tablet:text-16 text-citiBlue-900">{guest.name}</p>
                {active === guest.id ? <Icon className="absolute right-10" name="caretUp" /> : <Icon className="absolute right-10" name="caretDown2" />}
              </div>
              {active === guest.id && (
                <div className="flex tablet:items-center flex-col tablet:flex-row bg-citiGray-50 smallLaptop:h-[4.688rem]"> */}
          {/* <p className="text-14 tablet:text-16 font-normal tablet:space-x-4 mb-2 p-5 flex items-center flex-col tablet:flex-row">
                    <p>Email: {guest.email}</p> <p className="my-4">Phone: {guest.phone}</p> <p>Gender: {guest.gender}</p>
                  </p> */}
          {/* <p className="pl-5 pb-3 text-12 tablet:text-16">Email: {guest.email}</p>
                  <p className="pl-5 pb-3 text-12 tablet:text-16">Phone: {guest.phone}</p>
                  <p className="pl-5 pb-3 text-12 tablet:text-16">Gender: {guest.gender}</p>
                  <p className="text-12 tablet:text-16 pl-5 pb-3 font-normal capitalize">Preffered Masseuse: {guest.preferredMasseuese}</p>
                </div>
              )}
              <hr />
            </div>
          ))} */}
          <div>
            <div className={`flex justify-between items-center  p-5 cursor-pointer`}>
              <p className="font-normal text-12 tablet:text-16 text-citiBlue-900">No guest information available</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GuestInformation;

// const GuestInformationData = [
//   {
//     id: 1,
//     name: "GUEST 1  - Emmanuel Ekpenyong",
//     email: "oshiomolefrankl@gmail.com",
//     gender: "male",
//     phone: "+234 706 970 2347",
//     preferredMasseuese: "male",
//   },
//   {
//     id: 2,
//     name: "GUEST 2  - Derick Obi",
//     email: "derickobi@gmail.com",
//     gender: "male",
//     phone: "+234 706 970 2347",
//     preferredMasseuese: "male",
//   },
//   {
//     id: 3,
//     name: "GUEST 3  - Sandra Ikebe",
//     email: "sandraikebe@gmail.com",
//     gender: "male",
//     phone: "+234 706 970 2347",
//     preferredMasseuese: "male",
//   },
//   {
//     id: 4,
//     name: "GUEST 4  - Roberto Mancini",
//     email: "robbyman@gmail.com",
//     gender: "male",
//     phone: "+234 706 970 2347",
//     preferredMasseuese: "male",
//   },
//   {
//     id: 5,
//     name: "GUEST 5  - Eniola Holmes",
//     email: "eniholmes@gmail.com",
//     gender: "male",
//     phone: "+234 706 970 2347",
//     preferredMasseuese: "male",
//   },
// ];
