import React from "react";
import "../CSS/other.css";
import { Link } from "react-router-dom";
import { adminPanel } from "../../assets/DataJs/functions";
import data from "../../assets/DataJs/data";

const AdminGames = () => {
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
              className="admin-link"
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              to="/AdminstratorPanelControll/DashboardGames"
              className="admin-active"
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
        <h1 className="admin-games-heading">Games Management</h1>
        <table className="admin-games-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Ranks</th>
              <th>Game Modes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((game) => (
              <tr key={game.id}>
                <td>{game.id}</td>
                <td>{game.name}</td>
                <td>{game.ranks ? game.ranks.join(", ") : ""}</td>
                <td>{game.game_mods ? game.game_mods.join(", ") : ""}</td>
                <td className="admin-games-table-action">
                  <button className="admin-games-action">Edit</button>
                  <button onClick={adminPanel} className="admin-games-delete">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminGames;
