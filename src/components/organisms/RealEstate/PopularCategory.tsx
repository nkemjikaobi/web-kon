import Image from "next/image";

import { GroupCard } from "@components/atoms/GroupCard";
import Icon from "@components/atoms/Icons";

import { slideLeft, slideRight } from "@shared/libs/helpers";

const PopularCategory = ({ category }: { category: string }) => {
  return (
    <GroupCard contentClass="pb-8" id="popular-vacation" title={`Popular Categories `}>
      <>
        {PopularCategoryData.map((data) => (
          <div className="mr-4 relative" key={data.id}>
            <div className=" w-[140px] h-[138px] smallLaptop:w-[208px] smallLaptop:!h-[186px] overflow-hidden">
              <Image className="rounded" height={204} src={data.url} width={208} />
            </div>
            <div className="w-full absolute bottom-0 bg-[#07354D] pl-2 pt-[10px] pb-[10px] text-14 smallLaptop:text-16 text-white font-bold opacity-[90%]">
              <p className="font-nunitoSans">{data.name}</p>
            </div>
          </div>
        ))}
        <div className="hidden tablet:block">
          <div className="absolute tablet:left-0 desktop:-left-5 tablet:top-1/2 cursor-pointer " onClick={() => slideLeft("popular-vacation", 1500)}>
            <Icon name="blueAngleLeft" />
          </div>
          <div className="absolute tablet:right-0 desktop:-right-5 tablet:top-1/2 cursor-pointer television:right-12" onClick={() => slideRight("popular-vacation", 1500)}>
            <Icon name="blueAngleRight" />
          </div>
        </div>
      </>
    </GroupCard>
  );
};

export default PopularCategory;

const PopularCategoryData = [
  {
    id: 1,
    name: "Maisonettes",
    url: "/images/realEstate/maisonettes.png",
  },
  {
    id: 2,
    name: "Terraces",
    url: "/images/realEstate/terrace.png",
  },
  {
    id: 3,
    name: "Serviced Lands",
    url: "/images/realEstate/serviceland.png",
  },
  {
    id: 4,
    name: "Bungalows",
    url: "/images/realEstate/bungalows.png",
  },
  {
    id: 5,
    name: "Fully detached",
    url: "/images/realEstate/fullydetached.png",
  },
  {
    id: 6,
    name: "Semi detached",
    url: "/images/realEstate/semidetached.png",
  },
];
