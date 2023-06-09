import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null)
  const navigate = useNavigate()

  const { logInUser } = useAuth()

  const handleSignIn = (e) => {
    e.preventDefault();
    fetch("/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((userObj) => logInUser(userObj));}
         else {
        resp.json().then((resp) => setErrors(resp.errors));
      }
    });
  };


  return (
    <div>
      <div className="form-block-sign">
        <img
          src="https://i.imgur.com/StHLNbR.png"
          alt="nosh.up logo"
          className="form-logo"
        />
        <form onSubmit={handleSignIn}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username..."
            className="input"
            autoComplete="off"
          />
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password..."
            className="input"
            autoComplete="off"
          />
          <br />
          <button className="bttn" type="submit">
            Sign in
          </button>
        </form>
        {errors
          ? Object.entries(errors).map(([key, value]) => (
              <p className="err" key={`${key} ${value}`}>
                ⚠︎ {value}
              </p>
            ))
          : null}
        <p className="visit-form-txt">
          Don't have an account?{" "}
          <span onClick={() => navigate("/signup")} className="line-link">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
