export const OrderDetailsSkeleton = () => {
  return (
    <div>
      <h4 className="w-24 h-4 ml-4 animate-pulse bg-gray-300" />
      <div>
        <div className="space-y-4 flex justify-between items-center">
          <div>
            <p className="text-10 text-citiBlue-b200 w-24 m-4 h-4 animate-pulse bg-gray-300" />
            <h1 className="text-16 tablet:text-24 text-citiSkyBlue-800 w-32 m-4 h-4 animate-pulse bg-gray-300" />
          </div>
          <div className="tablet:hidden">
            <div className="text-10 text-citiRed-100 rounded-[36px] px-5 py-3 uppercase w-20 m-4 mr-8 h-4 animate-pulse bg-gray-300" />
          </div>
          <div className="hidden tablet:block">
            <div className="text-10 text-citiRed-100 rounded-[36px] px-5 py-3 uppercase w-20 mr-8 h-6 animate-pulse bg-gray-300" />
          </div>
        </div>
      </div>
      <div>
        <div className="bg-citiGray-100 pl-4 py-4 h-[2.75rem]">
          <h4 className="w-24 h-4 animate-pulse bg-gray-300" />
        </div>
        <div className="mt-8 flex pl-4">
          <div className="shrink-0 grow-0 basis-auto pl-4 h-[133px] w-[151px] animate-pulse bg-gray-300" />

          <div className="w-[70%] ml-6">
            <h4 className="w-32 mb-8 h-4 animate-pulse bg-gray-300" />
            <h4 className="w-32 smallLaptop:w-48 h-4 animate-pulse bg-gray-300" />
          </div>
        </div>
        <div className="flex items-center mt-8 pl-4">
          <div className="flex items-center space-x-4 ml-4">
            <h4 className="w-12  h-4 animate-pulse bg-gray-300" />
            <h4 className="w-12 h-4 animate-pulse bg-gray-300" />
            <h4 className="w-12 h-4 animate-pulse bg-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
};
