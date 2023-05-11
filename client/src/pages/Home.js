import { useNavigate } from 'react-router-dom'

const Home = ({ user }) => {
  const navigate = useNavigate()

  return (
    <div>
      fdgsdfgsdfgsdfgsdfg
      <img src="" alt="home infographic" />
      sdfgdfgsdgfsdfgsdgf
      <button onClick={()=>navigate('/signup')}>Sign Up</button>
    </div>
  );
}

export default Home