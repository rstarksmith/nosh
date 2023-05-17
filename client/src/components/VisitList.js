import VisitCard from "./VisitCard"


const VisitList = ({ visits, removeVisit, editVisits}) => {

    const displayVisits = visits.map((visit) => (<VisitCard key={visit.id} editVisits={editVisits} removeVisit={removeVisit} visit={visit} />));
    
    return (
      <>
        {displayVisits}
      </>
    );
}

export default VisitList