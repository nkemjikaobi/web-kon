import { useEffect, useState } from "react";

import Icon from "@components/atoms/Icons";

import useDirection from "@hooks/useDirection";

import Partners from "../PartnerSection/Partners";
import TestimonialItem from "../TestimonialItem/TestimonialItem";

const Testimonials = () => {
  const [data, setData] = useState(testimonialData);
  const [pause, setPause] = useState<boolean>(false);

  const getPos = (current: number, active: number) => {
    const diff = current - active;

    if (Math.abs(current - active) > 2) {
      return -current;
    }

    return diff;
  };

  const update = (newActive: number) => {
    const getNextPositions = data.map((item) => {
      const itemPos = item.dataPos;

      const nextPosition = getPos(itemPos, newActive);

      return {
        currentPosition: itemPos,
        nextPosition,
      };
    });

    const dataWithUpdatedPositions = data.map((testimonial) => ({
      ...testimonial,
      dataPos: getNextPositions.find((position) => position.currentPosition === testimonial.dataPos)?.nextPosition as number,
    }));

    setData(dataWithUpdatedPositions);
  };

  const { activeIndex } = useDirection(data.length);

  useEffect(() => {
    if (!pause) update(1);
  }, [activeIndex]);

  return (
    <div className="bg-citiBlue-b50 pt-8 pb-[4.603rem] relative">
      <Icon className="absolute top-[2.5rem] smallLaptop:top-[4rem] left-[0.625rem] smallLaptop:left-[12.563rem] smallLaptop:w-[8.898rem] smallLaptop:h-[7.5rem] " name="quote" />
      <div className="ml-8 smallLaptop:ml-[18.5rem]">
        <h3 className="font-semibold text-2xl smallLaptop:text-5xl pt-[7.5rem] smallLaptop:w-[27.813rem] font-recoleta leading-[140%] text-citiBlue-900">
          Real Stories from Real Customers
        </h3>
        <p className="text-14 smallLaptop:text-24 text-citiBlue-700 mt-2">Get inspired by these stories.</p>
      </div>

      <div className="carousel px-[4.813rem] mb-0 overflow-hidden">
        <ul className="carousel__list">
          {data.map((testimonial) => (
            <TestimonialItem
              key={testimonial.id}
              onClick={() => update(testimonial.dataPos)}
              onMouseLeave={() => setPause(false)}
              onMouseOver={() => testimonial.dataPos === activeDataPosition && setPause(true)}
              testimonial={testimonial}
            />
          ))}
        </ul>
      </div>

      <Partners />
    </div>
  );
};

export default Testimonials;

const activeDataPosition = 0;

const testimonialData = [
  {
    id: 1,
    value: 1,
    dataPos: -2,
    title: "Vacation Activities Packed",
    content:
      "First time booking for a vacation service online, Citisquare gave me the best vacation experience. They have lots of nice places to have that perfect vacation. It's so easy and seamless using the platform. I had a fun vacation with my friends.",
    author: "Onyinye",
    position: "",
    imgUrl: "/images/testimonials/onyinye.jpeg",
  },
  {
    id: 2,
    value: 2,
    dataPos: -1,
    title: "Affordable Quality Real Estate options",
    content:
      "Citisquare has helped me and my friends get properties of our choice at very affordable prices with structured payment plans.  Thanks to citisquare i can successfully get good location properties of my choice.",
    author: "Prosper",
    position: "",
    imgUrl: "/images/testimonials/prosper.jpeg",
  },
  {
    id: 3,
    value: 3,
    dataPos: 0,
    title: "Become a merchant",
    content:
      "The best solution for anyone who wants to work a flexible schedule but still earn a full-time income. Citisquare is a super platform that simplifies the following services. Booking services for its users e.g spa and shortlets Scheduling vacations, conferences, corporate retreats, romantic getaways and other types of tours.",
    author: "Victoria",
    position: "",
    imgUrl: "/images/testimonials/victoria.jpeg",
  },
  {
    id: 4,
    value: 4,
    dataPos: 1,
    title: "Buy now and Pay Later",
    content:
      "Thanks to citisquare's buy now and pay later investment plans, I now have a property to call mine. Looking forward to doing more real estate business with Citisquare in the nearest future. 😇",
    author: "Chidi",
    position: "",
    imgUrl: "/images/testimonials/chidi.png",
  },
  {
    id: 5,
    value: 5,
    dataPos: 2,
    title: "Affordable Quality Real Estate options",
    content:
      "Citisquare has helped me and my friends get properties of our choice at very affordable prices with structured payment plans.  Thanks to citisquare i can successfully get good location properties of my choice.",
    author: "Prosper",
    position: "",
    imgUrl: "/images/testimonials/prosper.jpeg",
  },
];
