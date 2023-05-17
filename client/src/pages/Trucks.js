import { useState, useEffect } from "react";
import TruckList from '../components/TruckList'

const FoodTrucks = () => {
  const [trucks, setTrucks] = useState([]);
  const [search, setSearch] = useState("");
  const [filterBy, setFilterBy] = useState("All");
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

  const handleFilter = (e) => {
    setFilterBy(e.target.value);
  };

  const trucksToDisplay = trucks.filter(t => {
    if(filterBy === "All") {
      return trucks
    } else {
      return (t.city === filterBy)}})

  const displayedTrucks = trucksToDisplay.filter((truck) => {
    return truck.name.toLowerCase().includes(search.toLowerCase());
  });

 if (error) return <h1>{error}</h1>
 
  return (
    <div>
      <h1>Texas Food Trucks</h1>
      <label>Search: </label>
      <input
        className="input"
        autoComplete="off"
        id="search"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Truck Name..."
        type="text"
        value={search}
      />
      <div className="filter-container">
        <label>City: </label>
        <select className="dropdown" name="filter" onChange={handleFilter}>
          <option className="drop-op" value="All">
            All 
          </option>
          <option value="Fort Worth">Fort Worth</option>
          <option value="Dallas">Dallas</option>
          <option value="Austin">Austin</option>
          <option value="Houston">Houston</option>
        </select>
      </div>
      <div className="truck-card-container">
        {isLoading && <h2>Loading...</h2>}
        <TruckList trucks={displayedTrucks} />
      </div>
    </div>
  );
};

export default FoodTrucks;
