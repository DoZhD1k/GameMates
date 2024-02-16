import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Ваша логика входа здесь
    // ...

    // Предположим, что вы получаете роль пользователя после успешного входа
    const userRole = "admin"; // Замените на реальную логику получения роли

    // Проверяем роль и переходим на соответствующую страницу
    if (userRole === "admin") {
      navigate.push("/admin-panel"); // Замените на ваш роут для админ панели
    } else {
      navigate.push("/user-profile"); // Замените на ваш роут для профиля пользователя
    }
  };

  return (
    <div className="body">
      <div className="wrapper">
        <Link to="/" className="icone-close">
          <ion-icon name="close"></ion-icon>
        </Link>
        <div className="form-box login">
          <h2>Login</h2>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="mail"></ion-icon>
            </span>
            <input
              type="email"
              id="email1"
              value={email}
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
              value={password}
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
          <button type="button" className="btn" onClick={handleLogin}>
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
        </div>
      </div>
    </div>
  );
};

export default Login;
