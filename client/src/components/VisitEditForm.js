import { useState } from 'react'

const VisitEditForm = ({ visit, toggleForm }) => {
  const [caption, setCaption] = useState()

const handleEdit = (e) => {
  e.preventDefault()
  

}

  return (
    <div>
      <form onSubmit={handleEdit}>
        <input
          type="text"
          name="caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="edit caption"
          className="input"
          autoComplete="off"
        />
      </form>
    </div>
  );
}

export default VisitEditForm