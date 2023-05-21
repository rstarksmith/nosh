import { useState } from 'react'

const ProfileForm = ({ profile, clickHandler, handleTagEdit }) => {
  const [taglineEdit, setTaglineEdit] = useState({ tagline: "" });
  const [errors, setErrors] = useState(null);

  const handleProfileEdit = (e) => {
    e.preventDefault();
    fetch(`/users/${profile.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taglineEdit),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((resp) => {
          handleTagEdit(resp.tagline);
          clickHandler();
        });
      } else {
        resp.json().then((resp) => {
          setErrors(resp.errors);
        });
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaglineEdit({ [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleProfileEdit}>
        <input
          type="text"
          onChange={handleChange}
          name="tagline"
          value={taglineEdit.tagline}
          autoComplete="off"
          placeholder={`${profile.tagline}...`}
          className='profile-input'
        />
        <button className="bttn" type="submit">update</button>
      </form>
       <button onClick={clickHandler}className='bttn' >X</button>
      {errors
        ? Object.entries(errors).map(([key, value]) => (
            <p className="err" key={value}>
              ⚠︎ {key} {value}
            </p>
          ))
        : null}
    </div>
  );
};

export default ProfileForm