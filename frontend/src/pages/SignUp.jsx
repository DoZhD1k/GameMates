import React from "react";
import { Link } from "react-router-dom";
import "./CSS/SignUp.css";

const SignUp = () => {
  return (
    <div className="body">
      <div className="wrapper">
        <Link to="/" className="icone-close">
          <ion-icon name="close"></ion-icon>
        </Link>
        <div className="form-box register">
          <h2>Registration</h2>
          <form action="/api/auth/register" method="post" id="registrationForm">
            <div className="input-box">
              <span className="icon">
                <ion-icon name="person"></ion-icon>
              </span>
              <input type="text" id="username" name="username" required />
              <label htmlFor="username">Username</label>
            </div>

            <div className="input-box">
              <span className="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input type="email" id="email" name="email" required />
              <label htmlFor="email">E-mail</label>
            </div>

            <div className="input-box">
              <span className="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input type="password" id="password" name="password" required />
              <label htmlFor="password">Password</label>
            </div>
            <div className="remember-forgot">
              <label htmlFor="checkbox">
                <input type="checkbox" id="checkbox" name="checkbox" required />
                Agree to the terms and conditions
              </label>
            </div>
            <button type="submit" className="btn">
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
