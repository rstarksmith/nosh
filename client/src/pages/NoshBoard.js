import { useEffect, useState } from "react"
import VisitCard from "../components/VisitCard";

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

  const displayVisits = visits.map((visit) => <VisitCard key={visit.id} visit={visit} />);
  return (
    <div>
      <ul className="cards">{displayVisits}</ul>
      this will display visitcards from users who chose to share visits. flip
      through 20 at time or 20 random you can click on the cards to be taken to
      truck page, you can leave comments on a visit. this will have comment
      form.
    </div>
  );
}

export default NoshBoard