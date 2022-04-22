import "../App.css";
import arrowUpImg from "../images/arrowUp.png";

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
      <p>All rights reserved</p>
      <button
        className="btn-totop"
        onClick={handleScrollToTop}
        style={{ display: isButtonScrollToTopVisible ? "block" : "none" }}
      >
        <img
          src={arrowUpImg}
          alt="arrow button"
          className="btn-totop-icon"
        ></img>
      </button>
    </div>
  );
}
