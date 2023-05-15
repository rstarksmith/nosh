import { useState } from "react"

const VisitForm = () => {
  const [caption, setCaption] = useState("")
  
  return (
    <div>
      <form >
        <input
          type="text"
          name="caption"
          value={""}
          // onChange={(e) => setCaption(e.target.value)}
          placeholder="edit caption"
          className="input"
          autoComplete="off"
        />
      </form></div>
  )
}

export default VisitForm