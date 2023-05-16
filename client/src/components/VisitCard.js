import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Rating from './Rating'
import VisitEditForm from "./VisitEditForm"
import CommentCard from "./CommentCard"
import CommentForm from "./CommentForm";

const VisitCard = ({ user, visit, deleteVisit, removeVisit }) => {
  const [comments, setComments] = useState(visit.comments);
  const [showForm, setShowForm] = useState(false)
  const [showComments, setShowComments] = useState(false);
  const [seeForm, setSeeForm] = useState(false);
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
 
  const addComment = (newComment) => {
    setComments(prevState => [...prevState, newComment])
    toggleCommentForm()
  }
  
  const deleteComment = (deletedId) => {
    const editComments = comments.filter(comment => comment.id !== deletedId)
    setComments(editComments)
  }

  //  const handleEdit = () => {
  //    fetch(`/visits/${id}`, {
  //      method: "PATCH",
  //    });
  //  };

  // i need the user.id on the card so i can hide the edit and delete if the user.id
  // is === to the visit.user_id 

  const displayComments = comments.map((comment) => (
    <CommentCard key={comment.id} visit={visit} comment={comment} deleteComment={deleteComment}/>
  ));

  if (!visit) return <div>loading</div>;

  

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
        <p>
          <Rating visit={visit} /> <span className='card-date'>{visit.created_at}</span>
        </p>
        <div>
          {showForm ? (
            <>
              <p className="card-title">{visit.author} </p>
              <VisitEditForm visit={visit} toggleForm={toggleForm} />
            </>
          ) : (
            <>
              <p className="card-title">
                {visit.author}{" "}
                <span className="card-text">{visit.caption}</span>
              </p>
            </>
          )}{" "}
        </div>
        <button onClick={toggleForm}>edit</button>
        <button onClick={handleDelete}>delete</button>
        {comments.length > 0 ? (
          <>
            <button className="comment-toggle-button" onClick={toggleComments}>
              {showComments ? "Hide Comments" : "+Comments"}
            </button>
            {showComments ? (
              <>
                {displayComments}{" "}
                {seeForm ? (
                  <CommentForm
                    visit={visit}
                    user={user}
                    addComment={addComment}
                  />
                ) : (
                  <button onClick={toggleCommentForm}>Leave Comment</button>
                )}
              </>
            ) : null}
          </>
        ) : null}
      </div>
    </div>
  );
}
  

export default VisitCard


