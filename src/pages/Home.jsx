import IntroSection from "../components/content/IntroSection";
import Divider from "../components/Divider";

function Home() {
  return (
    <>
      <IntroSection />
      <Divider />
      <section>
        <h2>World-Class Football Facilities</h2>
        <p>
          Our academy is proud to offer a football facility that meets
          professional standards. Whether you&#39;re looking for a place to
          train, compete, or simply enjoy a game
          <li>
            <strong>Full-size football fields</strong>
            <span>
              Recomend for accommodate official matches and training sessions
            </span>
          </li>
          <li>
            <strong>High-quality turf</strong>
            <span>
              Provided to ensure safety and optimal performance for all players
            </span>
          </li>
          <li>
            <strong>Full-size football fields</strong>
            <span>
              Offering strength and conditioning programs tailored to athletes
            </span>
          </li>
          <li>
            <strong>Event hosting capability</strong>
            <span>
              including seating areas, locker rooms, and ample parking space,
              ideal for tournaments and large-scale events
            </span>
          </li>
        </p>
      </section>
    </>
  );
}

export default Home;
