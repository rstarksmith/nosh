import { useState, useEffect } from "react";
import TruckList from '../components/TruckList'

const FoodTrucks = () => {
  const [trucks, setTrucks] = useState([]);
  const [error, setError] = useState(false)

  useEffect(() => {
     fetch("/trucks").then((resp) => {
       if (resp.ok) {
         resp.json().then((truckData) => setTrucks(truckData));
       } else {
         resp.json().then((data) => setError(data.error));
       }
     });
  }, []);

 if (error) return <h1>{error}</h1>
 
  return (
    <div>
      <h1>Texas Food Trucks</h1>
      <div>
        <button>Fort Worth</button>
        <button>Dallas</button>
        <button>Austin</button>
        <button>Houston</button>
        <button>All</button>
      </div>
      <div>search bar</div>
      <div className="truck-card-container">
        <TruckList trucks={trucks} />
      </div>
    </div>
  );
};

export default FoodTrucks;
