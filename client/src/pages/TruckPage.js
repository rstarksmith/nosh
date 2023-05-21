import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import VisitList from '../components/VisitList'
import VisitForm from '../components/VisitForm'
import { useAuth } from '../contexts/AuthContext'

const TruckPage = () => {
  const [truck, setTruck] = useState("");
  const [visits, setVisits] = useState("");
  // const [myFavs, setMyFavs] = useState([])
  const [toggleBttn, setToggleBttn] = useState(false);
  const [showForm, setShowForm] = useState(false);
  // const [editable, setEditable] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();
  const { user } = useAuth();

  // set fav button to disable if already favorited

  useEffect(() => {
    fetch(`/trucks/${id}`).then((resp) => {
      if (resp.ok) {
        resp.json().then((truckData) => {
          setTruck(truckData);
          setVisits(truckData.visits);
          // getFavs()
        });
      } else {
        resp.json().then((resp) => setError(resp.error));
      }
    });
  }, [id]);

  // const getFavs = () => {
  //   fetch('/favorites').then((resp) => {
  //     if (resp.ok) {
  //       resp.json().then((resp) => {
  //         setMyFavs(resp);
  //       });
  //     } else {
  //       resp.json().then((resp) => setError(resp.error));
  //     }
  //   });
  // }

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
        resp.json().then(setToggleBttn(true));
      } else {
        resp.json().then((resp) => {
          setError(resp.error);
        });
      }
    });
  };
    
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
      <div className="truck-info-">
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
        <form onSubmit={addFavorite}>
          <button className="tk-bttn" type="submit">
            {toggleBttn ? "♥︎ Favorite" : "♡ Favorite"}
          </button>
        </form>
        <button onClick={toggleForm} className="tk-bttn">
          {showForm ? "Cancel" : "Share Visit"}
        </button>
      </div>
      {showForm ? (
        <div className="truck-visits">
          <h1 className="tk-visit-txt">Share Your Visit: </h1>
          <VisitForm
            truck={truck}
            toggleForm={toggleForm}
            addToVisits={addToVisits}
          />
        </div>
      ) : (
        <div className="truck-visits">
          <h1 className="tk-visit-txt">
            {visits.length === 0 ? "Be the First to Visit!" : "Nosh snaps"}
          </h1>
          <div className="truck-page-visits">
            <VisitList visits={visits} editable={editable} />
          </div>
        </div>
      )}
    </div>
  );
}

export default TruckPage