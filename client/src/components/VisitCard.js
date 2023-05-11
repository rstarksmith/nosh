import { useState } from 'react'
import { Link } from 'react-router-dom'
import VisitEditForm from "./VisitEditForm"
import CommentCard from "./CommentCard"

const VisitCard = ({ visit }) => {
  const [comments, setComments] = useState(visit.comments)
  const [toggleBttn, setToggleBttn] = useState(false)


// if user == visit.author setShowAuthor(true)
  
  const displayComments = comments.map(comment => <CommentCard key={comment.id} comment={comment} />)
  
  if (!visit) return <div>loading</div>;
  
  const showMore = () => {
    
  }

  return (
    <div className="card">
      <Link to={`/trucks/${visit.truck_id}`}>
        <img className="card-img" src={visit.photo} alt="food" />
      </Link>
      <div className="container">
        <p>
          <span className='author'>{visit.author} </span> {visit.caption}
        </p>
        <div>{displayComments[0]}</div>
        {comments.length > 1 ? (
          <button className="buttn-card" onClick={showMore}>view more</button>
        ) : null}
        { toggleBttn ? (<div>{displayComments > displayComments[0]}</div>) : null }
      </div>
    </div>
  );
}

export default VisitCard

{/* <ul class="cards">
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"></div>
        <div class="card_content">
          <h2 class="card_title">Card Grid Layout</h2>
          <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    </li> */}