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
      <h1 className="trucks-title">Texas Food Trucks</h1>

      <div className="trucks-search-container">
        <h3 className="trucks-sub-title">
          Nosh Navigator: Find Food Trucks Near You
        </h3>
        <input
          className="input"
          autoComplete="off"
          id="search"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by truck name..."
          type="text"
          value={search}
        />
        <select className="input" name="filter" onChange={handleFilter}>
          <option className="drop-op" value="All">
            Search by city...
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
