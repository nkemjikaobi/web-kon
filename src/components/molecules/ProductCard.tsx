import Image from "next/image";
import Router from "next/router";
import StarRatings from "react-star-ratings";

import CustomButton from "@components/atoms/CustomButton/CustomButton";

import { useWindowSize } from "@hooks/useWindowSize";

import { ProductProps } from "@dto/Product/ProductProps";

import { ButtonProperties, classNames, truncateText } from "@shared/libs/helpers";
import { noImagePlaceholder } from "@shared/libs/helpers";

export interface ProductCardProps {
  product: ProductProps;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [width] = useWindowSize();

  const textDescriptionLimit = width > 1000 ? 85 : 75;

  const handleView = () => {
    Router.push(`/${product.entity.urlKey}/${product._id}`);
  };

  return (
    <div className="bg-white py-4 px-3 hover:shadow-product-card font-nunitoSans flex flex-col">
      <div>
        {product?.imageUrl && product?.imageUrl?.length > 0 ? (
          <Image
            alt={product.name && classNames(product.name, "product")}
            className="object-cover rounded"
            height={177}
            layout="responsive"
            src={product?.imageUrl[0]}
            width={201}
          />
        ) : (
          <Image alt={product.name && classNames(product.name, "product")} className="object-cover rounded" height={177} layout="responsive" src={noImagePlaceholder} width={201} />
        )}
      </div>
      <div className="flex flex-col pt-3 smallLaptop:pt-4 h-full">
        <p className="truncate font-nunitoSans text-14 smallLaptop:text-16 text-black">{product.name}</p>
        <div className="flex justify-between items-center my-2">
          <span className="font-nunitoSans text-12 font-bold text-citiBlue-900 uppercase">Merchant</span>
          <span className="font-nunitoSans text-14 text-citiBlue-400 block truncate ml-3 underline" title={product.merchant.storeName}>
            {product.merchant.storeName}
          </span>
        </div>
        <p className="text-14 text-citiDarkText mb-2 break-words">{product.description && truncateText(product.description, textDescriptionLimit)}</p>
        <div className="mt-auto">
          <div className="flex items-center mt-2 mb-4">
            <StarRatings numberOfStars={3} rating={0} starDimension="16px" starRatedColor="#FF9B00" starSpacing="0" />
            <div className="text-12 text-citiBlue-400 ml-2 pt-1">{classNames("0", "Review")}</div>
          </div>
          <div className="text-14 text-black">Starting from</div>
          <div className="mt-2 mb-4 text-24 text-black">₦{product.price?.toLocaleString()}</div>
          <CustomButton
            customClass="!w-full"
            handleClick={handleView}
            icon="caretRight"
            iconPosition={ButtonProperties.ICON_POSITION.end}
            size={ButtonProperties.SIZES.small}
            title="View"
            variant={ButtonProperties.VARIANT.secondary.name}
          />
        </div>
      </div>
    </div>
  );
};
