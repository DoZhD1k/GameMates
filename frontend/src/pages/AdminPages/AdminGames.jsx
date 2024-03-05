import React, { useState, useEffect } from "react";
import "../CSS/other.css";
import { Link } from "react-router-dom";
import axios from "axios";


const AdminGames = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/games')
      .then(response => {
        setGames(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  function deleteGame(gamesId) {
    axios.delete(`http://localhost:5000/games/${gamesId}`)
      .then(response => {
        // После успешного удаления пользователя обновляем список пользователей
        setGames(games.filter(user => user.games_id !== gamesId));
      })
      .catch(err => console.log(err));
  }

  function EditGame() {
    axios.delete('http://localhost:5000/games/:user_id')
    .then(response => {
      setGames(response.data);
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
        <div className="admin-cards-serch-add-container">
          <div className="admin-search-add-container">            
            <Link to="/AdminstratorPanelControll/DashboardUsers/AddGame" className="admin-add-btn">
              <ion-icon name="add"></ion-icon>
            </Link>
          </div>
          <div className="admin-users-container">
            {games.map((game, index) => (
              <div key={index} className="admin-users-items">
                <div className="admin-users-item-div">
                  <div className="admin-users-id admin-users-item">
                    ID: {game.game_id}
                  </div>
                  <div className="admin-users-name admin-users-item">
                    Name: {game.game_name}
                  </div>
                  <div className="admin-users-age admin-users-item">
                    Tags: {game.game_tags}
                  </div>
                  <div className="admin-users-nickname admin-users-item">
                    Ranks: {game.game_ranks}
                  </div>
                  <div className="admin-users-email admin-users-item">
                    Game Mods: {game.game_mods}
                  </div>
                  <img src={game.game_image} alt={game.game_name} className="game-image" />

                  <div className="admin-users-actions">
                    <button onClick={EditGame} className="admin-games-action">Edit</button>
                    <button onClick={() => deleteGame(game.game_id)} className="admin-games-delete">
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

export default AdminGames;
