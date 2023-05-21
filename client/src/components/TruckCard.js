import { useNavigate } from "react-router-dom";


const TruckCard = ({ truck }) => {
  const navigate = useNavigate()


  return (
    <div className="truck-card" onClick={() => navigate(`/trucks/${truck.id}`)}>
      <img src={truck.image} alt={truck.name} className="truck-card-image" />
      <h2 className="truck-card-title">{truck.name}</h2>
    </div>
  );
}

export default TruckCard

