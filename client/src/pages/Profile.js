import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import VisitCard from "../components/VisitCard";
import ProfileForm from '../components/ProfileForm';

const Profile = () => {
  const [profile, setProfile] = useState(null)
  const [showForm, setShowForm] = useState(false)
  // should i hav a favs state?
  // const [editable, setEditable] = useState(true)
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

  const removeVisit = (deletedVisit) => {
    const revisedVisits = profile.visits.filter(
      (visit) => visit.id !== deletedVisit.id
    );
    setProfile((prevState) => ({ ...prevState, visits: revisedVisits }));
  };

  const editVisits = (updatedVisit) => {
    const newVisitsList = profile.visits.map((v) => {
      if (v.id === updatedVisit.id) {
        return updatedVisit;
      } else {
        return v;
      }
    });
    setProfile((prevState) => ({ ...prevState, visits: newVisitsList }));
  };

  const editable = true 
  
  if (!user) return <h1>Not Authorized</h1>
  if (!profile) return <h1>Loading..</h1>;
 
  const displayUserVisits = profile.visits.map((visit) => {
    return (
      <VisitCard
        key={visit.id}
        editable={editable}
        removeVisit={removeVisit}
        editVisits={editVisits}
        visit={visit}
      />
    );
  });

  const displayFavorites = profile.favorites.map(f => {
    return <button onClick={() => navigate(`/trucks/${f.truck_id}`)} key={f.id} className='myfav-bttn'>{f.fav}</button>})

  
  const clickHandler = () => {
      setShowForm(!showForm);
      // stretch update avatar photo too
  };

  const handleTagEdit = (editedTag) => {
    setProfile(prevState => ({...prevState, tagline: editedTag }))
  }

  return (
    <div className="profile-layout">
      {error && { error }}
      <div className="profile-con">
        <div className="avatar-con">
          <img src={profile.avatar} alt="avatar" className="avatar" />
        </div>
        <div className="info-con">
          <h2>{profile.username}</h2>
          {showForm ? (
            <ProfileForm
              handleTagEdit={handleTagEdit}
              profile={profile}
              clickHandler={clickHandler}
            />
          ) : (
            <>
              <h3>{profile.tagline}</h3>
              <button className='bttn' onClick={clickHandler}>update profile</button>
            </>
          )}
        </div>
        <div className="badges-con">
          <h2>Posts</h2>
          <h2>Comments</h2>
          <h2>Nosher since</h2>
          <h2>{profile.visits.length}</h2>
          <h2>{profile.comments}</h2>
          <h2>{profile.created_at}</h2>
        </div>
        <div className="favs-con">
          {profile.favorites.length > 0 && (
            <>
              <h2>My Favorite Trucks</h2>
              <div>{displayFavorites}</div>
            </>
          )}
        </div>
      </div>
      <div className="visits-con">
        <div className="card-container">{displayUserVisits}</div>
      </div>
    </div>
  );
}

export default Profile