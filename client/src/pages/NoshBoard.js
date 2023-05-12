import { useEffect, useState } from "react"
import VisitList from "../components/VisitList";


const NoshBoard = () => {
  const [visits, setVisits] = useState([])

   useEffect(() => {
     fetch("/noshboard").then((resp) => {
       if (resp.ok) {
         resp.json().then((newUser) => {
           setVisits(newUser);
         });
       }
     });
   }, []);

   

   if (!visits) return <div>loading..</div>

   const removeVisit = (deletedVisit) => {
    const reviseVisits = visits.filter(
      (visit) => visit.id !== deletedVisit.id
    );
    setVisits(reviseVisits);
   }
  
  return (
    <div>
      <h1>Nosh Board</h1>
      <div className="card-container">
        <VisitList removeVisit={removeVisit} visits={visits} />
      </div>
    </div>
  );
}

export default NoshBoard