import "../App.css";
import gitLogo from "../images/github-icon.png";

export default function GitLink() {
  const gitUrl = "https://github.com/aleksns";

  const openInNewTab = () => {
    const newWindow = window.open(gitUrl, "_blank", "noopener noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
      <a
        className="git-link"
        underline="none"
        onClick={openInNewTab}
      >
        <img src={gitLogo} className="git-img"></img>
      </a>
  );
}