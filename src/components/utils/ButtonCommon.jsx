import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

ButtonCommon.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

function ButtonCommon({ children, className, onClick }) {
  return (
    <button
      className={twMerge(
        className,
        "h-10 bg-accent-100 text-complementary-100",
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonCommon;
