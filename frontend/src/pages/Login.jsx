import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

const Login = () => {
  const navigate = useNavigate();
  const [user_email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:5000/login', {user_email, user_password})
      .then(res => {
        const userRole = res.data.role; // Предположим, что сервер возвращает роль пользователя в ответе
        if (userRole === "admin"){
          navigate("/AdminstratorPanelControll/DashboardHomePage");
        } else {
          navigate("/profile");
        }
      })
      .catch(err => console.log(err));
  }
  

  return (
    <div className="body">
      <div className="wrapper">
        <Link to="/" className="icone-close">
          <ion-icon name="close"></ion-icon>
        </Link>
        <div className="form-box login">
          <h2>Login</h2>
          {/* <form action="/api/auth/login" method="get" id="loginForm"> */}
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input
                type="email"
                id="email1"
                value={user_email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="email1">E-mail</label>
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
                <input type="checkbox" id="checkbox" />
                Remember me
              </label>
              <Link to="">Forgot Password?</Link>
            </div>
            <button type="button" className="btn" onClick={handleSubmit}>
              Login
            </button>
            <div className="login-register">
              <p className="no-account">
                Don't have an account?
                <Link to="/signup" className="signup-link">
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
