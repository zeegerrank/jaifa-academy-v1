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
        "bg-gradient-to-b from-prime-100/40 to-accent-100/40",
        "text-center",
        "relative overflow-hidden",
        "py-4",
      )}
    >
      <div
        id="text-frame"
        className={twMerge(
          "flex flex-col gap-2",
          "sm:grid sm:grid-cols-12 sm:items-center",
        )}
      >
        <div
          className={twMerge("flex flex-col gap-4", "sm:col-span-6 sm:px-4")}
        >
          <h1 className={twMerge("text-4xl")}>
            World-Class Football Facilities
          </h1>
          <p className="">
            Our academy is proud to offer a football facility that meets
            professional standards. Whether you&#39;re looking for a place to
            train, compete, or simply enjoy a game
          </p>
          <img
            src="https://picsum.photos/500"
            alt=""
            className={twMerge("sm:hidden")}
          />
          <div className="grid grid-cols-2">
            {bulletList.map((each, i) => (
              <div key={i} className={twMerge("flex flex-col items-center")}>
                <i className={twMerge(each.icon, "fa-2x")}></i>
                <strong>{each.head}</strong>
                <div>{each.body}</div>
              </div>
            ))}
          </div>
          <p className="">
            Whether you&#39;re a local team looking for training grounds or an
            organization seeking a venue for your next event, Jaifa Academy is
            ready to meet your needs.
          </p>
          <ButtonCommon className={twMerge("")}>Visit Us</ButtonCommon>
        </div>
        <img
          src="https://picsum.photos/800"
          alt=""
          className={twMerge(
            "hidden sm:block",
            "h-full object-cover sm:col-span-6",
          )}
        />
      </div>
    </section>
  );
}

export default FacilitySection;
