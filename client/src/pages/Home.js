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
      <div class="front-page">
        <div class="infographic">
          {" "}
          <img
            className="center-img"
            src="https://i.imgur.com/gDfiD0b.png"
            alt="home infographic"
          />
        </div>
        <div class="text-area">
          <h2 className="center-txt">
            Sign up and Get ready to capture, share, and savor the diverse
            flavors that make Texas a food lover's paradise!
          </h2>
          <h2 className="center-txt">
            Engage with fellow foodies by adding comments
          </h2>
          <h2 className="center-txt">
            Snap and Share: Capture your favorite food truck moments
          </h2>
          <h2 className="center-txt">
            Favorites: Save your go-to food trucks for quick access
          </h2>
        </div>
        <div class="footer"></div>
        <div class="photo-area">
          {" "}
          <img
            className="home-img"
            src="https://i.imgur.com/zzaP7qE.jpg"
            alt="home infographic"
          />
        </div>
        <div class="text-area-2">
          <h4>
            From Austin to Houston, Fort Worth to Dallas, share the flavors that
            make Texas cuisine legendary! "Nosh Up: Food Photography with a Side
            of Texas Flavor!"
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Home

