import "../App.css";

export default function AboutSection() {
  return (
    <div>

      <div style={{ position: "relative" }}>
        <div className="hero-quote-image"></div>
        <div className="hero-text-container">
          <h1>An Inspirational Quote</h1>
          <h3>That makes you say "Huh... That's true"</h3>
        </div>
      </div>

      <h2 className="section header-section">ABOUT</h2>

      <div className="section-text-container">
        <p className="section-text-content">
          I started my programming path with pure Java and switched to
          JavaScript. Being able to "visualize" the work was a deciding factor
          to stay and focus more on the front end.
        </p>
        <p className="section-text-content">
          Since then I have been working as an independent contractor for
          software development companies and as a freelance software developer.
        </p>
        <p className="section-text-content">
          I have a big passion for game design and development. In my free time,
          I work on my mobile game project - an RPG Survival game that will
          eliminate the huge p2w aspect of similar types... I'm kidding, it will
          not.
        </p>
        <h4 className="section-text-content-headline">I love traveling.</h4>
      </div>
    </div>
  );
}
