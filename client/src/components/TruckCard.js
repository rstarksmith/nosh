import { useNavigate } from "react-router-dom";

const TruckCard = ({ truck }) => {
  const navigate = useNavigate()

  console.log(truck)
  return (
    <>
      <div onclick={() => navigate(`/trucks/${truck.id}`)}>
        <div>
          <img src={truck.image} alt={truck.name} />
        </div>
          <h2>{truck.name}</h2>
          <p>{truck.cuisine}</p>
      </div>
    </>
  );
}

export default TruckCard