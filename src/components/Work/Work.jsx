import "./Work.css";
import Works from "./Works";

export default function Work() {
  return (
    <section className="section portfolio" id="portfolio" data-aos="fade-up">
      <h2 className="section-title">Portfolio</h2>
      <span className="section-subtitle">Most recent works</span>
      <Works />
    </section>
  );
}
