import { useState } from "react"

const VisitForm = ({ truck }) => {
  const [rating, setRating] = useState(0)
  const [caption, setCaption] = useState("")
  const [exclusive, setExclusive] = useState(false)
  const [photo, setPhoto] = useState("")
  const [errors, setErrors] = useState(null)



  const handleAddVisit = (e) => {
    e.preventDefault()
      const formData = {
        rating,
        caption,
        exclusive,
        truck_id: truck.id,
        photo,
      };
      fetch("/visits", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((resp) => {
          if (resp.ok) {
            resp.json().then((newVisit) => {
              console.log(newVisit);
              setRating(0);
              setCaption("");
              setExclusive("");
              setPhoto("");
            });
          } else {
            resp.json().then((resp) => setErrors(resp.errors));
          }
        });
  }

  return (
    <div>
      <form>
        <label>Rate: </label>
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
        <label>Photo caption: </label>
        <input
          type="text"
          name="caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="Best in cowtown..."
          className="input"
          autoComplete="off"
        />
        <br />
        <label>Photo: </label>
        <input
          type="file"
          name="photo"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          className="input"
        />
        <br />
        <input
          type="checkbox"
          name="exclusive"
          value={exclusive}
          onChange={(e) => setExclusive(e.target.checked)}
        />
        <label> Do not share</label>
        <br />
        <button type="submit" onSubmit={handleAddVisit}>Post Visit</button>
      </form>
    </div>
  );
}

export default VisitForm