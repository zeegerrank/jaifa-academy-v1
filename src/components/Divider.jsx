import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

Divider.propTypes = {
  className: PropTypes.string,
};

function Divider({ className }) {
  return (
    <div
      className={twMerge(className, "flex w-full items-center justify-center")}
    >
      <div id="divider" className="my-2 h-1 w-3/4 bg-slate-500/40"></div>
    </div>
  );
}

export default Divider;
