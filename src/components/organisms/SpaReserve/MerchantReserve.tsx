import Image from "next/image";
import { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";

import { noImagePlaceholder } from "@shared/libs/helpers";

const MerchantReserve = ({ orders }: any) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    setImage(orders?.product?.imageUrl[0]);
  }, [orders]);

  return (
    <div>
      <div>
        <div className="bg-white p-4 mt-4 tablet:mt-0">
          <h1 className=" mt-5 tablet:mt-8 font-bold text-14 tablet:text-16 mb-6 text-citiBlue-250">MERCHANT</h1>
          <hr />
          <div className="tablet:flex tablet:justify-between">
            <div className="tablet:w-[80%]">
              <h1 className="text-16 tablet:text-24 font-bold mt-6 capitalize">{orders?.merchant.storeName}</h1>
              <p className="text-citiBlue-150 text-14 tablet:text-16 mt-1">No location</p>
              <div className="flex items-center mt-2">
                <div className="flex">
                  <StarRatings numberOfStars={3} rating={0} starDimension="16px" starRatedColor="#FFAF33" starSpacing="0" />
                </div>
                <p className="text-12 ml-2 mt-1 text-citiBlue-400">0 Reviews</p>
              </div>
              <div className="tablet:hidden mt-2">{<Image className="object-cover w-full" height={174} src={image || noImagePlaceholder} width={400} />}</div>
              <p className="mt-3 text-12 tablet:text-16 leading-4">{orders?.product.description}</p>
            </div>
            <div className="mt-8 hidden tablet:block">{<Image height={205} src={image || noImagePlaceholder} width={230} />}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantReserve;
