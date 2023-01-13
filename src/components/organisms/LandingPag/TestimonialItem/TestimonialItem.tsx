import Image from "next/image";
import React from "react";

import { noImagePlaceholder } from "@shared/libs/helpers";

interface TestimonialItemProps {
  testimonial: any;
  onClick: () => void;
  onMouseLeave: () => void;
  onMouseOver: () => void;
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({ testimonial, onClick, onMouseLeave, onMouseOver }) => {
  return (
    <li
      className="carousel__item bg-white pt-6 px-2 mt-8 rounded-[0.75rem] absolute smallLaptop:pl-4 min-w-[16.75rem] tablet:w-[18.75rem] smallLaptop:h-[36.313rem] smallLaptop:w-[32.625rem]"
      data-pos={testimonial.dataPos}
      onClick={onClick}
      onMouseLeave={onMouseLeave}
      onMouseOver={onMouseOver}
    >
      <h2 className="text-16 smallLaptop:text-24 font-bold text-citiBlue-b900 mb-1" data-pos={testimonial.dataPos}>
        {testimonial.title}
      </h2>
      <p className="text-14 smallLaptop:text-base text-citiSkyBlue-800 mb-4" data-pos={testimonial.dataPos}>
        {testimonial.content}
      </p>
      <h3 className="font-bold capitalize text-citiBlue-b900" data-pos={testimonial.dataPos}>
        {testimonial.author}
      </h3>
      <h5 className="text-12 smallLaptop:text-14 text-citiBlue-b400 mb-6" data-pos={testimonial.dataPos}>
        {testimonial.position}
      </h5>
      <div className="flex justify-center items-center pb-8" data-pos={testimonial.dataPos}>
        <Image className="object-cover" data-pos={testimonial.dataPos} height={310} src={testimonial.imgUrl || noImagePlaceholder} width={480} />
      </div>
    </li>
  );
};

export default TestimonialItem;
