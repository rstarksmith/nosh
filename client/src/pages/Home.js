import { useAuth } from '../contexts/AuthContext'

import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const { user }= useAuth()

  return (
    <div>
      <h1>nosh.up: Your Ticket to Texas Foodie Heaven</h1>
      <img src="" alt="home infographic" />
      <h2>
        Show off your favorite meals from the vibrant food truck scene across
        the Lone Star State
      </h2>
      <p>
        Sign up and Get ready to capture, share, and savor the diverse flavors
        that make Texas a food lover's paradise!
      </p>
      {user ? (
        <button onClick={() => navigate("/profile")}>Profile</button>
      ) : null}
    </div>
  );
}

export default Home
