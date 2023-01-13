import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import { ImageDataProps } from "@modules/categoryPages/categoryPages";

interface ServicesImageComponentProps {
  src: Array<ImageDataProps>;
}
const ServicesImageComponent = ({ src }: ServicesImageComponentProps) => {
  const [index, setIndex] = useState<number>(0);

  const intervalRef = useRef();

  useEffect(() => {
    (intervalRef.current as ReturnType<typeof setInterval> | undefined) = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex === src.length - 1) return 0;
        else return prevIndex + 1;
      });
    }, 4000);

    const timerId = intervalRef.current;

    return () => clearInterval(timerId);
  }, [index]);

  return (
    <>
      {src.map((data: ImageDataProps, ind: number) => (
        <div className={`h-[19.375rem] w-full smallLaptop:w-auto relative ${index === ind ? "fadeInOut" : "hidden"}`} key={ind}>
          <Image layout="fill" objectFit="cover" priority={true} src={data.url} />
        </div>
      ))}
    </>
  );
};

export default ServicesImageComponent;
