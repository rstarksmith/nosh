import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext';

const VisitEditForm = ({ visit, toggleForm, editVisits }) => {
  const [rating, setRating] = useState(visit.rating);
  const [caption, setCaption] = useState(visit.caption);
  const [exclusive, setExclusive] = useState(visit.exclusive);
  const [errors, setErrors] = useState(null)
  const { user } = useAuth()



  const handleEdit = (e) => {
    e.preventDefault()
    const updatedVisit = {
      rating,
      caption,
      exclusive
    }
    fetch(`/visits/${visit.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedVisit),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((updatedVisit) => {
          editVisits(updatedVisit)
          toggleForm()
        })
      } else {
        resp.json().then((resp) => setErrors(resp.errors));
      }
    })  
  }

  return (
    <div>
      <form onSubmit={handleEdit}>
        <label>Rate your experience: </label>
        <select
          className="input"
          name="rating"
          onChange={(e) => setRating(e.target.value)}
          value={rating}
        >
          <option> -select- </option>
          <option value="1">♥︎</option>
          <option value="2">♥︎♥︎</option>
          <option value="3">♥︎♥︎♥︎</option>
          <option value="4">♥︎♥︎♥︎♥︎</option>
        </select>
        <br />
        <label>{user.username} says: </label>
        <input
          type="text"
          name="caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="input"
          autoComplete="off"
        />
        <br />
        <input
          type="checkbox"
          name="exclusive"
          value={exclusive}
          onChange={(e) => setExclusive(e.target.checked)}
        />
        <label> Do not share post</label>
        <br />
        <button type='submit'>Save Changes</button>
      </form>
    </div>
  );
}

export default VisitEditForm