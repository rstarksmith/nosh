import { useState } from 'react'

const VisitEditForm = ({ visit, toggleForm }) => {
  const [editData, setEditData] = useState(visit)
  const [errors, setErrors] = useState(null)

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleEdit = (e) => {
    e.preventDefault()
    fetch(`/visits/${visit.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editData),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((updatedVisit) => {
          // handleEdit(updatedVisit)
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
        <input
          type="text"
          name="caption"
          value={editData.caption}
          onChange={handleEditChange}
          className="input"
          autoComplete="off"
        />
      </form>
    </div>
  );
}

export default VisitEditForm