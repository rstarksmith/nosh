import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">nosh.up</Link>
        </li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/trucks">Food Trucks</NavLink>
        </li>
        <li>
          <NavLink to="/noshboard">Nosh Board</NavLink>
        </li>
        <NavLink to="/signin">signin</NavLink>
      </ul>
    </div>
  );
};

export default NavBar;
