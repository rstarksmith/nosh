import VisitEditForm from "./VisitEditForm"
import CommentCard from "./CommentCard"

const VisitCard = ({ visit }) => {


// if user == visit.author setShowAuthor(true)
  
 
  const visitComments = visit.comments.map(comment => <CommentCard key={comment.id} comment={comment} />)
  
  if (!visit) return <div>loading</div>;
 {
   /* {visit.created_at} */
 }
 {
   /* {visit.comments.map should I do comment card?} */
 }
 {
   /* option to delete and edit card, when clicked links to TruckPage */
 }

  return (
    <div className="card">
      <img className="card-img" src={visit.photo} alt="food" />
      <div className="container">
        <p>
          {visit.author} {visit.caption}
        </p>
        <button className="buttn-card">comments</button>
        {/* {visitComments} */}
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