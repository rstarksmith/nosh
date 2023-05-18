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
      <form onSubmit={handleAddComment}>
        <input
          type="text"
          name="reply"
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          placeholder={`Comment for ${visit.author}..`}
          className="input"
          autoComplete="off"
        />
        <button type="submit">Post</button>
      </form>
      {errors
        ? Object.entries(errors).map(([key, value]) => (
            <p className="err" key={value}>
              ⚠︎ {key} {value}
            </p>
          ))
        : null}
    </div>
  );
}
  

export default CommentForm