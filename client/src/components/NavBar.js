import { useState } from 'react'
import { NavLink, Link } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';


const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  const { user, logOut } = useAuth();

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-toggle" onClick={toggleNav}>
          <span className="navbar-toggle-icon"></span>
        </div>
        <Link to="/">
          <img
            className="navbar-logo"
            src="https://i.imgur.com/StHLNbR.png"
            alt="nosh up logo"
          />
        </Link>
        <ul className={`navbar-links ${showNav ? "active" : ""}`}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {!user ? (
            <li>
              <NavLink to="/signin">Sign in</NavLink>
            </li>
          ) : (
            <>
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
              <li>
                <NavLink to="/trucks">Food Trucks</NavLink>
              </li>
              <li>
                <NavLink to="/noshboard">Nosh Board</NavLink>
              </li>
              <li>
                <p onClick={logOut} className="navbar-links-logout">
                  Sign out
                </p>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}
export default NavBar;

