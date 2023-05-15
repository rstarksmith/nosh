import { useState, useEffect } from "react";
import TruckList from '../components/TruckList'

const FoodTrucks = () => {
  const [trucks, setTrucks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false)

  useEffect(() => {
     fetch("/trucks").then((resp) => {
       if (resp.ok) {
         resp.json().then((truckData) => {
          setTrucks(truckData)
          setIsLoading(false)});
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
        {isLoading && <h2>Loading...</h2>}
        <TruckList trucks={trucks} />
      </div>
    </div>
  );
};

export default FoodTrucks;
