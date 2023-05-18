import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";


const CommentCard = ({ comment, deleteComment }) => {
  const [error, setError] = useState(null)

  const { user } = useAuth();
 

  const handleDeleteComment = () => {
     fetch(`/comments/${comment.id}`, {
       method: "DELETE",
     }).then((resp) => {
       if (resp.ok) {
         deleteComment(comment.id);
       } else {
         resp.json().then((resp) => setError(resp.error));
       }
     });
  }

  if (error) return <h1>{error}</h1>
  return (
    <div>
      <p>
        {comment.commentor} {comment.reply}{" "}{user.id === comment.user_id && (<img onClick={handleDeleteComment} className="trash" src="https://i.imgur.com/EmzBZP9.png" alt="trashcan"/>)}
      </p>
    </div>
  );
}

export default CommentCard

