import React from "react";

const GuideView = () => {
  return (
    <div className=" justify-start flex">
      <img alt="" className="h-[70px] ml-4 mt-4 object-cover rounded-md shadow-lg w-[70px]" src="https://i.pinimg.com/736x/1f/ca/5c/1fca5c8100da2c38f8d2b8712bbe0cb8.jpg" />

      <div className="ml-4 justify-start w-[723px] mt-4">
        <h2 className="text-citiBlue-b900 font-bold font-nunitoSans text-base">The Ultimate Travelers Guide (Uyo)</h2>
        <h4 className="text-citiBlue-b600 font-normal font-nunitoSans text-sm mt-1">
          This is the Ultimate Uyo experience! You will explore, enjoy and experience luxury and culture. The itinerary has been carefully created to allow you create the best
          memories. From staying a luxury hotel to seeing all the major landmarks, having a safari experience to learning about the culture of the Ibibios
        </h4>
      </div>

      {/* <div className="block w-[92px] ml-9 mt-5">
        <div className=" flex">
          <h2 className="font-bold font-nunitoSans text-base">
            NGN<span className="ml-1">20,000</span>
          </h2>
        </div>

        <h4 className="font-normal text-end mt-2 font-nunitoSans text-sm">Add during Reservation</h4>
      </div> */}
    </div>
  );
};

export default GuideView;
