import { useState } from "react"
import fileChecksum from "../utils/checksum";

const VisitForm = ({ truck, toggleForm, addToVisits }) => {
  const [rating, setRating] = useState(0)
  const [caption, setCaption] = useState("")
  const [exclusive, setExclusive] = useState(false)
  const [photo, setPhoto] = useState("")
  const [fileData, setFileData] = useState({});
  const [disabled, setDisabled] = useState(false);
  const [errors, setErrors] = useState(null)


   const handleAddVisit = (e) => {
     setDisabled(true);
    //  e.preventDefault();
     fetch("/visits", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({
        rating,
        caption,
        exclusive,
        truck_id: truck.id,
        photo_signed_id: fileData.signedId,
       }),
     }).then((resp) => {
       if (resp.ok) {
        resp.json().then((resp) => {
          addToVisits(resp)
          toggleForm()
        });
       } else {
         resp.json().then((resp) => setErrors(resp.errors));
         setDisabled(false);
       }
     });
   };

  const directUploadFile = (payload, file) => {
    fetch(payload.presigned_url, {
      method: "PUT",
      headers: payload.headers,
      body: file,
    }).then((resp) => {
      if (resp.ok) {
        setDisabled(false);
        setFileData({ signedId: payload.signed_id, fileName: file.name });
      }
    });
  };

  const onFileSelect = async (e) => {
    setDisabled(true);
    const file = e.target.files[0];

    fileChecksum(file).then((checksum) => {
      const payload = {
        name: file.name,
        type: file.type,
        size: file.size,
        checksum,
      };

      fetch("/direct_uploads/presigned_url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }).then((resp) => {
        if (resp.ok) {
          resp.json().then((resp) => {
            directUploadFile(resp, file);
          });
        } else {
          // tell user file upload failed
          resp.json().then((resp) => setErrors(resp.errors));
          setDisabled(false);
        }
      });
    });
    return file;
  };

  return (
    <div>
      <form onSubmit={handleAddVisit}>
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
        <label htmlFor="button-file">Photo: </label>
        <input
          type="file"
          id="files"
          name="photo"
          value={photo}
          onChange={onFileSelect}
          className="input"
        />
        <label htmlFor="files">sdfgsdg</label>
        <br />
        <input
          type="checkbox"
          name="exclusive"
          value={exclusive}
          onChange={(e) => setExclusive(e.target.checked)}
        />
        <label> Do not share</label>
        <br />
        <button type="submit" disabled={disabled}>
          Post Visit
        </button>
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

export default VisitForm