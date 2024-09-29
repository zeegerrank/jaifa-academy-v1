import { twMerge } from "tailwind-merge";
import ButtonCommon from "../utils/ButtonCommon";

function FacilitySection() {
  const bulletList = [
    {
      icon: "fa-solid fa-futbol",
      head: "Full-size football fields",
      body: "Recomend for accommodate official matches and training sessions",
    },
    {
      icon: "fa-solid fa-road-spikes",
      head: "High-quality turf",
      body: "Provided to ensure safety and optimal performance for all players",
    },
    {
      icon: "fa-solid fa-dumbbell",
      head: "Modern gym (Coming Soon)",
      body: "Offering strength and conditioning programs tailored to athletes",
    },
    {
      icon: "fa-regular fa-handshake",
      head: "Event hosting capability",
      body: "including seating areas, locker rooms, and ample parking space, ideal for tournaments and large-scale events",
    },
  ];

  return (
    <section
      className={twMerge(
        "relative flex flex-col items-center bg-gradient-to-b from-prime-100/40 to-accent-100/40 py-4 text-center",
        "overflow-hidden sm:flex-col",
        "lg:flex-row-reverse",
      )}
    >
      <div></div>
      <div
        id="text-frame"
        className={twMerge("flex flex-col", "sm:gap-8 sm:p-10")}
      >
        <img
          src="https://picsum.photos/800"
          alt=""
          className="absolute inset-0 -z-10 h-[750px] object-none sm:hidden"
        />
        <img
          src="https://picsum.photos/1000/500"
          alt=""
          className={twMerge(
            "hidden object-cover",
            "sm:absolute sm:left-0 sm:-z-10 sm:block sm:h-[700px] sm:w-screen sm:-translate-y-14",
            "lg:h-[650px]",
          )}
        />
        <h1 className={twMerge("px-4 text-4xl", "")}>
          World-Class Football Facilities
        </h1>
        <p className="px-4">
          Our academy is proud to offer a football facility that meets
          professional standards. Whether you&#39;re looking for a place to
          train, compete, or simply enjoy a game
        </p>

        <div className="grid grid-cols-2 gap-4 px-4 py-4">
          {bulletList.map((each, i) => (
            <div
              key={i}
              className={twMerge("flex flex-col items-center text-center")}
            >
              <i className={twMerge(each.icon, "fa-2x")}></i>
              <strong>{each.head}</strong>
              <div>{each.body}</div>
            </div>
          ))}
        </div>
        <p className="px-4">
          Whether you&#39;re a local team looking for training grounds or an
          organization seeking a venue for your next event, Jaifa Academy is
          ready to meet your needs.
        </p>
        <ButtonCommon className={twMerge("w-full")}>Visit Us</ButtonCommon>
      </div>
    </section>
  );
}

export default FacilitySection;
