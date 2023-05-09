import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import NavBar from "../components/NavBar";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import Home from "./Home";
import Profile from "./Profile";
import Trucks from "./Trucks";
import TruckPage from "./TruckPage";
import NoshBoard from "./NoshBoard";


function App() {
  const [user, setUser] = useState(null)
  const [avatar, setAvatar] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/auth").then((resp) => {
      if (resp.ok) {
        resp.json().then((newUser) => {
          setUser(newUser);
        });
      }
    });
  }, []);

  const logInUser = (userObj) => {
    setUser(userObj.user)
    setAvatar(userObj.avatar);
    navigate("/");
  };

  const logOut = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then((resp) => {
      if (resp.ok) {
        setUser(null)
        setAvatar(null);
      }
    });
    navigate("/");
  };


  return (
    <>
      <NavBar logOut={logOut} />
      <Routes>
        <Route path="/" element={<Home user={user} avatar={avatar}/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn logInUser={logInUser} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/trucks" element={<Trucks />} />
        <Route path="/trucks/:id" element={<TruckPage />} />
        <Route path="/noshboard" element={<NoshBoard />} />
      </Routes>
    </>
  );
}

export default App;
