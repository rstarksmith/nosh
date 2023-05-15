import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import VisitList from '../components/VisitList'
import VisitForm from '../components/VisitForm'

const TruckPage = ({ user }) => {
  const [truck, setTruck] = useState("");
  const [visits, setVisits] = useState("");
  const [toggleBttn, setToggleBttn] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/trucks/${id}`).then((resp) => {
      if (resp.ok) {
        resp.json().then((truckData) => {
          setTruck(truckData);
          setVisits(truckData.visits);
        });
      } else {
        resp.json().then((resp) => setError(resp.error));
      }
    });
  }, [id]);


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
// need user access on this page to set the fav button upon navigating
  //  const setFav = (user) => {
  //   const isIt = user.favorites.some(favorite => favorite.truck_id === truckdata.id)
  //  }

  //  const myFav = user.favorites.filter((f) => f.truck_id === truck.id);

  //  const showFav = () => {
  //    if (myFav > 0) {
  //      setToggleBttn(myFav);
  //    }
  //  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  if (error) return <h1>{error}</h1>;
  if (!visits || !user) return <h1>Loading...</h1>;

  return (
    <div>
      <div>
        <img src={truck.image} alt={truck.name} />
      </div>
      <h1>{truck.name}</h1>
      <h3>
        {truck.city}, {truck.state}
      </h3>
      <p>{truck.cuisine}</p>

      <button onSubmit={addFavorite} type="submit">
        {toggleBttn ? "♥︎ Favorite" : "♡ Favorite"}
      </button>
      <a href={truck.yelp} target="_blank" rel="noopener noreferrer">
        <img
          src="https://i.imgur.com/B5PO9U1.png"
          className="yelp-icon"
          alt="yelp link"
        />
      </a>
      <button onClick={toggleForm}>
        {showForm ? "Cancel" : "Share Visit"}
      </button>
      {showForm ? (
        <div>
          <h2>Share Your Visit: </h2>
          <VisitForm truck={truck} />
        </div>
      ) : (
        <div>
          <h2>{visits.length === 0 ? "Be the First to Visit!" : "Nosh snaps"}</h2>
          <VisitList visits={visits} />
        </div>
      )}
    </div>
  );
}

export default TruckPage