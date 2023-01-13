import { range } from "lodash";
import React from "react";

const SpaReserveSkeleton = () => {
  return (
    <>
      <div className="flex justify-between mb-12">
        <div className=" w-full mr-4">
          <div className="bg-white p-4">
            <div className="bg-gray-300 animate-pulse w-[6rem] h-5 mb-2" />

            <div className="tablet:flex tablet:justify-between mt-5">
              <div className="w-full">
                <div>
                  <div className="bg-gray-300 animate-pulse w-[14rem] h-4" />
                  <div className="bg-gray-300 animate-pulse w-[10rem] mt-2 h-4" />
                  <div className="bg-gray-300 animate-pulse w-[6rem] mt-4 h-4" />
                </div>

                <div className="mt-10 mr-10">
                  <div className="tablet:hidden">
                    <div className="h-[10rem] bg-gray-300 animate-pulse w-[10rem]" />
                  </div>
                  <div className="bg-gray-300 animate-pulse w-full mt-2 h-4" />
                  <div className="bg-gray-300 animate-pulse mt-2 w-full h-4" />
                  <div className="bg-gray-300 animate-pulse mt-2 h-4" />
                  <div className="bg-gray-300 animate-pulse mt-2 h-4" />
                </div>
              </div>
              <div>
                <div className="hidden tablet:block h-full bg-gray-300 animate-pulse w-[15rem]" />
              </div>
            </div>
          </div>

          <div className="px-4 pt-8 bg-white mt-4 tablet:mt-6 pb-9 tablet:pb-24">
            <div className="flex justify-between mb-6">
              <div className="bg-gray-300 animate-pulse w-[6rem] h-5 mb-2" />
              <div className="bg-gray-300 animate-pulse w-[6rem] h-5 mb-2" />
            </div>
            <hr />
            <div className=" text-12 tablet:text-16 mt-4 tablet:mt-8 tablet:flex">
              {range(5).map((data, index) => (
                <div className="tablet:mr-16 mt-4 tablet:mt-0 flex justify-between tablet:flex-col" key={index}>
                  <p className="bg-gray-300 animate-pulse w-[6rem] h-5 mb-2" />
                  <p className="bg-gray-300 animate-pulse w-[6rem] h-5 mb-2" />
                </div>
              ))}
            </div>
            <div className=" w-[70%] h-8  m-auto tablet:w-[50%] bg-gray-300 animate-pulse mt-12 tablet:mt-28 rounded-md" />
          </div>
        </div>

        <div className="bg-white h-[470px] w-[30%] hidden smallLaptop:block p-2">
          <div className="bg-gray-300 animate-pulse w-[6rem] h-4 mb-2" />
          <div className="flex mt-6">
            <div className="bg-gray-300 h-[70px] w-[79px] animate-pulse" />
            <div className="ml-2">
              <div className="bg-gray-300 animate-pulse w-[6rem] h-5 mb-2" />
              <div className="bg-gray-300 animate-pulse w-[6rem] h-4 mb-2" />
              <div className="bg-gray-300 animate-pulse w-full h-3 mb-2" />
            </div>
          </div>

          <div className="mt-6">
            {range(9).map((_, index) => (
              <div className="flex justify-between mt-2" key={index}>
                <div className="bg-gray-300 animate-pulse w-full mr-4  h-3 mb-2" />
                <p className="bg-gray-300 animate-pulse w-[4rem] h-3 mb-2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SpaReserveSkeleton;
