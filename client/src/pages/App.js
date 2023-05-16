import { Routes, Route, useNavigate } from 'react-router-dom'
// import { useEffect, useState } from 'react';
import NavBar from "../components/NavBar";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import Home from "./Home";
import Profile from "./Profile";
import Trucks from "./Trucks";
import TruckPage from "./TruckPage";
import NoshBoard from "./NoshBoard";
import AuthContextProvider from '../contexts/AuthContext';


function App() {

  return (
    <>
      <AuthContextProvider>
        <NavBar  />
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn  />} />
          <Route
            path="/profile"
            element={<Profile />}
          />
          <Route path="/trucks" element={<Trucks />} />
          <Route path="/trucks/:id" element={<TruckPage />} />
          <Route path="/noshboard" element={<NoshBoard />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
