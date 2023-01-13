import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { ButtonProperties, CURRENCIES } from "src/shared/libs/helpers";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomInput from "@components/atoms/CustomInput/CustomInput";
import Icon from "@components/atoms/Icons";

/**
 * The interface for data will be done in the near future when the data is more certain
 */
interface MobileSearchProps {
  activeService: any;
}

const MobileSearch = ({ activeService }: MobileSearchProps) => {
  const [services, setServices] = useState({
    location: "",
    date: "",
    priceRange: false,
  });

  const [currentService, setCurrentService] = useState<any>(null);

  const router = useRouter();

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
    <div className=" w-full py-4 px-5 mt-2 smallLaptop:hidden">
      <form>
        {hasLocation && (
          <div className="border focus-within:border-citiGreen-500 mb-4 py-3 rounded-sm">
            <CustomInput
              className="!h-auto"
              icon="globe"
              inputClassName="placeholder:text-xs ml-4 "
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
          <div className="border focus-within:border-citiGreen-500 mb-4 py-3 rounded-sm">
            <CustomInput
              className="!h-auto"
              icon="calendar"
              inputClassName="placeholder:text-xs ml-4"
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
          <div className="border flex focus-within:border-citiGreen-500 mb-4 px-5 py-3 rounded-sm">
            <div className="">
              <Icon className=" h-[4]" name="wallet" />
            </div>
            <div className="grow">
              <select className="text-[#4F4F4F] text-xs mx-4 border-none focus:ring-0 focus:outline-none w-[95%]" id="" name="">
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
            </div>
          </div>
        )}
      </form>
      <CustomButton
        customClass="!w-full !rounded-none"
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

export default MobileSearch;
