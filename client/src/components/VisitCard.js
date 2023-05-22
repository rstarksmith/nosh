import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import VisitEditForm from "./VisitEditForm"
import CommentCard from "./CommentCard"
import CommentForm from "./CommentForm";
import { useAuth } from '../contexts/AuthContext'

const VisitCard = ({ visit, editable, removeVisit, editVisits }) => {
  const [comments, setComments] = useState(visit.comments);
  const [showForm, setShowForm] = useState(false)
  const [showComments, setShowComments] = useState(false);
  const navigate = useNavigate()
  const { user } = useAuth()
  
  const handleDelete = () => {
    fetch (`/visits/${visit.id}`, {
      method: 'DELETE'
    }).then((resp) => {
      if (resp.ok) {
        removeVisit(visit)
       };
      })
  }

  const addComment = (newComment) => {
    setComments(prevState => [...prevState, newComment])
  }
  
  const deleteComment = (deletedId) => {
    const editComments = comments.filter(comment => comment.id !== deletedId)
    setComments(editComments)
  }

  const displayComments = comments.map((comment) => (
    <CommentCard key={comment.id} visit={visit} comment={comment} deleteComment={deleteComment}/>
  ));

  if (!visit) return <div>loading</div>;

  const displayRating = () => {
    if (visit.rating === 1) {
      return (
        <img
          className="stars"
          src="https://i.imgur.com/1NJld7L.png"
          alt="1 star rating"
        />
      );
    } else if (visit.rating === 2) {
      return (
        <img
          className="stars"
          src="https://i.imgur.com/TB943d1.png"
          alt="2 star rating"
        />
      );
    } else if (visit.rating === 3) {
      return (
        <img
          className="stars"
          src="https://i.imgur.com/B7MFpPz.png"
          alt="3 star rating"
        />
      );
    } else {
      return (
        <img
          className="stars"
          src="https://i.imgur.com/fE0b86U.png"
          alt="4 star rating"
        />
      );
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
        <div>
          {showForm ? (
            <VisitEditForm
              visit={visit}
              toggleForm={toggleForm}
              editVisits={editVisits}
            />
          ) : (
            <>
              <p className="rate-container">
                {displayRating()}{" "}
                <span className="card-date">{visit.created_at}</span>
              </p>
              <p className="card-title">
                {visit.author}{" "}
                <span className="card-text">{visit.caption}</span>
              </p>
            </>
          )}
        </div>
        <div className="icons-container">
          <div className="comments-i">
            <img
              src="https://i.imgur.com/L3gnt8t.png"
              alt="comments"
              onClick={toggleComments}
              className="icons"
            />
            {comments.length > 0 ? (
              <p className="comments-num">{comments.length}</p>
            ) : null}
          </div>
          <div className="exclus-i">
            {/* <img
              src="https://i.imgur.com/L3gnt8t.png"
              alt="visit not shared"
              className="icons"
            /> */}
          </div>
          {editable && (
            <>
              {user.id === visit.user_id && (
                <>
                  <div className="edit-i">
                    <img
                      src="https://i.imgur.com/gu6WPiM.png"
                      alt="edit"
                      onClick={toggleForm}
                      className="icons-edit"
                    />
                  </div>
                  <div className="delete-i">
                    <img
                      src="https://i.imgur.com/EmzBZP9.png"
                      alt="delete"
                      onClick={handleDelete}
                      className="icons-trash"
                    />
                  </div>
                </>
              )}
            </>
          )}
        </div>
        <div></div>
        {showComments ? (
          <>
            {displayComments}
            <>
              <CommentForm visit={visit} user={user} addComment={addComment} />
            </>
          </>
        ) : null}
      </div>
    </div>
  );
}
  

export default VisitCard






