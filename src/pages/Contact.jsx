import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import AddressBox from "../components/contact/AddressBox";

function Contact() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-accent-100 pb-3 text-3xl font-bold">
        Visit us here!
      </h1>
      <div id="map-frame">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.5104637723243!2d100.76793727457672!3d14.817420071732553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311e071d4728be3f%3A0xc710f691ce9c4bf8!2z4LmD4LiI4Lif4LmJ4Liy4Lit4LiE4Liy4LmA4LiU4Lih4Li14LmI!5e1!3m2!1sth!2sth!4v1726405054037!5m2!1sth!2sth"
          allowFullScreen={true}
          loading="lazy"
          className={twMerge("h-72 w-[320px] rounded-lg shadow")}
        ></iframe>
      </div>
      <AddressBox>Surprise</AddressBox>
    </div>
  );
}

export default Contact;
