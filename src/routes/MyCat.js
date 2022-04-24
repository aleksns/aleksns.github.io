import "../App.css";
import CatSection from "../sections/CatSection";

export default function MyCat() {
  return (
    <>
      <div className="hero-image hero-mycat-image">
        <div className="hero-text-container">
          <h1>MY CAT</h1>
        </div>
      </div>

      <CatSection classes={"section header-section"} />
    </>
  );
}
