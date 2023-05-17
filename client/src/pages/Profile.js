import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import VisitCard from "../components/VisitCard";

const Profile = ({ deleteVisit }) => {
  const [profile, setProfile] = useState(null)
  const [editable, setEditable] = useState(true);
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const { user } = useAuth();

  useEffect(() => {
    fetch('/profile').then((resp) => {
      if (resp.ok) {
        resp.json().then((profileData) => {
          setProfile(profileData)
        });
      } else {
        resp.json().then((resp) => setError(resp.error));
      }
    });
  }, []);

  // const editable = true

  if (!user) return <h1>Not Authorized</h1>
  if (!profile) return <h1>Loading..</h1>;

  const removeVisit = (deletedVisit) => {
    const revisedVisits = profile.visits.filter((visit) => visit.id !== deletedVisit.id);
    setProfile(prevState => ({ ...prevState, visits: revisedVisits}));
  };

  const editVisits = (updatedVisit) => {
    const newVisitsList = profile.visits.map((v) => {
      if (v.id === updatedVisit.id) {
        return updatedVisit;
      } else {
        return v;
      }
    });
    setProfile(prevState => ({...prevState, visits: newVisitsList}));
  };
 
  const displayUserVisits = profile.visits.map((visit) => {
    return <VisitCard key={visit.id} editable={editable} removeVisit={removeVisit} editVisits={editVisits} visit={visit} />
  });

  const displayFavorites = profile.favorites.map(f => {
  return <button onClick={() => navigate(`/trucks/${f.truck_id}`)} key={f.id}>{f.fav}</button>})

  
  return (
    <div>
      <img src={profile.avatar} alt="avatar" className="avatar" />
      <h2>{profile.username}</h2>
      <h3>{profile.tagline}</h3>
      <div>
        <h2>My Favorite Trucks</h2>
        <div>{displayFavorites}</div>
      </div>
      <div className="card-container">
        {displayUserVisits}
        </div>
    </div>
  );
}

export default Profile