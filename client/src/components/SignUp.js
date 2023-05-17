import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [tagline, setTagline] = useState("");
  const [avatar, setAvatar] = useState("");
  // const [errors, setErrors] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = (e) => {
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
        avatar: {},
      }),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((resp) => console.log(resp));} 
        // else {
      //   resp.json().then((resp) => setErrors(resp.errors));
      // }
    });
  };

  return (
    <div>
      <img
        src=""
        alt="nosh.up logo"
        className="form-logo"
      />
      <div className="form-block">
        <h3>Sign up for a free account</h3>
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Create Username..."
            className="input"
          />
          <br />
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create Password..."
            className="input"
          />
          <br />
          <input
            type="text"
            name="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            placeholder="Confirm Password..."
            className="input"
          />
          <br />
          <input
            type="text"
            name="tagline"
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
            placeholder="Tagline..."
            className="input"
          />
          <br />
          <label>Profile Picture:</label>
          <input
            type="file"
            name="avatar"
            value={avatar}
            onChange={(e) => setAvatar(e.target.files[0])}
            // className=""
          />
          <br />
          <button className="bttn" type="submit">
            Sign up
          </button>
        </form>
        {/* {errors
          ? Object.entries(errors).map(([key, value]) => (
              <p className="err" key={value}>
                ⚠︎ {key} {value}
              </p>
            ))
          : null} */}
        <p>
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
