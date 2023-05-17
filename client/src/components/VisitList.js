import VisitCard from "./VisitCard"


const VisitList = ({ visits, editable}) => {

    const displayVisits = visits.map((visit) => (<VisitCard key={visit.id}  editable={editable}  visit={visit} />));
    
    return (
      <>
        {displayVisits}
      </>
    );
}

export default VisitList