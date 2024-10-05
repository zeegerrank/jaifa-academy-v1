import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import useDetectScroll from "../hooks/useDetectScroll";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

Logo.propTypes = {
  className: PropTypes.string,
};

function Logo({ className }) {
  const { scrollDirection, scrollPosition } = useDetectScroll();
  const [hide, setHide] = useState(false);
  useEffect(() => {
    scrollPosition > 150 ? setHide(true) : setHide(false);
  }, [scrollDirection, scrollPosition]);

  return (
    <Link
      to="/"
      onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
      className={twMerge(
        "flex h-[120px] w-[120px] items-center sm:ml-6",
        "transition-all duration-500 hover:rotate-2 hover:scale-110",
        hide && "sm:h-0",
        className,
      )}
    >
      <img
        className={twMerge(
          "h-auto object-contain transition-all",
          hide && "sm:h-0",
          className,
        )}
        src="/jaifa-academy_logo.png"
        alt=""
      />
    </Link>
  );
}

export default Logo;
