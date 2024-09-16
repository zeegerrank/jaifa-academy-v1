import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import useAppNavBar from "../../../hooks/useAppNavBar";
import HamburgurMenu from "./HamburgurMenu";
import nav_menu from "../../../data/nav_menu.json";
import PropTypes from "prop-types";

AppNavBar.propTypes = {
  className: PropTypes.string,
};

function AppNavBar({ className }) {
  /** For Button Padding Adjustment
   * You are suppose to change at Link classname to appropriate size
   */
  const { open, setOpen, handleOpen } = useAppNavBar();

  return (
    <nav
      className={twMerge(
        "absolute inset-0 z-10 h-screen w-auto overflow-hidden transition-all",
        "sm:static sm:h-auto sm:w-auto",
        !open && "h-[100px]",
        className,
      )}
    >
      {/* this is where you adjust hight of button navbar */}
      <ul
        className={twMerge(
          "absolute z-0 flex flex-col",
          "h-screen w-screen justify-around",
          "transition-all duration-700",
          open ? "left-0" : "left-full",
          "sm:relative sm:left-auto sm:h-[100px] sm:w-auto sm:flex-row",
        )}
      >
        {nav_menu.map((each, i) => {
          return (
            <Link
              className={twMerge(
                "bg-prime-100 text-accent-200 flex h-dvh items-center justify-center text-sm font-semibold",
                "hover:bg-prime-200 transition-all duration-700 sm:hover:shadow",
                "sm:bg-prime-100 sm:h-auto sm:px-8",
              )}
              to={each.to}
              key={i}
              onClick={() => setOpen(false)}
            >
              {each.label}
            </Link>
          );
        })}
      </ul>
      <HamburgurMenu onClick={handleOpen} open={open} />
    </nav>
  );
}

export default AppNavBar;
