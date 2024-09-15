import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
function Logo() {
  return (
    <Link
      className={twMerge(
        "flex h-[100px] w-[100px] items-center",
        "transition-all duration-500 hover:rotate-2 hover:scale-110",
      )}
    >
      <img
        className="object-contain"
        src="../../public/jaifa-academy_logo.png"
        alt=""
      />
    </Link>
  );
}

export default Logo;
