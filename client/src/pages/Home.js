

const Home = ({ user, avatar }) => {

   console.log(avatar);

  if (!user || !avatar) return <div>loading..</div>;
  
  return (
    <div>
     
      {user.username}
      <img
      src={avatar}
      alt="user avatar" />
      this is the home page
    </div>
  );
}

export default Home