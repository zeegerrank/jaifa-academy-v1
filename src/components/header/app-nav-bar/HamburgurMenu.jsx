import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

HamburgurMenu.propTypes = {
  onClick: PropTypes.func,
  open: PropTypes.bool,
};

function HamburgurMenu({ onClick, open }) {
  const animate = open ? "open" : "closed";

  return (
    <motion.button
      className={twMerge(
        "absolute right-2 top-2 z-0 text-3xl transition-all",
        "sm:hidden",
      )}
      onClick={onClick}
    >
      <motion.div
        animate={animate}
        variants={{ open: { rotate: "360deg" }, closed: { rotate: "0deg" } }}
        className={twMerge(
          "relative h-9 w-10 rounded-sm duration-100",
          "bg-complementary-100/25",
        )}
      >
        <motion.span
          animate={animate}
          variants={{
            open: { translateY: "11px", rotate: "45deg" },
            closed: { rotate: "0deg" },
          }}
          className={twMerge(
            "absolute left-1 top-1 h-1 w-8 rounded-full",
            "bg-complementary-100",
          )}
        ></motion.span>
        <motion.span
          animate={animate}
          variants={{
            open: { opacity: "0" },
            closed: { rotate: "0deg" },
          }}
          className={twMerge(
            "absolute left-1 top-4 h-1 w-8 rounded-full",
            "bg-complementary-100",
          )}
        ></motion.span>
        <motion.span
          animate={animate}
          variants={{
            open: { translateY: "-12px", rotate: "-45deg" },
            closed: { rotate: "0deg" },
          }}
          className={twMerge(
            "absolute left-1 top-7 h-1 w-8 rounded-full",
            "bg-complementary-100",
          )}
        ></motion.span>
      </motion.div>
    </motion.button>
  );
}

export default HamburgurMenu;
