// import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import VisitForm from "../components/VisitForm"
import VisitCard from "../components/VisitCard";

const Profile = ({ user, deleteVisit }) => {
  
  const navigate = useNavigate()

  
  if (!user) return <div>Loading..</div>;
  // useEffect(() => {
  //   fetch("/profile").then((resp) => {
  //     if (resp.ok) {
  //       resp.json().then((newUser) => {
  //         setUser(newUser);
  //       });
  //     }
  //   });
  // }, []);

 


  const displayUserVisits = user.visits.map((visit) => (
    <VisitCard key={visit.id} visit={visit} deleteVisit={deleteVisit} />
  ));

  const displayFavorites = user.favorites.map(favorite => <button onClick={() => navigate(`/trucks/${favorite.truck_id}`)} key={favorite.id}>{favorite.fav}</button>)

  return (
    <div>
      <img src={user.avatar} alt="avatar" className="avatar" />
      <h2>{user.username}</h2>
      <h3>{user.tagline}</h3>
      <h2>My Favorite Trucks</h2>
      <div>{displayFavorites}</div>
      <div className="card-container">{displayUserVisits}</div>
    </div>
  );
}

export default Profile