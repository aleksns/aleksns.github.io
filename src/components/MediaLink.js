import "../App.css";

export default function MediaLink(props) {
  const { icon, url } = props;

  const openInNewTab = () => {
    const newWindow = window.open(url, "_blank", "noopener noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <button className="btn-media" onClick={openInNewTab}>
      <img src={icon} alt="Media Logo" className="media-icon"></img>
      </button>
  );
}
