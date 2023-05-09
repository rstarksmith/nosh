import { NavLink, Link } from "react-router-dom";

const NavBar = ({ logOut }) => {

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
        <li>
          <NavLink to="/signin">signin</NavLink>
        </li>
        <li>
          <NavLink to="/signup">signup</NavLink>
        </li>
          <button onClick={logOut}>logout</button>
       
      </ul>
    </div>
  );
};

export default NavBar;
