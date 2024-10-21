import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

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

function ContactFooter() {
  return (
    <div className={twMerge("flex flex-col gap-3 px-10", "sm:px-0")}>
      <h1 className="font-bold">Contact</h1>
      <div className={twMerge("flex flex-col gap-1 py-2")}>
        <Link className={twMerge("flex items-center")}>
          <i className="fa-solid fa-map-location-dot fa-2x"></i>
          <span className="text-balance underline">
            {" "}
            125/6 หมู่ 6 ตำบลนิคมสร้างตนเอง อำเภอเมืองลพบุรี จังหวัดลพบุรี 15000
          </span>
        </Link>
        {contactInfo.map((el, i) => (
          <Link key={i} className={twMerge("flex items-center gap-2 py-1")}>
            <i className={twMerge(el.icon, el.iconSize)}></i>
            {el.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ContactFooter;
