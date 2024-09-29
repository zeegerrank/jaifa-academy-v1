import { Link, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import useAppNavBar from "../../../hooks/useAppNavBar";
import HamburgurMenu from "./HamburgurMenu";
import nav_menu from "../../../data/nav_menu.json";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import useDetectScroll from "../../../hooks/useDetectScroll";

AppNavBar.propTypes = {
  className: PropTypes.string,
};

function AppNavBar({ className }) {
  /** For Button Padding Adjustment
   * You are suppose to change at Link classname to appropriate size
   */
  const location = useLocation();
  const { open, setOpen, handleOpen } = useAppNavBar();
  const { scrollDirection, scrollPosition } = useDetectScroll();

  const currPage = location.pathname.split("/")[1];

  return (
    <motion.nav
      className={twMerge(
        "absolute inset-0 z-30 h-screen w-auto overflow-hidden transition-all duration-75",
        "sm:static sm:h-auto sm:w-screen",
        className,
      )}
      animate={open ? "open" : "closed"}
      variants={{
        open: { height: ["50px", "50px", "100vh"] },
        closed: { height: "50px" },
      }}
    >
      {/* this is where you adjust hight of button navbar */}
      <ul
        className={twMerge(
          "absolute flex flex-col sm:flex-wrap",
          "h-screen w-screen justify-around",
          "transition-all duration-700",
          open ? "left-0" : "left-full",
          "sm:relative sm:left-auto sm:h-[50px] sm:w-screen sm:flex-row",
        )}
      >
        {/* for navMenuButton additional
        please adjust 
        Link element
        in className sm:w-1/${} <-- in this ${} area
        */}
        {nav_menu.map((each, i) => {
          return (
            <Link
              className={twMerge(
                "flex h-dvh items-center justify-center bg-prime-100/95 text-sm font-semibold text-accent-200",
                "border-b-2 border-b-accent-100/30",
                "transition-all duration-150 hover:bg-complementary-100/10 hover:sm:border-b-4 hover:sm:border-accent-100 hover:sm:shadow",
                "sm:h-auto sm:w-1/3 sm:border-b-2 sm:border-b-accent-100/10 sm:bg-prime-100/10 sm:px-8",
                each.to === currPage &&
                  "underline underline-offset-8 hover:underline-offset-4",
                currPage.length === 0 &&
                  each.to === "/" &&
                  "underline underline-offset-8 hover:underline-offset-4",
                scrollDirection === "up" &&
                  scrollPosition > 110 &&
                  "sticky top-0",
                scrollDirection === "down" &&
                  scrollPosition > 110 &&
                  "sticky -top-full",
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
