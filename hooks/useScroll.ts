import { useEffect, useState } from "react";

const useScroll = (): null | number => {
  const [scrollY, setScrollY] = useState<null | number>(null);

  const scrollEvent = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);

    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  return scrollY;
};

export default useScroll;
