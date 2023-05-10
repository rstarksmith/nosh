import { NavLink, Link, useNavigate } from "react-router-dom";
// import { ResponsiveNavbar } from "react-hamburger-menus";
// import "react-hamburger-menus/dist/style.css";

const NavBar = ({ logOut }) => {
  const navigate = useNavigate()

  return (
    // <ResponsiveNavbar
    //   logo={<p>nosh.up</p>}
    //   styles={{
    //     navigation: { fontFamily: "Arial, Helvetica, sans-serif" },
    //     navigationBarSmall: {
    //       backgroundColor: "aliceblue",
    //     },
    //     navigationCardSmall: {
    //       backgroundColor: "aliceblue",
    //     },
    //   }}
    // >
    //   {/* <button onClick={logOut}>Logout</button>
    //   <button onClick={() => navigate("/signin")}>Login</button> */}
    //   <ul>
    //     <li>
    //       <NavLink to="/">Home</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/profile">Profile</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/trucks">Food Trucks</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/noshboard">Nosh Board</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/signin">Sign in</NavLink>
    //     </li>
    //   </ul>
    // </ResponsiveNavbar>
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

