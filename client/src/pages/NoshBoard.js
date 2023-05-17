import { useEffect, useState } from "react"
import VisitList from "../components/VisitList";

const NoshBoard = () => {
  const [visits, setVisits] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

   useEffect(() => {
     fetch("/noshboard").then((resp) => {
       if (resp.ok) {
         resp.json().then((visitList) => {
           setVisits(visitList);
           setIsLoading(false);
         });
       } else {
         resp.json().then((data) => setError(data.error));
       }
     });
   }, []);

   const removeVisit = (deletedVisit) => {
    const reviseVisits = visits.filter(
      (visit) => visit.id !== deletedVisit.id
    );
    setVisits(reviseVisits);
   }

   const editVisits = (updatedVisit) => {
    const newVisitsList = visits.map(v => {
      if(v.id === updatedVisit.id) {
        return updatedVisit
      } else {
        return v
      }
    })
    setVisits(newVisitsList)
   }
  
  if (error) return <h1>{error}</h1>
  
  return (
    <div>
      <h1>Nosh Board</h1>
      {isLoading && <h2>Loading...</h2>}
      <div className="card-container">
        <VisitList removeVisit={removeVisit} visits={visits} editVisits={editVisits} />
      </div>
    </div>
  );
}

export default NoshBoard