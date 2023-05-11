import { useState } from 'react'
import { Link } from 'react-router-dom'
import VisitEditForm from "./VisitEditForm"
import CommentCard from "./CommentCard"

const VisitCard = ({ visit, deleteVisit, removeVisit }) => {
  const [comments, setComments] = useState(visit.comments);
  const [toggleBttn, setToggleBttn] = useState(false)
  const [showComments, setShowComments] = useState(false);
  
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

  const displayComments = comments.map((comment) => (
    <CommentCard key={comment.id} comment={comment} />
  ));

  if (!visit) return <div>loading</div>;

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="card">
      <img className="card-image" src={visit.photo} alt="food truck meal" />
      <div className="card-content">
        <p className="card-title">
          {visit.author} <span className="card-text">{visit.caption} </span>
        </p>
        <button>edit</button>
        <button onClick={handleDelete}>delete</button>
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

// return (
//     <div className="card">
//       <Link to={`/trucks/${visit.truck_id}`}>
//         <img className="card-img" src={visit.photo} alt="food" />
//       </Link>
//       <div className="container">
//         <p>
//           <span className='author'>{visit.author} </span> {visit.caption}
//         </p>
//         <div>{displayComments[0]}</div>
//         {comments.length > 1 ? (
//           <button className="buttn-card" onClick={showMore}>view more</button>
//         ) : null}
//         { toggleBttn ? (<div>{displayComments > displayComments[0]}</div>) : null }
//       </div>
//     </div>
//   );
// }

