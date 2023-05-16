// import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import VisitCard from "../components/VisitCard";

const Profile = ({ deleteVisit }) => {
  const navigate = useNavigate()

  const { user } = useAuth();
  
  if (!user) return <div>Loading..</div>;
 

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