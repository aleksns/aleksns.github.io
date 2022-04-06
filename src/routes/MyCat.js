import "../App.css";
import CatSection from "../sections/CatSection";

export default function MyCat() {
  return (
    <>
    <div className="hero-image hero-mycat-image">
        <div className="hero-text-container">
          <h1>My Cat</h1>
        </div>
      </div>

      <div className="section"></div>

    <CatSection />
    </>
  );
}
