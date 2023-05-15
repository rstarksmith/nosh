import { useState } from 'react'
import { NavLink, Link } from "react-router-dom";


const NavBar = ({ logOut, user }) => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  <a href="https://imgur.com/gSE8qr7">
    <img src="https://i.imgur.com/gSE8qr7.png" alt="nosh up logo" />
  </a>;

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-toggle" onClick={toggleNav}>
          <span className="navbar-toggle-icon"></span>
        </div>
        <Link to="/">
          <img
          className='navbar-logo'
            src="https://i.imgur.com/gSE8qr7.png"
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
                <button onClick={logOut}>Sign out</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}
//   const navigate = useNavigate()

//   return (
//     <div>
//       <ul>
//         <li>
//           <Link to="/">nosh.up</Link>
//         </li>
//         <li>
//           <NavLink to="/">Home</NavLink>
//         </li>
//         <li>
//           <NavLink to="/profile">Profile</NavLink>
//         </li>
//         <li>
//           <NavLink to="/trucks">Food Trucks</NavLink>
//         </li>
//         <li>
//           <NavLink to="/noshboard">Nosh Board</NavLink>
//         </li>
//         <li>
//           <NavLink to="/signin">signin</NavLink>
//         </li>
//         <li>
//           <NavLink to="/signup">signup</NavLink>
//         </li>
//           <button onClick={logOut}>logout</button>

//       </ul>
//     </div>
//   );
// };

export default NavBar;

