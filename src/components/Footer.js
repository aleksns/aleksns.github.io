import "../App.css";

export default function Footer(props) {
  const { isButtonScrollToTopVisible } = props;

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="nav-main footer">
      <div>
        <p>All rights reserved</p>
        <button
          className="btn-totop"
          onClick={handleScrollToTop}
          style={{ display: isButtonScrollToTopVisible ? "block" : "none" }}
        >
          🡱
        </button>
      </div>
    </div>
  );
}
