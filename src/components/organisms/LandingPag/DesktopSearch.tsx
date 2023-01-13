import { useRouter } from "next/router";
import React, { useState, useEffect, useCallback } from "react";
import { ButtonProperties, CURRENCIES } from "src/shared/libs/helpers";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomInput from "@components/atoms/CustomInput/CustomInput";
import Icon from "@components/atoms/Icons";

/**
 * The interface for data will be done in the near future when the data is more certain
 */
interface DesktopSearchProps {
  activeService: any;
}

const DesktopSearch = ({ activeService }: DesktopSearchProps) => {
  const [services, setServices] = useState({
    location: "",
    date: "",
    priceRange: false,
  });
  const router = useRouter();

  const [currentService, setCurrentService] = useState<any>(null);

  const handleChange = useCallback(({ target: { name, value } }: any) => {
    setServices((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const { location, date, priceRange } = services;

  const handleSubmit = () => {
    console.log({ location, date, priceRange });
    router.push(`${activeService.route}`);
  };

  useEffect(() => {
    let mounted = true;

    if (mounted && activeService) {
      setCurrentService(activeService);
    }

    return () => {
      mounted = false;
    };
  }, [activeService]);

  const { hasLocation, hasDate, hasPriceRange } = currentService || {};

  return (
    <div className="hidden my-0 h-20  left-1/2 -translate-x-1/2 w-[700px] desktop:w-[1000px] absolute top-[45%] z-20 smallLaptop:flex">
      <form className="flex justify-between w-full bg-white border px-5 drop-shadow-md " onSubmit={handleSubmit}>
        {hasLocation && (
          <div className="flex items-center grow ml-5">
            <CustomInput
              icon="globe"
              inputClassName="placeholder:text-xs ml-4 border-none focus:outline-none"
              name="location"
              onChange={handleChange}
              placeholder="Search Locations"
              required
              type="text"
              value={location}
            />
          </div>
        )}
        {hasDate && (
          <div className="flex items-center grow">
            <div className="text-[#4F4F4F]">
              <Icon name="divider" />
            </div>
            <CustomInput
              className="pl-8"
              icon="calendar"
              inputClassName="placeholder:text-xs ml-4 h-full border-none focus:outline-none"
              name="date"
              onChange={handleChange}
              placeholder="Date in - Date Out"
              required
              type="text"
              value={date}
            />
          </div>
        )}
        {hasPriceRange && (
          <div className="flex items-center grow">
            <div className="text-[#4F4F4F]">
              <Icon name="divider" />
            </div>
            <div className="pl-8">
              <Icon name="wallet" />
            </div>
            <select className="text-[#4F4F4F] text-xs ml-4 focus:outline-none grow h-full border-none focus:ring-0" id="" name="">
              <option disabled selected value="">
                Price Range
              </option>
              <option>
                {CURRENCIES.NAIRA}1,000- {CURRENCIES.NAIRA}3,000
              </option>
              <option>
                {CURRENCIES.NAIRA}5,000- {CURRENCIES.NAIRA}7,000
              </option>
              <option>
                {CURRENCIES.NAIRA}2,000- {CURRENCIES.NAIRA}3,500
              </option>
              <option>
                {CURRENCIES.NAIRA}6,700- {CURRENCIES.NAIRA}9,000
              </option>
            </select>
            <div className="">
              <Icon name="arrowDown" />
            </div>
          </div>
        )}
      </form>
      <CustomButton
        customClass="!h-full !rounded-none"
        handleClick={() => {
          handleSubmit();
        }}
        size={ButtonProperties.SIZES.small}
        title="Search"
        variant={ButtonProperties.VARIANT.primary.name}
      />
    </div>
  );
};

export default DesktopSearch;
