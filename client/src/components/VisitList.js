import VisitCard from "./VisitCard"

const VisitList = ({ user, visits, removeVisit }) => {

    const displayVisits = visits.map((visit) => (<VisitCard key={visit.id} user={user} removeVisit={removeVisit} visit={visit} />));
    
    return (
      <>
        {displayVisits}
      </>
    );
}

export default VisitList