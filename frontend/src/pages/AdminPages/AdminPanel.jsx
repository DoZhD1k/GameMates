import React from "react";
import "../CSS/other.css";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  return (
    <div className="admin-panel">
      <div className="admin-sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li>
            <Link
              to="/AdminstratorPanelControll/DashboardHomePage"
              className="admin-active"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/AdminstratorPanelControll/DashboardUsers"
              className="admin-link"
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
        <h1>Dashboard</h1>
        <p>
          Welcome to the admin panel. Here, you can manage various aspects of
          your application.
        </p>

        <div className="dashboard-section">
          <h2>Recent Activities</h2>
          <ul>
            <li>User "JohnDoe" updated their profile.</li>
            <li>New game added: "GameX."</li>
            <li>3 new user registrations today.</li>
          </ul>
        </div>

        <div className="dashboard-section">
          <h2>System Overview</h2>
          <p>
            Disk Space: 80% used
            <br />
            Memory Usage: 60%
            <br />
            CPU Load: 45%
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
