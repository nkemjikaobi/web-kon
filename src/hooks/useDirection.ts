import { useEffect, useRef, useState } from "react";

const useDirection = (dataLength: number) => {
  const [index, setIndex] = useState(0);

  const intervalRef = useRef();

  useEffect(() => {
    (intervalRef.current as ReturnType<typeof setInterval> | undefined) = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex === dataLength - 1) return 0;
        else return prevIndex + 1;
      });
    }, 6000);

    const timerId = intervalRef.current;

    return () => clearInterval(timerId);
  }, [index]);

  const prev = () => {
    setIndex((prevIndex) => {
      if (prevIndex === 0) return dataLength - 1;
      else return prevIndex - 1;
    });

    clearInterval(intervalRef.current);
  };

  const next = () => {
    setIndex((prevIndex) => {
      if (prevIndex === dataLength - 1) return 0;
      else return prevIndex + 1;
    });

    clearInterval(intervalRef.current);
  };

  return { activeIndex: index, prev, next };
};

export default useDirection;
