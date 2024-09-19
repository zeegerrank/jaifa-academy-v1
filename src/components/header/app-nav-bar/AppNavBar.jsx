import { Link, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import useAppNavBar from "../../../hooks/useAppNavBar";
import HamburgurMenu from "./HamburgurMenu";
import nav_menu from "../../../data/nav_menu.json";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

AppNavBar.propTypes = {
  className: PropTypes.string,
};

function AppNavBar({ className }) {
  /** For Button Padding Adjustment
   * You are suppose to change at Link classname to appropriate size
   */
  const { open, setOpen, handleOpen } = useAppNavBar();

  const location = useLocation();
  const currPage = location.pathname.split("/")[1];

  return (
    <motion.nav
      className={twMerge(
        "absolute inset-0 z-10 h-screen w-auto overflow-hidden transition-all duration-200",
        "sm:static sm:h-auto sm:w-auto",
        className,
      )}
      animate={open ? "open" : "closed"}
      variants={{
        open: { height: ["100px", "100px", "100vh"] },
        closed: { height: "100px" },
      }}
    >
      {/* this is where you adjust hight of button navbar */}
      <ul
        className={twMerge(
          "absolute z-0 flex flex-col sm:flex-wrap",
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
                "flex h-dvh items-center justify-center bg-prime-100 text-sm font-semibold text-accent-200",
                "border-b-2 border-b-accent-100",
                "transition-all duration-150 hover:bg-prime-200 hover:sm:border-b-4 hover:sm:border-accent-100 hover:sm:shadow",
                "sm:h-auto sm:border-b-2 sm:border-b-accent-100/10 sm:bg-prime-100 sm:px-8",
                each.to === currPage &&
                  "underline underline-offset-8 hover:underline-offset-2",
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
    </motion.nav>
  );
}

export default AppNavBar;
