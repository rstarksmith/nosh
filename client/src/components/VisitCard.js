import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import VisitEditForm from "./VisitEditForm"
import CommentCard from "./CommentCard"
import CommentForm from "./CommentForm";
import { useAuth } from '../contexts/AuthContext'

const VisitCard = ({ visit, removeVisit, editVisits, editable }) => {
  const [comments, setComments] = useState(visit.comments);
  const [showForm, setShowForm] = useState(false)
  const [showComments, setShowComments] = useState(false);
  const [seeForm, setSeeForm] = useState(false);
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
    toggleCommentForm()
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

  const toggleCommentForm = () => {
    setSeeForm(!seeForm);
  };

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
        {editable && (<div>
          {user.id === visit.user_id && (
            <>
              <p onClick={toggleForm}>edit</p>
              <p onClick={handleDelete}>delete</p>
            </>
          )}
        </div>)}
        <button className="comment-toggle-button" onClick={toggleComments}>
          {showComments ? "Comments" : "Comments"}
        </button>
        {showComments ? (
          <>
            {displayComments}
            {seeForm ? (
              <>
                <CommentForm
                  visit={visit}
                  user={user}
                  addComment={addComment}
                />
                <button onClick={toggleCommentForm}>cancel</button>
              </>
            ) : (
              <button onClick={toggleCommentForm}>Leave Comment</button>
            )}
          </>
        ) : null}
      </div>
    </div>
  );
}
  

export default VisitCard


