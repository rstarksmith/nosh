import { useState } from "react";
import CommentForm from "./CommentForm"

const CommentCard = ({ visit, comment, deleteComment }) => {
  const [seeForm, setSeeForm] = useState(false)
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

  const toggleTheForm = () => {
    setSeeForm(!seeForm)
  }

  return (
    <div>
      <p>
        {comment.commentor} {comment.reply} <button onClick={handleDeleteComment}>trashcan</button>
      </p>
      {seeForm ? (
        <CommentForm visit={visit} comment={comment} />
      ) : (
        <button onClick={toggleTheForm}>Leave Comment</button>
      )}
    </div>
  );
}

export default CommentCard