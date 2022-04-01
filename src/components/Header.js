import { NavLink } from 'react-router-dom';
import '../App.css';
import siteLogoImg from "../images/siteLogo.png";

export default function Header() {
  return (
    <div className="header-main">
        <NavLink to="/">
        <img src={siteLogoImg} className="home-link-img"></img>
        </NavLink>
        
        <div className="container-header-links">
        <NavLink to="/contacts">Projects</NavLink>
        <NavLink to="/contacts">My Cat</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        </div>
    </div>
  );
}
