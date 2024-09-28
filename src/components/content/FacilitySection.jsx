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
        "relative flex flex-col gap-4 bg-gradient-to-b from-prime-100/70 to-accent-100/70 px-4 py-4 text-center",
      )}
    >
      <div>
        <img
          src="https://picsum.photos/1000"
          alt=""
          className="absolute inset-0 -z-10 h-[850px] object-none"
        />
      </div>
      <h1 className={twMerge("text-4xl")}>World-Class Football Facilities</h1>
      <p>
        Our academy is proud to offer a football facility that meets
        professional standards. Whether you&#39;re looking for a place to train,
        compete, or simply enjoy a game
        <div className="grid grid-cols-2 gap-4 py-4">
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
        Whether you&#39;re a local team looking for training grounds or an
        organization seeking a venue for your next event, Jaifa Academy is ready
        to meet your needs.
      </p>
      <ButtonCommon>Visit Us</ButtonCommon>
    </section>
  );
}

export default FacilitySection;
