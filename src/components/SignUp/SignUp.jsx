import React, { useContext, useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const [err, setErr] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); //Stop reloading
    setErr('')
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const ConfirmedPassword = form.confirm.value;
    console.log(email, password, ConfirmedPassword);

    if (password !== ConfirmedPassword) {
      setErr("Give the valid password");
      return;
    } else if (password.length < 6) {
      console.log("Password at least 6 characters");
      setErr("Password at least 6 characters");
      return;
    }

    createUser(email, password)
     .then(res => console.log(res))
     .catch(err => console.log(err.message))

  };

  return (
    <div className="form">
      <div className="form-container">
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={handleSubmit} action="">
          <div className="form-control">
            <label className="content" htmlFor="">
              Email
            </label>
            <br />
            <input className="content" type="email" name="email" required />
            <br />
            <label className="content" htmlFor="">
              Password
            </label>
            <br />
            <input
              className="content"
              type="password"
              name="password"
              required
            />
            <br />
            <label className="content" htmlFor="">
              Confirm Password
            </label>
            <br />
            <input
              className="content"
              type="password"
              name="confirm"
              required
            />
            <br />
          </div>
          <p>
            <small className="text-err">{err}</small>
          </p>
          <button className="btn-submit">Sign Up</button>
          <p>
            <small>
              Already have an account? <Link to="/login">login</Link>
            </small>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
