import "../App.css";

export default function ProjectLink(props) {
  const { url, title } = props;
  const gitUrl = url;

  const openInNewTab = () => {
    const newWindow = window.open(gitUrl, "_blank", "noopener noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="project-card-git-container"
    >
      <a
        className="project-card-git-link"
        underline="none"
        onClick={openInNewTab}
      >
        {title}
      </a>
    </div>
  );
}