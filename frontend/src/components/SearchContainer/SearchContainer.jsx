import React, { useState, useEffect } from "react";
import "./SearchContainer.css";
import games_grid from "../../assets/DataJs/data.js";
import { Link } from "react-router-dom";

const SearchContainer = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredGames, setFilteredGames] = useState(games_grid);

  useEffect(() => {
    const filtered = games_grid.filter((game) =>
      game.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredGames(filtered);
  }, [searchText]);

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="search-container">
      <span className="icon">
        <ion-icon name="search"></ion-icon>
      </span>
      <input
        className="search-input"
        type="text"
        placeholder="Game title"
        value={searchText}
        onChange={handleInputChange}
      />

      <div className="grid-container">
        {filteredGames.length === 0 ? (
          <p className="no-match-msg">No matching games found.</p>
        ) : (
          filteredGames.map((game) => (
            <Link key={game.id} className="grid-link" to={`/games/${game.id}`}>
              <div className="grid-item">
                <img src={game.image} alt={game.name} className="game-image" />
                <div className="game-details">
                  <h3>{game.name}</h3>
                  <p>{game.tags}</p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchContainer;
