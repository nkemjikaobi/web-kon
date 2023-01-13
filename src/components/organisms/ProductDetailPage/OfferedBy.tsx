import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "src/store/rootReducer";

import Icon from "@components/atoms/Icons";

import RatingsAndReviews from "./RatingsAndReviews";

const OfferedBy = () => {
  const { currentProduct } = useSelector((state: AppState) => state.product);

  return (
    <div>
      <h4 className="text-citiBlue-900 font-bold">Offered By</h4>
      <div className="flex justify-between items-center mt-6 mb-8">
        <div className="flex items-center">
          <Icon name="landline" />
          <p className="ml-2 text-14">{currentProduct?.merchant?.storeName}</p>
        </div>
        {/* <p className="text-citiBlue-700 text-14 font-normal">3 Listed Products</p> */}
      </div>
      <RatingsAndReviews />
      {/* <Comments /> */}
    </div>
  );
};

export default OfferedBy;
