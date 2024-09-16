import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import AddressBox from "../components/contact/AddressBox";

function Contact() {
  return (
    <div className={twMerge("flex flex-col items-center px-16")}>
      <h1
        className={twMerge(
          "mb-4 text-3xl font-bold text-accent-100",
          "sm:mb-3",
        )}
      >
        Visit us here!
      </h1>

      <div className="w-full sm:flex">
        <div className="flex justify-center" id="map-frame">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.5104637723243!2d100.76793727457672!3d14.817420071732553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311e071d4728be3f%3A0xc710f691ce9c4bf8!2z4LmD4LiI4Lif4LmJ4Liy4Lit4LiE4Liy4LmA4LiU4Lih4Li14LmI!5e1!3m2!1sth!2sth!4v1726405054037!5m2!1sth!2sth"
            allowFullScreen={true}
            loading="lazy"
            className={twMerge(
              "h-72 w-[320px] rounded-lg shadow",
              "lg:w-[640px]",
            )}
          ></iframe>
        </div>
        <div
          className={twMerge(
            "flex w-full flex-col items-center justify-between sm:items-start",
            "sm:w-full",
          )}
        >
          <AddressBox>
            125/6 หมู่ 6 ตำบลนิคมสร้างตนเอง อำเภอเมืองลพบุรี จังหวัดลพบุรี 15000
          </AddressBox>
          <div className="mx-auto flex w-full flex-col">
            <div
              className={twMerge(
                "mt-3 flex items-center justify-around gap-3 sm:ml-5 sm:justify-start",
              )}
            >
              <Link>
                <i className="fa-brands fa-line fa-3x text-accent-100"></i>
              </Link>
              <Link>
                <i className="fa-brands fa-facebook fa-3x text-accent-100"></i>
              </Link>
            </div>
            <div className="mt-3 flex w-full flex-col items-center justify-center gap-2 sm:ml-5 sm:items-start sm:justify-start">
              <Link>
                <div className="flex items-center gap-2 rounded bg-accent-100/30 px-1 py-[2px] ring ring-accent-100/70">
                  <i className="fa-solid fa-square-phone-flip fa-2x text-accent-100"></i>{" "}
                  <span className="text-xs text-accent-100">
                    Office: 095-638-4529
                    <br />
                    avilable 08.00 - 17.00
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
