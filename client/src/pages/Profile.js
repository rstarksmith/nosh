import { useNavigate } from "react-router-dom";
import VisitForm from "../components/VisitForm"
import VisitCard from "../components/VisitCard";

const Profile = ({ user }) => {
  const navigate = useNavigate()

 
  // useEffect(() => {
  //   fetch("/profile").then((resp) => {
  //     if (resp.ok) {
  //       resp.json().then((newUser) => {
  //         setUser(newUser);
  //       });
  //     }
  //   });
  // }, []);

  if (!user) return <div>loading..</div>

  const displayUserVisits = user.visits.map((visit) => (
    <VisitCard key={visit.id} visit={visit} />
  ));

  const displayFavorites = user.favorites.map(favorite => <button onClick={() => navigate(`/trucks/${favorite.truck_id}`)} key={favorite.id}>{favorite.fav}</button>)

  return (
    <div>
      <img src={user.avatar} alt="avatar" className="avatar" />
      <h2>{user.username}</h2>
      <h3>{user.tagline}</h3>
      <h2>My Favorite Trucks</h2>
      <div>{displayFavorites}</div>
      <ul className="cards">
      {displayUserVisits}
      </ul>
      Pofile displays my visits and my favorites, my avatar I can see and edit
      everything, others can not view this page but they can see my visits on
      the board and truck page
      <button>New Post</button>
      <VisitForm />
    </div>
  );
}

export default Profile