import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import VisitList from '../components/VisitList'
import VisitForm from '../components/VisitForm'
import { useAuth } from '../contexts/AuthContext'

const TruckPage = () => {
  const [truck, setTruck] = useState("");
  const [visits, setVisits] = useState("");
  const [favs, setFavs] = useState([])
  // const [toggleBttn, setToggleBttn] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();
  const { user } = useAuth();

  useEffect(() => {
    fetch(`/trucks/${id}`).then((resp) => {
      if (resp.ok) {
        resp.json().then((truckData) => {
          setTruck(truckData);
          setVisits(truckData.visits);
          setFavs(truckData.favorites)
        });
      } else {
        resp.json().then((resp) => setError(resp.error));
      }
    });
  }, [id]);

  const isMyFav = favs.some(f => f.user_id === user.id)

  const addFavorite = (e) => {
    e.preventDefault();
    fetch("/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ truck_id: truck.id }),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then(resp => {
          addFav(resp)
          });
      } else {
        resp.json().then((resp) => {
          setError(resp.error);
        });
      }
    });
  };
    
  const addFav = (newFav) => {
    setFavs(prevState => [...prevState, newFav ])
  }

  const deleteFavorite = (e) => {
     e.preventDefault();
    const findId = favs.find(f=>f.user_id === user.id)
    fetch(`/favorites/${findId.id}`, {
      method: "DELETE"
    }).then((resp) => {
      if (resp.ok) {
          deleteFav(findId)
      }});
    }
  
  const deleteFav = (deleted) => {
    const editedFavs = favs.filter(f => f.id !== deleted.id)
    setFavs(editedFavs)
  }

  const addToVisits = (newVisit) => {
    if (newVisit.exclusive === false) {
      setVisits(prevState => [newVisit, ...prevState])
    } else {
      return null
      // could toggle a response <p>visit added</p>
    }
  }

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const editable = false

  if (error) return <h1>{error}</h1>;
  if (!visits || !user) return <h1>Loading...</h1>;

  return (
    <div className="tp-container">
      <div className="truck-image">
        <img src={truck.image} alt={truck.name} className="truck-pic" />
      </div>
      <div className="truck-info">
        <div className="tk-profile">
          <h1 className="info-txt">{truck.name}</h1>{" "}
          <a href={truck.yelp} target="_blank" rel="noopener noreferrer">
            <img
              src="https://i.imgur.com/B5PO9U1.png"
              className="yelp-icon"
              alt="yelp link"
            />
          </a>
          <h2 className="info-sub-txt">
            {truck.city}, {truck.state}
          </h2>
          <h2 className="info-sub-txt">{truck.cuisine}</h2>
          <button onClick={toggleForm} className="tk2-bttn">
            {showForm ? "Cancel" : "Share Visit"}
          </button>
        </div>
        <div className="tk-buttons">
          {!isMyFav ? (
            <form onSubmit={addFavorite}>
              <button className="tk-bttn" type="submit">
                ♡
              </button>
            </form>
          ) : (
            <form onSubmit={deleteFavorite}>
              <button className="tk-bttn" type="submit">
                ♥
              </button>
            </form>
          )}
        </div>
      </div>
      {showForm ? (
        <div>
          <h1 className="info-txt">Share Your Visit: </h1>
          <VisitForm
            truck={truck}
            toggleForm={toggleForm}
            addToVisits={addToVisits}
          />
        </div>
      ) : (
        <div>
          <h1 className="info-txt">
            {visits.length === 0 ? "Be the First to Visit!" : "Nosh snaps"}
          </h1>
          <div className="card-container">
            <VisitList visits={visits} editable={editable} />
          </div>
        </div>
      )}
    </div>
  );
}

export default TruckPage