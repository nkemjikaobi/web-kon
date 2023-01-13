export const OrderCardSkeleton = () => {
  return (
    <>
      <div className="hidden tablet:flex justify-between items-center border-b border-citiBlue-b40 p-6 font-nunitoSans animate-pulse">
        <div className="flex">
          <div className="w-[151px] h-full">
            <div className="w-40 h-32 bg-gray-300 rounded-sm" />
          </div>
          <div className="ml-4">
            <span className="block text-10 h-2 w-11 capitalize bg-gray-300" />
            <div className="flex items-center my-1">
              <span className="h-3 w-32 text-black mr-2 bg-gray-300" />
              <div className="w-44 h-8 rounded-full bg-gray-300" />
            </div>
            <span className="h-3 w-64 bg-gray-300" />
            <div>
              <span className="block capitalize h-3 w-40 my-6 bg-gray-300" />
              <div className="flex">
                <span className="flex items-center mr-4">
                  <div className="w-5 h-5 bg-gray-300" />
                  <span className="block ml-2 text-12 bg-gray-300 h-5 w-24" />
                </span>
                <span className="flex items-center mr-4">
                  <div className="w-5 h-5 bg-gray-300" />
                  <span className="block ml-2 text-12 bg-gray-300 h-5 w-24" />
                </span>
                <span className="flex items-center mr-4">
                  <div className="w-5 h-5 bg-gray-300" />
                  <span className="block ml-2 text-12 bg-gray-300 h-5 w-24" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="capitalize bg-gray-300 mr-10 text-12 h-3 w-36 font-bold font-nunitoSans cursor-pointer" />
      </div>

      <div className="flex-col tablet:hidden items-center border-b border-citiBlue-b40 mx-4 py-4 tablet:p-6 font-nunitoSans animate-pulse">
        <div className="flex mb-4">
          <div className="w-32 h-28 bg-gray-300" />
          <div className="ml-4">
            <span className="block text-[8px] h-2 w-24 font-bold font-nunitoSans capitalize bg-gray-300" />
            <span className="block font-nunitoSans text-14 h-4 w-14 font-semibold bg-gray-300 my-2" />
            <span className="block bg-gray-300 h-2 w-56 font-normal mb-3" />
            <div className="w-32 h-8 rounded-full bg-gray-300" />
          </div>
        </div>
        <div>
          <span className="block capitalize text-14 h-3 w-40 font-bold bg-gray-300 mb-2" />
          <div className="flex-col">
            <span className="flex items-center mr-3 mb-3">
              <div className="w-5 h-5 bg-gray-300" />
              <span className="block ml-2 text-12 h-5 w-24 bg-gray-300" />
            </span>
            <span className="flex items-center mr-3 mb-3">
              <div className="w-5 h-5 bg-gray-300" />
              <span className="block ml-2 text-12 bg-gray-300 h-5 w-24" />
            </span>
            <span className="flex items-center mr-3 mb-3">
              <div className="w-5 h-5 bg-gray-300" />
              <span className="block ml-2 text-12 bg-gray-300 h-5 w-24" />
            </span>
          </div>
        </div>
        <div className="capitalize bg-gray-300 mr-10 text-12 h-3 w-36 font-bold font-nunitoSans cursor-pointer" />
      </div>
    </>
  );
};
