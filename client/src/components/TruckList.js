import TruckCard from "./TruckCard";

const TruckList = ({ trucks }) => {

  const displayTrucks = trucks.map((truck) => <TruckCard key={truck.id} truck={truck} />)
   
  return (
    <div>
      {displayTrucks}   
    </div>
  )
}

export default TruckList