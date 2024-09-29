import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import ButtonCommon from "../utils/ButtonCommon";

function IntroSection() {
  const navigate = useNavigate();

  return (
    <section
      className={twMerge(
        "relative flex flex-col bg-gradient-to-b from-prime-100/70 to-accent-100/70 py-0",
        "sm:flex-row sm:items-center sm:justify-between sm:from-prime-100 sm:to-accent-100 sm:py-5",
      )}
    >
      <div className="">
        <img
          src="https://picsum.photos/500"
          alt=""
          className="absolute -z-10 h-[500px] w-screen object-cover sm:hidden"
        />
        <img
          src="https://picsum.photos/600"
          alt=""
          className={twMerge("hidden", "sm:block")}
        />
      </div>
      <div
        id="text-frame"
        className={twMerge(
          "flex h-[500px] flex-col justify-between px-4 py-4 text-center",
          "sm:static sm:w-1/2 sm:justify-normal sm:gap-8 sm:text-start",
        )}
      >
        <h1 className={twMerge("text-4xl")}>
          Welcome to <b>Jaifa Academy</b>
        </h1>

        <h2 className={twMerge("text-2xl sm:text-2xl")}>
          &#34;Where <b>Passion</b> Meets <b>Opportunity</b>&#34;
        </h2>
        <p className="text-base sm:text-sm lg:text-base">
          At Jaifa Academy, we believe in nurturing talent, fostering
          discipline, and providing the best environment for both young players
          and football enthusiasts to thrive. Our state-of-the-art facilities
          are designed to support not only competitive athletes but also
          families and community members who share a passion for football.
        </p>
        <ButtonCommon onClick={() => navigate("contact")}>
          About Us
        </ButtonCommon>
      </div>
    </section>
  );
}

export default IntroSection;
