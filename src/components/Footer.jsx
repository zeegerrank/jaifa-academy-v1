import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import Logo from "./Logo";
import Divider from "./Divider";
import nav_menu from "../data/nav_menu.json";

const associate = [
  { label: "วัดพระบาทน้ำพุ", to: "#" },
  { label: "Jaifa Farm", to: "#" },
  { label: "Jaifa Product", to: "#" },
  { label: "NathaSart", to: "#" },
];

const contactInfo = [
  {
    label: "@jiafaacademy-line-office",
    icon: "fa-brands fa-line ",
    iconSize: "fa-2x",
    to: "#",
  },
  {
    label: "Jaifa Academy",
    icon: "fa-brands fa-facebook ",
    iconSize: "fa-2x",
    to: "#",
  },
  {
    label: "099-999-9999",
    icon: "fa-solid fa-square-phone ",
    iconSize: "fa-2x",
    to: "#",
  },
  {
    label: "099-999-9999",
    icon: "fa-solid fa-square-phone ",
    iconSize: "fa-2x",
    to: "#",
  },
];

function Footer() {
  return (
    <section className={twMerge("bg-prime-100")}>
      <div
        className={twMerge(
          "flex w-auto flex-col items-center justify-center",
          "pt-3",
        )}
      >
        <div
          className={twMerge(
            "flex w-full flex-col justify-around py-3",
            "sm:flex-row",
          )}
        >
          <div className="flex px-2 sm:flex-col">
            <Logo className={twMerge("hidden pb-3 sm:block sm:h-auto")} />
            <div className={twMerge("flex flex-col gap-3 px-10", "sm:px-0")}>
              <h1 className="font-bold">Contact</h1>
              <div className={twMerge("flex flex-col gap-1 py-2")}>
                <Link className={twMerge("flex items-center")}>
                  <i className="fa-solid fa-map-location-dot fa-2x"></i>
                  <span className="text-balance underline">
                    {" "}
                    125/6 หมู่ 6 ตำบลนิคมสร้างตนเอง อำเภอเมืองลพบุรี
                    จังหวัดลพบุรี 15000
                  </span>
                </Link>
                {contactInfo.map((el, i) => (
                  <Link
                    key={i}
                    className={twMerge("flex items-center gap-2 py-1")}
                  >
                    <i className={twMerge(el.icon, el.iconSize)}></i>
                    {el.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Divider className="sm:hidden" />
          <div
            id="links-box"
            className={twMerge(
              "flex flex-col items-center",
              "",
              "sm:w-auto sm:items-start sm:gap-4",
            )}
          >
            <h1 className={twMerge("pb-3 pt-6 font-bold", "sm:pb-0 sm:pt-0")}>
              Links
            </h1>
            <div
              className={twMerge(
                "flex flex-wrap justify-around gap-2",
                "sm:flex-col sm:gap-4",
              )}
            >
              {associate.map((el, i) => (
                <button
                  className={twMerge(
                    "list-none",
                    "bg-accent-100 text-complementary-100",
                    "px-2 py-1",
                  )}
                  to={el.to}
                  key={i}
                >
                  {el.label}
                </button>
              ))}
            </div>
          </div>

          <div
            className={twMerge(
              "",
              "flex flex-col items-center justify-center",

              "gap-2 sm:items-start sm:justify-start sm:py-0",
            )}
          >
            <h1 className={twMerge("pb-3 pt-6 font-bold", "sm:pb-0 sm:pt-0")}>
              Site Map
            </h1>
            <div className={twMerge("flex gap-4", "sm:flex-col")}>
              {nav_menu.map((el, i) => (
                <Link className="list-none underline" to={el.to} key={i}>
                  {el.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* creadential part */}
        <div className={twMerge("flex flex-col gap-4", "sm:w-full sm:gap-0")}>
          <div className={twMerge("", "sm:py-0 sm:pt-3")}>
            <div className={twMerge("pt-6 text-center")}>
              Copyright &copy; 2024 Jaifa Academy - All Rights Reserved.
              <br />
              Designed By SKPB
            </div>
          </div>
          <div
            className={twMerge(
              "w-full text-end text-2xl font-bold",
              "",
              "sm:py-0",
            )}
          >
            JAIFA ACADEMY
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
