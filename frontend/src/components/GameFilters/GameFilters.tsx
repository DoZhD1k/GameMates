import React, { useState } from "react";
import "./GameFilters.css";
import { clearFilters, applyFilters } from "../../assets/DataJs/functions";
import AddCardModal from "../AddCardModal/AddCardModal";
import { GameFiltersProps } from "./types";

const GameFilters: React.FC<GameFiltersProps> = ({ game, setFilters }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!game) {
    return null;
  }

  const { ranks, game_mods } = game;

  return (
    <div className="card-section">
      <div className="filter-input-groups">
        <div className="input-group">
          <label className="input-label">
            <h4 className="input-label-text">Age</h4>
          </label>
          <div id="ageFilter" className="range-input">
            <span className="range-input-from">From</span>
            <input className="range-input-part part-from" type="number" />
            <span className="range-input-to">to</span>
            <input className="range-input-part part-to" type="number" />
          </div>
        </div>
        <div className="input-group">
          <label className="input-label">
            <h4 className="input-label-text">Language</h4>
          </label>
          <div id="languageFilter" className="select">
            <select className="selected-closed language-select">
              <option value="--">--</option>
              <option value="Kazakh">Kazakh</option>
              <option value="Russian">Russian</option>
              <option value="English">English</option>
            </select>
          </div>
        </div>
        <div className="input-group">
          <label className="input-label">
            <h4 className="input-label-text">Microphone</h4>
            <br />
          </label>
          <div className="checkbox-input">
            <input className="checkbox" type="checkbox" id="checkbox" />
          </div>
        </div>
        <div className="input-group">
          <label className="input-label">
            <h4 className="input-label-text">Rank</h4>
          </label>
          <div id="rankFilter" className="select">
            <select className="selected-closed rank-select">
              <option value="--">--</option>
              {ranks.map((rank) => (
                <option key={rank} value={rank}>
                  {rank}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="input-group">
          <label className="input-label">
            <h4 className="input-label-text">Game modes</h4>
          </label>
          <div id="gameModeFilter" className="select">
            <select className="selected-closed gameMode-select">
              <option value="--">--</option>
              {game_mods.map((mode) => (
                <option key={mode} value={mode}>
                  {mode}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="filters-buttons">
          <button
            className="filters-clear-button"
            onClick={() => clearFilters(setFilters)}
          >
            Clear filters
          </button>
          <button className="filters-apply-button" onClick={applyFilters}>
            Apply filters
          </button>
          <button className="filters-card-button" onClick={openModal}>
            Add Card
          </button>
          <AddCardModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default GameFilters;
