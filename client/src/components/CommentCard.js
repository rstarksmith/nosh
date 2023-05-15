import { useState } from "react";
import CommentForm from "./CommentForm"

const CommentCard = ({ visit, comment }) => {
  const [seeForm, setSeeForm] = useState(false)

  const toggleTheForm = () => {
    setSeeForm(!seeForm)
  }

  return (
    <div>
      <p>
        {comment.commentor} {comment.reply} <button>trashcan</button>
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