import { useEffect, useRef, useState } from "react";

function useDetectScroll() {
  const [scrollPosition, setScrollPosition] = useState(null);
  const [scrollDirection, setScrollDirection] = useState(null);

  const prevScollPositionRef = useRef(null);

  useEffect(() => {
    prevScollPositionRef.current = scrollPosition;
  }, [scrollPosition]);

  useEffect(() => {
    const handleScoll = () => {
      setScrollPosition(window.scrollY);

      setScrollDirection(
        prevScollPositionRef.current > window.scrollY ? "up" : "down",
      );
    };
    window.addEventListener("scroll", handleScoll);
    return () => {
      window.removeEventListener("scroll", handleScoll);
    };
  }, []);

  return { scrollDirection, scrollPosition };
}

export default useDetectScroll;
