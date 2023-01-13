import React from "react";

interface ChoicesProps {
  title: string;
  location: string;
  quantity: string;
}

const VactionChoices = ({ title, location, quantity }: ChoicesProps) => {
  return (
    <div className="bg-blur-100 backdrop-blur-[2px] text-white drop-shadow-md absolute p-3 w-[15rem] smallLaptop:p-5 tablet:min-w-[19.375rem] desktop:p-7">
      <h4 className="uppercase text-xs smallLaptop:text-12 font-normal">{title}</h4>
      <h2 className="capitalize font-recoleta  font-semibold text-xl smallLaptop:text-3xl my-2 smallLaptop:my-4">{location}</h2>
      <p className="capitalize text-16 font-normal">{quantity}</p>
    </div>
  );
};

export default VactionChoices;
