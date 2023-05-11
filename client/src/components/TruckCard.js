import { useNavigate } from "react-router-dom";


const TruckCard = ({ truck }) => {
  const navigate = useNavigate()


  return (
    <div className="truck-card" onClick={() => navigate(`/trucks/${truck.id}`)}>
      <img src={truck.image} alt={truck.name} className="truck-card-image" />
      <h2 className="truck-card-title">{truck.name}</h2>
    </div>
    // <>
    //   <div onClick={() => navigate(`/trucks/${truck.id}`)}>
    //     <div>
    //       <img src={truck.image} alt={truck.name} />
    //     </div>
    //       <h2>{truck.name}</h2>
    //       <p>{truck.cuisine}</p>
    //   </div>
    // </>
  );
}

export default TruckCard

