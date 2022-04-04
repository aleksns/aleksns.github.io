import { NavLink } from 'react-router-dom';
import '../App.css';
import siteLogoImg from "../images/siteLogo.png";
import GitLink from './GitLink';

export default function Header() {
  return (
    <div className="nav-main">
      <div className="header"></div>
        <NavLink to="/" className="header-content">
        Aleksns
        </NavLink>
        <ul className="nav-header-links">
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contacts">My Cat</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <GitLink />
        </ul>
        <div className="header-hamburger header-content">
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
        
    </div>
  );
}
