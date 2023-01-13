import React from "react";

const HeroTitle = () => {
  return (
    <div className="mobile:mt-[1.438rem] mb-4 tablet:mb-[2.5rem] font-recoleta font-semibold text-18 mobile375:text-20 mobile:text-24 smallLaptop:text-40 bigLaptop:text-64  smallLaptop:mt-[3.188rem] flex justify-center items-center flex-col">
      <div className="whitespace-nowrap">Invest Smartly,</div>
      <div className="whitespace-nowrap">Explore Exciting Vacation Packages</div>
      <p className="font-nunitoSans text-16 mobile:text-24 text-black text-center p-2 bg-[#EAF5F2] mt-2 mobile:mt-4">
        Insufficient funds? Not a problem at all. We also have Buy Now Pay Later and Mortgage facilities to finance your dreams.
      </p>
    </div>
  );
};

export default HeroTitle;
