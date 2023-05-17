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

  
  if (error) return <h1>{error}</h1>
  
  return (
    <div>
      <h1>Nosh Board</h1>
      {isLoading && <h2>Loading...</h2>}
      <div className="card-container">
        <VisitList  visits={visits}  />
      </div>
    </div>
  );
}

export default NoshBoard