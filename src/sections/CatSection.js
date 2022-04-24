import "../App.css";
import Carousel from "../components/Carousel";

export default function CatSection() {
  return (
    <>

      <h2 className="section header-section">FAQ</h2>

      <div className="section-text-container">
        <h4 className="section-text-content-headline">
        Why does an average-looking cat have its own site section?
        </h4>
        <p className="section-text-content">
          It is quite deceptive. She tricks you into thinking that there is no
          "royal blood" in her, but her Scottish Fold genes reveal themselves
          the more you look
        </p>

        <h4 className="section-text-content-headline">
          There is a photo with her and what seems to be planet Mars in the
          background. Real or fake?
        </h4>
        <p className="section-text-content">
          Good question. We can't say for sure whether it's photoshopped or
          real, since none of us have been on Mars but "Mars Perseverance" logo
          is something to consider. Personally, I believe it's possible
        </p>

        <h4 className="section-text-content-headline">
          To the previous question - the boulders on Mars cast shadows and your
          cat doesn't. How so?
        </h4>
        <p className="section-text-content">
          Egyptians believed cats were magical beings. I don't see why such
          potent creatures wouldn't be able to modify the magnitude and affect
          their shadows
        </p>

        <h4 className="section-text-content-headline">
          Where is she on a "Chonk Scale"?
        </h4>
        <p className="section-text-content">
          A solid Hefty Chonk. But a very healthy cat
        </p>

        <h4 className="section-text-content-headline">
          A very active cat or a sleeper?
        </h4>
        <p className="section-text-content">
          I would say, it's an active sleeper
        </p>

        <h4 className="section-text-content-headline">
          Name and a favorite meal?
        </h4>
        <p className="section-text-content">
          Lil Puss. Anything that can be chewed
        </p>
      </div>

      <div className="section"></div>

      <Carousel />
    </>
  );
}
