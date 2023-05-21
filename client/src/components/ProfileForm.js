import { useState } from 'react'

const ProfileForm = ({ profile, setShowForm, handleTagEdit }) => {
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
          setShowForm(false);
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
          className='input'
        />
        <button type="submit">update</button>
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
};

export default ProfileForm