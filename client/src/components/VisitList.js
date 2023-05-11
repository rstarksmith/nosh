import VisitCard from "./VisitCard"

const VisitList = ({ visits }) => {

    const displayVisits = visits.map((visit) => (<VisitCard key={visit.id} visit={visit} />));

    // if (!visits) return <div>Loading...</div>
    
    return (
      <div>
        <ul className="cards">
            {displayVisits}
        </ul>
      </div>
    );
}

export default VisitList