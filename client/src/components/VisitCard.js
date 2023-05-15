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

  // i need the user.id on the card so i can hide the edit and delete if the user.id
  // is === to the visit.user_id 

  const displayComments = comments.map((comment) => (
    <CommentCard key={comment.id} visit={visit} comment={comment} />
  ));

  if (!visit) return <div>loading</div>;

  const displayRating = (visit) => {
    if (visit.rating === 0) {
      return 1;
    } else if (visit.rating === 1) {
      return 11;
    } else if (visit.rating === 2) {
      return 111;
    } else {
      return "♥︎♥︎♥︎♥︎";
    }
  };

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
        <div>
          {showForm ? (
            <VisitEditForm visit={visit} toggleForm={toggleForm} />
          ) : (
            <p className="card-text">{visit.caption}</p>
          )}{" "}
        </div>
        <p>{displayRating(visit)}</p>
        <p>{visit.created_at}</p>
        <button onClick={toggleForm}>edit</button>
        <button onClick={handleDelete}>delete</button>
        {/* make a trash can icon for delete */}
        <br/>
        {comments.length > 0 ? (
          <>
            <button className="comment-toggle-button" onClick={toggleComments}>
              {showComments ? "Hide Comments" : "+Comments"}
            </button>
            {showComments && displayComments}
          </>
        ) : null}
      </div>
    </div>
  );
}
  

export default VisitCard


