

const Home = ({ user }) => {

 

  if (!user) return <div>loading..</div>;
  
  return (
    <div>
      {user.username}
      fdgsdfgsdfgsdfgsdfg
      <img src="" alt="home infographic" />
      sdfgdfgsdgfsdfgsdgf
      <button>Sign Up</button>
    </div>
  );
}

export default Home