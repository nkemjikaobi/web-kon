import Image from "next/image";

import { GroupCard } from "@components/atoms/GroupCard";

import { PopularMerchantData } from "../../../componentData/PopularMerchants/PopularMerchantData";

const PopularMerchant = () => {
  return (
    <GroupCard contentClass="!pb-4" id="popular-merchants" title="Popular Merchants">
      {PopularMerchantData.map((data) => (
        <div className="mr-6" key={data.id}>
          <div className="flex justify-center w-[40px] h-[40px] smallLaptop:w-[100px] smallLaptop:h-[64px]">
            <Image className="rounded object-contain" height={64} src={data.url} width={100} />
          </div>
          <div className="flex justify-center items-center mt-2 text-12 smallLaptop:text-14">
            <p className="font-nunitoSans">{data.name}</p>
          </div>
        </div>
      ))}
    </GroupCard>
  );
};

export default PopularMerchant;
