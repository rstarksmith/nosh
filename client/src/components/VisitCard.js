import VisitEditForm from "./VisitEditForm"
import CommentCard from "./CommentCard"

const VisitCard = ({ visit }) => {


// if user == visit.author setShowAuthor(true)

  const visitComments = visit.comments.map(comment => <CommentCard key={comment.id} comment={comment} />)
  
  return (
    <div>
      <div>
        <img src={visit.photo} alt="food" />
        <p>
          {visit.author} {visit.caption}
        </p>
        {visitComments}
        
      </div>

      <br />

      {/* {visit.created_at} */}
      {/* {visit.comments.map should I do comment card?} */}
      {/* option to delete and edit card, when clicked links to TruckPage */}
      <VisitEditForm />
    </div>
  );
}

export default VisitCard