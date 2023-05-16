import { useState } from "react"

const CommentForm = ({ visit, addComment }) => {
  const [reply, setReply] = useState("")
  const [errors, setErrors] = useState(null)

  const handleAddComment = (e) => {
    e.preventDefault()
      const commentData = {
        reply,
        visit_id: visit.id,
      };
      fetch(`/visits/${visit.id}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentData),
      })
        .then((resp) => {
          if (resp.ok) {
            resp.json().then((newComment) => {
              addComment(newComment); 
            });
          } else {
            resp.json().then((resp) => setErrors(resp.errors));
          }
        });
  }

  return (
    <div>
      {errors ? {errors} : null }
      <form onSubmit={handleAddComment}>
        <label>Reply: </label>
        <input
          type="text"
          name="reply"
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          placeholder="Yummy! Great photo..."
          className="input"
          autoComplete="off"
        />
        <br />
        <button type="submit">Post Reply</button>
      </form>
      <button>Cancel</button>
    </div>
  );
}
  

export default CommentForm