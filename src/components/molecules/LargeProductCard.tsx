import Image from "next/image";

import CustomButton from "@components/atoms/CustomButton/CustomButton";

import { useWindowSize } from "@hooks/useWindowSize";

import { ProductProps } from "@dto/Product/ProductProps";

import { ButtonProperties, CitiServices, classNames, truncateText } from "@shared/libs/helpers";

export interface LargeProductCardProps {
  product: ProductProps;
}

export const LargeProductCard = ({ product }: LargeProductCardProps) => {
  const [width] = useWindowSize();

  const textDescriptionLimit = width > 1000 ? 300 : 75;

  return (
    <div className="bg-white p-6 hover:shadow-product-card font-nunitoSans">
      <Image
        alt={product.name && classNames(product.name, "product")}
        className="object-cover"
        height={298}
        layout="responsive"
        src={CitiServices.REAL_ESATE.images[1].url}
        width={427}
      />
      <div className="pt-4 smallLaptop:pt-8">
        <p className="truncate font-nunitoSans text-14 smallLaptop:text-24 text-citiBlue-900">{product.name}</p>
        <p className="text-16">{product.description}</p>
        <div className="flex flex-wrap justify-between text-16 font-bold text-citiBlue-400 mt-4">
          {propertyDimension.map((prop, id) => (
            <span key={id}>
              {prop.dimension} : {prop.value}
            </span>
          ))}
        </div>
        <p className="text-16 text-citiDarkText my-4">{product.description && truncateText(product.description, textDescriptionLimit)}</p>
        <CustomButton customClass="!w-full" handleClick={() => {}} title="Large Button Primary" variant={ButtonProperties.VARIANT.secondary.name} />
      </div>
    </div>
  );
};

const propertyDimension = [
  { dimension: "W", value: "256sqm" },
  { dimension: "H", value: "56sqm" },
  { dimension: "H", value: "56sqm" },
  { dimension: "H", value: "56sqm" },
];
