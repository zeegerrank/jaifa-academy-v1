import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { useState } from "react";

AddressBox.propTypes = {
  children: PropTypes.string,
};

function AddressBox({ children: address }) {
  const [show, setShow] = useState(false);

  const copiedMessageShow = () => {
    setShow((pr) => !pr);
  };

  const handleCopyAdress = () => {
    navigator.clipboard.writeText(address);
    copiedMessageShow();
    setTimeout(copiedMessageShow, 400);
  };

  return (
    <>
      <div
        id="address-box"
        onClick={handleCopyAdress}
        className={twMerge(
          "bg-prime-100 ring-accent-100/30 relative mt-2 w-[320px] cursor-pointer rounded shadow ring",
          "active:ring-accent-200/70 group transition-all duration-300 active:ring-4",
        )}
      >
        <h3
          className={twMerge(
            "bg-accent-100 text-complementary-100 w-16 rounded p-1 text-center text-sm",
            "duration-75",
          )}
        >
          Address
        </h3>
        <div id="box-to-copy" className="inset-0 flex justify-between">
          <p className="text-accent-100 p-2 text-sm">{address}</p>
          <button
            className={twMerge("bg-accent-100 h-9 w-9 rounded", "duration-75")}
          >
            <i
              className={twMerge(
                "fa-regular fa-copy text-complementary-100 text-xl",
                "group-active:text-complementary-200 duration-300",
              )}
            ></i>
          </button>
        </div>
        <motion.div
          className={twMerge(
            "text-accent-100 absolute inset-0 left-36 top-5 font-extrabold",
          )}
          animate={show ? "show" : "gone"}
          variants={{ show: { scale: 1.2 }, gone: { opacity: 0 } }}
        >
          Copied
        </motion.div>
      </div>
    </>
  );
}

export default AddressBox;
