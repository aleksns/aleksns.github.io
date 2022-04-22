import { NavLink } from "react-router-dom";
import "../App.css";
import MediaLink from "./MediaLink";

import gitLogo from "../images/github-icon.png";
import linkedinLogo from "../images/linkedin-icon.png";

const gitUrl = "https://github.com/aleksns";
const linkedinUrl = "https://www.linkedin.com/in/aleksns/";

export default function Header() {
  return (
    <div className="nav-main">
      <div className="header"></div>

      <NavLink to="/" id="home-button" className="home-btn header-content">
        Aleksns
      </NavLink>

      <ul className="nav-header-links">
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/mycat">My Cat</NavLink>
        <NavLink to="/contactme">Contact</NavLink>
        <MediaLink id="github-link-id" icon={gitLogo} url={gitUrl} />
        <MediaLink
          id="linkedin-link-id"
          icon={linkedinLogo}
          url={linkedinUrl}
        />
      </ul>

      <div className="header-hamburger header-content">
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
      </div>
    </div>
  );
}
