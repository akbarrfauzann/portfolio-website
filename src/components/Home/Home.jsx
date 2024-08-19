import Social from "./Social.jsx";
import Data from "./Data.jsx";
import "./Home.css";
import ScrollDown from "./ScrollDown.jsx";

export default function Home() {
  return (
    <section className="section home" id="home">
      <div className="home-container container grid">
        <div className="home-content grid">
          <Social />
          <div className="home-img"></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
}
