import React from "react";

const RatingsAndReviews = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h5 className="text-citiBlue-900 font-bold">Ratings & Reviews</h5>
        <p className="text-citiBlue-700 text-14 font-normal">0 Review</p>
      </div>
      <div className="mt-4">
        {/* {range(5, 0, -1).map((key: number) => (
          <RatingsBar key={key} score={{ key: key, value: 0 }} totalRatings={1} />
        ))} */}
        <p>There are currently no reviews...</p>
      </div>
      <hr className="smallLaptop:hidden mt-4" />
    </div>
  );
};

export default RatingsAndReviews;
