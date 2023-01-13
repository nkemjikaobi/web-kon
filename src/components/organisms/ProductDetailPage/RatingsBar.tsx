import React, { FC, useEffect, useState } from "react";
import StarRatings from "react-star-ratings";

interface RatingsBarProps {
  // totalRatings?: number;
  score: ScoreProps;
}

interface ScoreProps {
  key: number;
  value: number;
}

const RatingsBar: FC<RatingsBarProps> = ({ score }) => {
  const [progressScore, setProgressScore] = useState<number>(0);

  useEffect(() => {
    setProgressScore(Math.floor(Math.random() * 101));
  }, []);

  return (
    <div className="flex items-center mb-2">
      <p className="mr-[0.125rem]">{score.key}</p>
      <div className="flex items-center">
        <StarRatings name="rating" numberOfStars={1} rating={1} starDimension={"12px"} starEmptyColor="#DBDBDB" starRatedColor="#FFAF33" />
        <progress className="ml-2" max="100" value={progressScore}>
          {progressScore}%
        </progress>
      </div>
    </div>
  );
};

export default RatingsBar;

// RatingsBar.defaultProps = {
//   totalRatings: 0,
// };
