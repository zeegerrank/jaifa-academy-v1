import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import useDetectScroll from "../../hooks/useDetectScroll";
import { useEffect, useState } from "react";
function Logo() {
  const { scrollDirection, scrollPosition } = useDetectScroll();
  const [hide, setHide] = useState(false);
  useEffect(() => {
    scrollPosition > 200 ? setHide(true) : setHide(false);
  }, [scrollDirection, scrollPosition]);

  return (
    <Link
      className={twMerge(
        "flex h-[100px] w-[100px] items-center sm:ml-6",
        "transition-all duration-500 hover:rotate-2 hover:scale-110",
        hide && "sm:h-0",
      )}
    >
      <img
        className={twMerge(
          "h-auto object-contain transition-all",
          hide && "sm:h-0",
        )}
        src="/jaifa-academy_logo.png"
        alt=""
      />
    </Link>
  );
}

export default Logo;
