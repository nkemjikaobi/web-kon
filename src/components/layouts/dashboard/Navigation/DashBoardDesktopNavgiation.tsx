import React, { useState } from "react";

import CustomLink from "@components/atoms/CustomLink/CustomLink";
import Icon from "@components/atoms/Icons";

import useClickOutside from "@hooks/useClickOutside";

import Logo from "@atoms/Logo";

import { ProfilePopUp } from "./ProfilePopUp";
interface Search {
  search?: boolean;
}

const DashBoardDesktopNavgiation = ({ search }: Search) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState<boolean>(false);
  // const [departureDate, setDepartureDate] = useState<Date | undefined>();

  const node = useClickOutside(() => {
    setIsProfileMenuOpen(false);
  });

  return (
    <div className="flex justify-between items-center h-24 -ml-[50vw] left-[50%] relative w-screen pr-[1.6rem] pl-[1.6rem] top-0 bigLaptop:px-20 bg-white">
      <div className="flex justify-between items-center h-24 -ml-[50vw] left-[50%] relative w-screen px-16 top-0 bigLaptop:px-8 television:px-20 bg-white">
        <CustomLink destination="/">
          <Logo />
        </CustomLink>
        {/* {search && (
          <div className="flex smallLaptop:ml-[2.8rem]">
            <CustomInput
              className="border rounded-[0.125rem] h-[2.813rem] mr-4 !w-[18rem]"
              container="!pl-0 !pr-[0.3rem]"
              icon="mapMarker"
              iconPosition="end"
              inputClassName="placeholder:text-xs mobileBelow:ml-4 border-black"
              name="location"
              onChange={(e: any) => e.target.value}
              placeholder="Enter Location"
              required
              type="text"
              value=""
            />
            <DatePicker
              customInput={
                <CustomInput
                  className="border rounded-[0.125rem] h-[2.813rem] mr-4 !w-[10rem]"
                  container="!pl-0 !pr-[0.3rem]"
                  icon="calendar2"
                  iconPosition="end"
                  inputClassName="placeholder:text-xs mobileBelow:ml-4 border-black"
                  name="location"
                  onChange={(e: any) => e.target.value}
                  required
                  type="text"
                  value=""
                />
              }
              dateFormat="yyyy-MM-dd"
              minDate={new Date()}
              onChange={(date: Date) => setDepartureDate(date)}
              placeholderText={"Select Date"}
              selected={departureDate}
            />
            <CustomInput
              className="border rounded-[0.125rem] h-[2.813rem] mr-4 !w-[10rem]"
              container="!pl-0 !pr-[0.3rem]"
              inputClassName="placeholder:text-xs mobileBelow:ml-4 border-black"
              name="duration"
              onChange={(e: any) => e.target.value}
              placeholder="Select Duration"
              required
              type="text"
              value=""
            />
            <CustomInput
              className="border rounded-[0.125rem] h-[2.813rem] mr-2 !w-[10rem]"
              container="!pl-0 !pr-[0.3rem]"
              icon="person"
              iconPosition="end"
              inputClassName="placeholder:text-xs mobileBelow:ml-4 border-black"
              name="location"
              onChange={(e: any) => e.target.value}
              placeholder="No of Persons"
              required
              type="text"
              value=""
            />
            <CustomButton
              customClass=" h-[2.813rem] !w-[3.5rem]"
              handleClick={() => {}}
              icon="searchWhiteIcon"
              size={ButtonProperties.SIZES.small}
              type="submit"
              variant={ButtonProperties.VARIANT.secondary.name}
            />
          </div>
        )} */}
        <div className="flex items-center">
          {/* <Icon className="mr-2 cursor-pointer w-8" name="bellWithMessage" /> */}
          <Icon name="profilePlaceholder" />
          <div className="ml-4 cursor-pointer relative" onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)} ref={node}>
            <h4 className="text-14 font-normal flex items-center">
              Account{" "}
              <span className="ml-2">
                <Icon name="caretDown" />
              </span>
            </h4>
            <div className={`absolute top-5 -right-3 ${isProfileMenuOpen ? "block" : "hidden"}`}>
              <ProfilePopUp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardDesktopNavgiation;

DashBoardDesktopNavgiation.defaultProps = {
  search: false,
};
