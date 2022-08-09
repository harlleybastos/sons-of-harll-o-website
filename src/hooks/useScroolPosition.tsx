import { RefObject, useEffect, useState } from "react";

const useScrollPosition = (ref: RefObject<HTMLElement>) => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollCheck = window.scrollY > 20;
      setScroll(scrollCheck);
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  });

  return scroll;
};

export default useScrollPosition;
