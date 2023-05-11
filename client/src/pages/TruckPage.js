import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import VisitList from '../components/VisitList'

const TruckPage = ({ user }) => {
  const [truck, setTruck] = useState("")
  const [visits, setVisits] = useState("")
  const [toggleBttn, setToggleBttn] = useState(false)
  const [error, setError] = useState(false)
  const { id } = useParams()
  
  useEffect(() => {
    fetch(`/trucks/${id}`).then((resp) => {
      if (resp.ok) {
        resp.json().then((truckData) => {
        setTruck(truckData)
        setVisits(truckData.visits)});
      } else {
        resp.json().then((resp) => setError(resp.error));
      }
    });
  }, [id]);

  //  const setFav = ( user) => {
  //   const isIt = user.favorites.some(favorite => favorite.truck_id === truckdata.id)
  //  }

   

  const addFavorite = (e) => {
      e.preventDefault();
      fetch("/favorites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({truck_id: truck.id}),
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
  
  if (!visits || !user) return <div>loading...</div>
  if (error) return <h2>{error}</h2>

  return (
    <div>
      <img src={truck.image} alt={truck.name} />
      <h1>{truck.name}</h1>
      <h3>
        {truck.city}, {truck.state}
      </h3>
      <p>{truck.cuisine}</p>

      <button onClick={addFavorite} type='submit'>♡ Favorite</button>
      <button>♥︎ Favorite</button>

      <a href={truck.yelp} target="_blank" rel="noopener noreferrer">
        <img src="https://i.imgur.com/B5PO9U1.png" alt="yelp link" />
      </a>
      <div>
        <VisitList visits={visits} />
      </div>
    </div>
  );
}

export default TruckPage