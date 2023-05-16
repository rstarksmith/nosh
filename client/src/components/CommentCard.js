import { useState } from "react";


const CommentCard = ({ comment, deleteComment }) => {
  const [errors, setErrors] = useState(null)

  const handleDeleteComment = () => {
     fetch(`/comments/${comment.id}`, {
       method: "DELETE",
     }).then((resp) => {
       if (resp.ok) {
         deleteComment(comment.id);
       } else {
         resp.json().then((resp) => setErrors(resp.errors));
       }
     });
  }

  return (
    <div>
      <p>
        {comment.commentor} {comment.reply}{" "}<img onClick={handleDeleteComment} className="trash" src="https://i.imgur.com/EmzBZP9.png" alt="trashcan"/>
      </p>
    </div>
  );
}

export default CommentCard

