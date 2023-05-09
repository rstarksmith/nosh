

const CommentCard = ({ comment }) => {
  return (
    <div>
        <p>{comment.commentor} {comment.reply}</p>
        <p></p>

    </div>
  )
}

export default CommentCard