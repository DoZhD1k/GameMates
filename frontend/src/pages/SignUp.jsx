import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CSS/SignUp.css";
import axios from "axios"


const SignUp = () => {
  const [user_name, setUsername] = useState("");
  const [user_email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:5000/register', {user_name, user_email, user_password})
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

  return (
    <div className="body">
      <div className="wrapper">
        <Link to="/" className="icone-close">
          <ion-icon name="close"></ion-icon>
        </Link>
        <div className="form-box register">
          <h2>Registration</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="person"></ion-icon>
              </span>
              <input 
              type="text" 
              id="username" 
              value={user_name}
              onChange={(e) => setUsername(e.target.value)} 
              required />
              <label htmlFor="username">Username</label>
            </div>

            <div className="input-box">
              <span className="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input 
                type="email" 
                id="email" 
                value={user_email}
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
              <label htmlFor="email">E-mail</label>
            </div>

            <div className="input-box">
              <span className="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input 
                type="password" 
                id="password" 
                value={user_password}
                onChange={(e) => setPassword(e.target.value)}
                required 
               />
              <label htmlFor="password">Password</label>
            </div>
            <div className="remember-forgot">
              <label htmlFor="checkbox">
                <input type="checkbox" id="checkbox" name="checkbox" required />
                Agree to the terms and conditions
              </label>
            </div>
            <button type="submit" className="btn" onClick={handleSubmit}>
              Signup
            </button>
            <div className="login-register">
              <p className="have-account">
                Already have an account?
                <Link to="/login" className="signup-link">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
