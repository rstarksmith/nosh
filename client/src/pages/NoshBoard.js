import { useEffect, useState } from "react"
import VisitList from "../components/VisitList";


const NoshBoard = ({ user }) => {
  const [visits, setVisits] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

   useEffect(() => {
     fetch("/noshboard").then((resp) => {
       if (resp.ok) {
         resp.json().then((newUser) => {
           setVisits(newUser);
           setIsLoading(false);
         });
       } else {
         resp.json().then((data) => setError(data.error));
       }
     });
   }, []);

   

  //  if (!visits) return <div>loading..</div>

   const removeVisit = (deletedVisit) => {
    const reviseVisits = visits.filter(
      (visit) => visit.id !== deletedVisit.id
    );
    setVisits(reviseVisits);
   }
  
  if (error) return <h1>{error}</h1>
  
  return (
    <div>
      <h1>Nosh Board</h1>
      <div className="card-container">
        {isLoading && <h2>Loading...</h2>}
        <VisitList user={user} removeVisit={removeVisit} visits={visits} />
      </div>
    </div>
  );
}

export default NoshBoard