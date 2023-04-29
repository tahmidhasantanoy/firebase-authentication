import React, { useContext } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {

const {loginUser} =  useContext(AuthContext)
const navigate = useNavigate() // go to page


const handleSubmit = (event) => {
    event.preventDefault()
    const form  = event.target
    const email = form.email.value
    const password = form.password.value
    console.log(email,password );

    loginUser(email,password)
     .then(res => {
        console.log(res)
        form.reset() //after succeessfully login
     })
     .catch(err => console.log(err.mesage))

}

  return (
    <div className="form">
      <div className="form-container">
        <h2 className="form-title">Login</h2>
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
          </div>
          <button className="btn-submit">Login</button>
        </form>
        <p><small>New to ema-jhon?</small><Link to="/signup">Create an account</Link></p>
      </div>
    </div>
  );
};

export default Login;
