import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const Home = () => {
  const navigate = useNavigate()
  const { user }= useAuth()

  return (
    <div>
      <img
        src="https://i.imgur.com/VFDQebQ.png"
        alt="home infographic"
        className="header-img"
      />
      <div className="center-bttn">
        {user ? (
          <button className="bttn" onClick={() => navigate("/profile")}>
            Profile
          </button>
        ) : (
          <button onClick={() => navigate("/signup")} className="bttn">
            Sign Up
          </button>
        )}
      </div>

      <img
        className="center-img"
        src="https://i.imgur.com/gDfiD0b.png"
        alt="home infographic"
      />
      <h2>
        Sign up and Get ready to capture, share, and savor the diverse flavors
        that make Texas a food lover's paradise!
      </h2>

      {/* <img
        className="home-img"
        src="https://i.imgur.com/zzaP7qE.jpg"
        alt="home infographic"
      />
      <img
        className="home-img"
        src="https://i.imgur.com/MHZRPfL.png"
        alt="home infographic"
      />
      <img
        className="home-img"
        src="https://i.imgur.com/b4A7SWx.jpg"
        alt="home infographic"
      /> */}
      <h4>
        From Austin to Houston, Fort Worth to Dallas, share the flavors that
        make Texas cuisine legendary! Engage with fellow foodies by adding
        comments Snap and Share: Capture your favorite Texas food truck moments
        Comments: Engage with the community by adding comments Favorites: Save
        your go-to food trucks and meals for quick access and easy reference.
        Connect with fellow food enthusiasts, and get inspired sign up and Get
        ready to capture, share, and savor the diverse flavors that make Texas a
        food lover's paradise! "Nosh Up: Food Photography with a Side of Texas
        Flavor!"
      </h4>
    </div>
  );
}

export default Home

