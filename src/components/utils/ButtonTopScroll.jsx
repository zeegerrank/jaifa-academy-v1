import { twMerge } from "tailwind-merge";
import useDetectScroll from "../../hooks/useDetectScroll";
import { useEffect, useState } from "react";

function ButtonTopScroll() {
  const { scrollPosition } = useDetectScroll();
  const [show, setShow] = useState(false);

  useEffect(() => {
    scrollPosition > document.body.offsetHeight / 4
      ? setShow(true)
      : setShow(false);
  }, [scrollPosition]);

  return (
    <button
      onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
      className={twMerge(
        "transition-all duration-700",
        show
          ? "fixed bottom-5 right-5 bg-accent-100/30 opacity-100"
          : "-bottom-full opacity-0",
      )}
    >
      <div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-10 text-complementary-100 transition-all duration-300 hover:scale-110"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <strong className="text-complementary-100">TOP</strong>
      </div>
    </button>
  );
}

export default ButtonTopScroll;
