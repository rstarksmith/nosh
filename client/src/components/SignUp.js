import { useState } from "react";
import { useNavigate } from "react-router-dom";
import fileChecksum from "../utils/checksum";
import { useAuth } from "../contexts/AuthContext";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [tagline, setTagline] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [fileData, setFileData] = useState({})
  const [errors, setErrors] = useState(null);
  const { logInUser } = useAuth()
  const navigate = useNavigate();


  const handleSignUp = (e) => {
    setDisabled(true)
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        tagline,
        avatar_signed_id: fileData.signedId
      }),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((resp) => logInUser(resp));} 
      else {
        resp.json().then((resp) => setErrors(resp.errors));
        setDisabled(false)
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
          setDisabled(false)
          setFileData({ signedId: payload.signed_id, fileName: file.name })
        } 
      }); 
  }

  const onFileSelect = async (e) => {
    setDisabled(true)
    const file = e.target.files[0];
    
    fileChecksum(file)
    .then((checksum) => {
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
              directUploadFile(resp, file)
            });
          } else {
            // tell user file upload failed
            resp.json().then((resp) => setErrors(resp.errors));
            setDisabled(false);
          }
        });
    })
    return file
  }

  return (
    <div>
      <div className="form-block-sign">
        <img
          src="https://i.imgur.com/StHLNbR.png"
          alt="nosh.up logo"
          className="form-logo"
        />
        <form onSubmit={handleSignUp}>
          <input
            autoComplete="off"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Create Username..."
            className="input"
          />
          <br />
          <input
            autoComplete="off"
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create Password..."
            className="input"
          />
          <br />
          <input
            autoComplete="off"
            type="text"
            name="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            placeholder="Confirm Password..."
            className="input"
          />
          <br />
          <input
            autoComplete="off"
            type="text"
            name="tagline"
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
            placeholder="Tagline..."
            className="input"
          />
          <br />
          <label className="visit-form-txt">Profile Picture:</label>
          <input
            type="file"
            name="avatar"
            onChange={onFileSelect}
            className="input"
          />
          <button className="bttn" type="submit" disabled={disabled}>
            Sign up
          </button>
        </form>
        {errors
          ? Object.entries(errors).map(([key, value]) => (
              <p className="err" key={value}>
                ⚠︎ {key} {value}
              </p>
            ))
          : null}
        <p className="visit-form-txt">
          Already have an account?{" "}
          <span onClick={() => navigate("/signin")} className="line-link">
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
