import Image from "next/image";
import React, { useState } from "react";

import { useWindowSize } from "@hooks/useWindowSize";

import { noImagePlaceholder } from "@shared/libs/helpers";

interface ProductImagesProps {
  images: string[];
}

const ProductImageAndVariants = ({ images }: ProductImagesProps) => {
  const [currentImage, setCurrentImage] = useState<string>(images[0] || noImagePlaceholder);

  const [width] = useWindowSize();

  const isMobile = width < 600;

  const updateCurrentImage = (newImage: string) => {
    setCurrentImage(newImage);
  };

  return (
    <div className="ml-[1rem] mr-[0.938rem] smallLaptop:ml-0">
      <div key={currentImage}>
        <Image className="object-cover" height={519} src={currentImage} width={1037} />
      </div>
      <div className="flex mt-2 overflow-scroll hide-scrollbar">
        {images.map((image, index) => (
          <div className="mr-2 last:mr-0 shrink-0 cursor-pointer" key={index} onClick={() => updateCurrentImage(image)}>
            <Image className="object-cover" height={isMobile ? 52 : 87} src={image} width={isMobile ? 88 : 134} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImageAndVariants;
