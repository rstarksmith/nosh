import VisitCard from "./VisitCard"

const VisitList = ({ visits, removeVisit }) => {

    const displayVisits = visits.map((visit) => (<VisitCard key={visit.id}  removeVisit={removeVisit} visit={visit} />));

    // if (!visits) return <div>Loading...</div>
    
    return (
      <>
        {displayVisits}
      </>
    );
}

export default VisitList