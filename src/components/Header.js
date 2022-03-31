import { NavLink } from 'react-router-dom';
import '../App.css';

export default function Header() {
  return (
    <div className="header-main">
        <NavLink to="/contacts">Home</NavLink>
        <div className="container-header-links">
        <NavLink to="/contacts">Projects</NavLink>
        <NavLink to="/contacts">My Cat</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        </div>
    </div>
  );
}
