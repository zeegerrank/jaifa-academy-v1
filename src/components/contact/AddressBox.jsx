import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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

  //   useEffect(() => {
  //     setInterval(copiedMessageShow, 300);
  //   }, [copiedMessageShow]);

  return (
    <>
      <div
        id="address-box"
        onClick={handleCopyAdress}
        className={twMerge(
          "relative mt-2 w-[320px] cursor-pointer rounded bg-sky-200 shadow ring ring-sky-300",
          "group transition-all duration-300 active:ring-4 active:ring-sky-400",
        )}
      >
        <h3
          className={twMerge(
            "w-16 rounded bg-sky-500 p-1 text-center text-sm text-sky-200",
            "duration-300 group-active:bg-sky-400 group-active:text-sky-900",
          )}
        >
          Address
        </h3>
        <div id="box-to-copy" className="inset-0 flex justify-between">
          <p className="p-2 text-sm">{address}</p>
          <button
            // onClick={handleCopyAdress}
            className={twMerge(
              "h-9 w-9 rounded bg-sky-300",
              "duration-300 group-active:bg-sky-200",
            )}
          >
            <i
              className={twMerge(
                "fa-regular fa-copy text-xl text-sky-100",
                "duration-300 group-active:text-sky-900",
              )}
            ></i>
          </button>
        </div>
        <motion.div
          className={twMerge("absolute inset-0 left-36 top-5 font-extrabold")}
          animate={show ? "show" : "gone"}
          variants={{ show: { scale: 1.5 }, gone: { opacity: 0 } }}
        >
          Fuck You !
        </motion.div>
      </div>
    </>
  );
}

export default AddressBox;
