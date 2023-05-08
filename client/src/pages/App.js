import { Routes, Route } from 'react-router-dom'
import NavBar from "../components/NavBar";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import Home from "./Home";
import Profile from "./Profile";
import Trucks from "./Trucks";
import TruckPage from "./TruckPage";
import NoshBoard from "./NoshBoard";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/trucks" element={<Trucks />} />
        <Route path="/trucks/:id" element={ <TruckPage />} />
        <Route path="/noshboard" element={ <NoshBoard /> } />
      </Routes>
    </>
  );
}

export default App;
