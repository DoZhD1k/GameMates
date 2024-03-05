import React, { useState, useEffect } from "react";
import "../CSS/other.css";
import { Link } from "react-router-dom";
import axios from "axios";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  function deleteUser(userId) {
    axios.delete(`http://localhost:5000/users/${userId}`)
      .then(response => {
        // После успешного удаления пользователя обновляем список пользователей
        setUsers(users.filter(user => user.user_id !== userId));
      })
      .catch(err => console.log(err));
  }

  function EditUser() {
    axios.delete('http://localhost:5000/users/:user_id')
    .then(response => {
      setUsers(response.data);
    })
    .catch(err => console.log(err));
  }

  return (
    <div className="admin-panel">
      <div className="admin-sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li>
            <Link
              to="/AdminstratorPanelControll/DashboardHomePage"
              className="admin-link"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/AdminstratorPanelControll/DashboardUsers"
              className="admin-active"
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              to="/AdminstratorPanelControll/DashboardGames"
              className="admin-link"
            >
              Games
            </Link>
          </li>
          <li>
            <Link to="/" className="admin-link">
              Logout
            </Link>
          </li>
        </ul>
      </div>

      <div className="admin-content">
        <h1 className="admin-users-heading">Users Management</h1>
        <div className="admin-cards-serch-add-container">
          
          <div className="admin-search-add-container">
            {/* <input
              className="admin-search-input"
              type="text"
              placeholder="Search by name..."
            /> */}
            
            <Link to="/AdminstratorPanelControll/DashboardUsers/AddUser" className="admin-add-btn">
              <ion-icon name="add"></ion-icon>
            </Link>
          </div>

          <div className="admin-users-container">
            {users.map((user, index) => (
              <div key={index} className="admin-users-items">
                <div className="admin-users-item-div">
                  <div className="admin-users-id admin-users-item">
                    ID: {user.user_id}
                  </div>
                  <div className="admin-users-nickname admin-users-item">
                    Nickname: {user.user_name}
                  </div>
                  <div className="admin-users-email admin-users-item">
                    Email: {user.user_email}
                  </div>
                  <div className="admin-users-role admin-users-item">
                    Role: {user.user_role}
                  </div>
                  <div className="admin-users-country admin-users-item">
                    Registration Date: {user.registration_date}
                  </div>
                  <div className="admin-users-lang admin-users-item">
                    Languages: {user.userLanguages}
                  </div>
                  <div className="admin-users-contacts admin-users-item">
                    Contacts: {user.steam}, {user.discord}
                  </div>

                  <div className="admin-users-actions">
                    <button onClick={EditUser} className="admin-games-action">Edit</button>
                    <button onClick={() => deleteUser(user.user_id)} className="admin-games-delete">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
