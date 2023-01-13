import { useQuery } from "@apollo/client";
import Link from "next/link";
import React, { useState } from "react";

import CustomLink from "@components/atoms/CustomLink/CustomLink";

import { GET_PRODUCT_ENTITIES } from "@graphql/product/queries";

import { ENTITIES } from "@shared/libs/helpers";

import { HomepageEntityListing } from "@skeletons/HomepageEntityListing";

interface EntityProps {
  _id: string;
  name: string;
  urlKey: string;
}

const Services = () => {
  const [showFinancialServices, setShowFinancialServices] = useState(false);

  const { data, loading } = useQuery(GET_PRODUCT_ENTITIES);

  const coupleEntities = (): any[] => {
    const productEntities = (data?.getProductEntities?.data || []).map((entity: EntityProps) => ({
      id: entity._id,
      name: entity.name,
      route: `/${entity.urlKey}`,
      isHoverable: false,
      urlKey: entity.urlKey,
    }));

    // return productEntities.length > 0 ? [...productEntities, financialServices] : [];
    const tempEntities =
      productEntities.length > 0 && productEntities.filter((entity: EntityProps) => entity.urlKey === ENTITIES.VACATIONS || entity.urlKey === ENTITIES.REAL_ESTATE);
    return tempEntities.length > 0 ? [...tempEntities] : [];
  };

  return (
    <div className="smallLaptop:h-[100px] pb-0 smallLaptop:mt-1 smallLaptop:mb-0 relative transition-all">
      {loading ? (
        <HomepageEntityListing />
      ) : (
        <div
          // className="flex flex-wrap justify-start items-center px-4 smallLaptop:flex smallLaptop:flex-nowrap tablet:px-12  mb-4 relative"
          className="flex flex-wrap justify-start items-center px-4 smallLaptop:flex smallLaptop:flex-nowrap smallLaptop:w-[33rem] mx-auto mb-4 relative"
          onMouseLeave={() => {
            setShowFinancialServices(false);
          }}
        >
          {coupleEntities().map((service, index) => (
            <Link href={service.route} key={service.id}>
              <button
                className={`${
                  service.isHoverable
                    ? "hover:bg-citiBlue-400 hover:border-citiBlue-400 hover:text-white text-[#B9BCBB] smallLaptop:text-black border-[#e5e5e5] smallLaptop:border-black"
                    : // : activeIndex === index && !service.isHoverable
                      // ? "bg-citiGreen-500 text-white border border-citiGreen-500"
                      "border-[#e5e5e5] text-[#B9BCBB] smallLaptop:text-black smallLaptop:border-black"
                } hover:bg-citiBlue-400 hover:border-citiBlue-400 hover:text-white grow duration-700 z-40 mx-1 my-2 relative flex justify-center h-10 px-2 min-w-[70px] smallLaptop:h-14 cursor-pointer text-xs whitespace-nowrap smallLaptop:text-base items-center smallLaptop:px-5 smallLaptop:mr-4 desktop:min-w-[12.75rem] capitalize border`}
                onClick={() => {
                  // !service.isHoverable && setActiveIndex(index);
                  // !service.isHoverable && setActiveService(service);
                }}
                onMouseEnter={() => {
                  service.isHoverable ? setShowFinancialServices(true) : setShowFinancialServices(false);
                }}
              >
                <div
                  className={`flex items-center justify-between smallLaptop:justify-center smallLaptop:w-auto smallLaptop:font-bold smallLaptop:text-20 ${
                    service.isHoverable ? "w-full" : ""
                  }`}
                >
                  <p className={service.name === "real estate investments" ? "whitespace-pre-wrap" : ""}>{service.name}</p>
                  {service.isHoverable && (
                    <svg className="stroke-current ml-3" fill="none" height="12" viewBox="0 0 18 10" width="12" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16.9201 1.44995L10.4001 7.96995C9.63008 8.73995 8.37008 8.73995 7.60008 7.96995L1.08008 1.44995"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeWidth="1.5"
                      />
                    </svg>
                  )}
                </div>
                {showFinancialServices && (
                  <div className="z-60 bg-transparent tablet:pt-5 absolute top-10 tablet:top-10 left-1 tablet:left-0">
                    {service.isHoverable && (
                      <div className="bg-white shadow-md pb-2">
                        {service?.options?.map((option: any) => (
                          <div className="px-4 mt-2 w-[150px] tablet:w-[190px]" key={option.id}>
                            <div className="flex flex-col capitalize mt-2 first:mt-0 smallLaptop:w-[8.5rem] text-sm smallLaptop:text-base whitespace-nowrap text-citiDarkText hover:text-citiGreen-500">
                              <CustomLink destination={option.route}>
                                <span className="text-12 tablet:text-18 text-left w-full block">{option.name}</span>
                              </CustomLink>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </button>
            </Link>
          ))}
        </div>
      )}

      {/* <DesktopSearch activeService={activeService} />
      <MobileSearch activeService={activeService} /> */}
    </div>
  );
};

export default Services;

// const financialServices = {
//   id: 5,
//   name: "financial services",
//   hasLocation: false,
//   hasDate: false,
//   hasPriceRange: false,
//   isHoverable: true,
//   route: "#",
//   options: [
//     {
//       id: 0,
//       name: "buy now pay later",
//       route: "#",
//     },
//     {
//       id: 1,
//       name: "mortgage loans",
//       route: "#",
//     },
//     {
//       id: 2,
//       name: "personal loans",
//       route: "#",
//     },
//   ],
// };
