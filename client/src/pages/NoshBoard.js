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
  
  return (
    <div>
      <VisitList visits={visits} />
    </div>
  );
}

export default NoshBoard