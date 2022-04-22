import "../App.css";

export default function ProjectLink(props) {
  const { url, title } = props;
  const gitUrl = url;

  const openInNewTab = () => {
    const newWindow = window.open(gitUrl, "_blank", "noopener noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <button className="project-card-link" onClick={openInNewTab}>
      {title}
    </button>
  );
}
