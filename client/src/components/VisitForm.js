import { useState } from "react"

const VisitForm = ({ truck }) => {
  const [formData, setFormData] = useState({
    rating: 0,
    caption: "",
    private: "",
    truck_id: 0,
    photo: ""
  })
  
  return (
    <div>
      <form >
        <input
          type="text"
          name="caption"
          value={formData.caption}
          // onChange={(e) => setCaption(e.target.value)}
          placeholder="edit caption"
          className="input"
          autoComplete="off"
        />
      </form></div>
  )
}

export default VisitForm