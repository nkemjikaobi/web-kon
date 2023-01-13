import { range } from "lodash";

import { OrderCardSkeleton } from "./OrderCardSkeleton";

export const MyOrdersPageSkeleton = () => (
  <>
    <div className="flex justify-between items-center px-4 tablet:px-6 py-4 border-b border-citiBlue-b40 animate-pulse">
      <div>
        <span className="block h-3 tablet:h-4 w-16 mb-1 bg-gray-300" />
        <span className="block text-citiBlue-b100 h-3 tablet:h-4 w-24 font-nunitoSans bg-gray-300" />
      </div>
      <div className="flex items-center font-nunitoSans">
        <span className="h-3 tablet:h-4 w-12 block bg-gray-300 mr-1" />
        <span className="h-3 tablet:h-4 w-16 bg-gray-300" />
      </div>
    </div>

    {range(2).map((id) => (
      <OrderCardSkeleton key={id} />
    ))}
  </>
);
