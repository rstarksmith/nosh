import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import VisitEditForm from "./VisitEditForm"
import CommentCard from "./CommentCard"

const VisitCard = ({ visit, deleteVisit, removeVisit }) => {
  const [comments, setComments] = useState(visit.comments);
  const [showForm, setShowForm] = useState(false)
  const [showComments, setShowComments] = useState(false);
  const navigate = useNavigate()
  
  const handleDelete = () => {
    fetch (`/visits/${visit.id}`, {
      method: 'DELETE'
    }).then((resp) => {
      if (resp.ok) {
        // deleteVisit(visit)
        removeVisit(visit)
       };
      })
  }

  //  const handleEdit = () => {
  //    fetch(`/visits/${id}`, {
  //      method: "PATCH",
  //    });
  //  };

  const displayComments = comments.map((comment) => (
    <CommentCard key={comment.id} comment={comment} />
  ));

  if (!visit) return <div>loading</div>;

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const toggleForm = () => {
    setShowForm(!showForm)
  }

  return (
    <div className="card">
      <img
        className="card-image"
        src={visit.photo}
        alt="food truck meal"
        onClick={() => navigate(`/trucks/${visit.truck_id}`)}
      />
      <div className="card-content">
        <p className="card-title">{visit.author} </p>
        {toggleForm ? (
          <VisitEditForm visit={visit} toggleForm={toggleForm} />
        ) : (
          <p className="card-text">{visit.caption}</p>
        )}

        <button onClick={toggleForm}>edit</button>
        <button onClick={handleDelete}>delete</button>
        <button>Comment</button>
        {comments.length > 0 ? (
          <>
            <button className="comment-toggle-button" onClick={toggleComments}>
              {showComments ? "Hide Comments" : "Show Comments"}
            </button>
            {showComments && displayComments}
          </>
        ) : null}
      </div>
    </div>
  );
}
  

export default VisitCard


