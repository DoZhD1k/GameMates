import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"


const AdminAddUser = () => {
    const [user_name, setUsername] = useState("");
    const [user_email, setEmail] = useState("");
    const [user_password, setPassword] = useState("");
    const [user_role, setRole] = useState("");

    function AddUserSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:5000/adduser', {user_name, user_email, user_password, user_role})
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    return (
        <div className="body">
        <div className="wrapper">
          <Link to="/AdminstratorPanelControll/DashboardUsers" className="icone-close">
            <ion-icon name="close"></ion-icon>
          </Link>
          <div className="form-box register">
            <h2>Add</h2>
            <form onSubmit={AddUserSubmit}>
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
                <input 
                  type="text" 
                  id="role" 
                  value={user_role}
                  onChange={(e) => setRole(e.target.value)} 
                  required 
                />
                <label htmlFor="role">Role</label>
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
              <button type="submit" className="btn" onClick={AddUserSubmit}>
                Add User
              </button>
            </form>
          </div>
        </div>
      </div>
    )
}

export default AdminAddUser