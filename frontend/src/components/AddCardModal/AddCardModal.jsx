import React, { useState } from "react";
import Modal from "react-modal";
import "./AddCardModal.css"


const AddCardModal = ({ isOpen, onClose, game }) => {
  const [userData, setUserData] = useState({
    cardId: "",
    gameId: "",
    nickname: "",
    steam: "",
    discord: "",
    age: "",
    years: "",
    region: "",
    languages: [],
    microphone: "",
    hasMicrophone: "",
    rank: "",
    server: "",
    game_modes: [],
    about: "",
  });



  const handleChange = (e) => {
    const { name, value } = e.target;

    if (Array.isArray(userData[name])) {
      setUserData((prevData) => ({
        ...prevData,
        [name]: [...prevData[name], value],
      }));
    } else {
      setUserData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleAddCard = () => {

    onClose();
  };

  return (
    <>
      {isOpen && <div className="modal-overlay"></div>}
      
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Add User Card"
      className="modal-content"
    >
      <h2 className="modal-heading">Add User Card</h2>
      <form>
        <label className="modal-label">
          Nickname:
          <input
            type="text"
            name="nickname"
            value={userData.nickname}
            onChange={handleChange}
          />
        </label>
        <label className="modal-label">
          Steam:
          <input
            type="text"
            name="steam"
            value={userData.steam}
            onChange={handleChange}
          />
        </label>
        <label className="modal-label">
          Discord:
          <input
            type="text"
            name="discord"
            value={userData.discord}
            onChange={handleChange}
          />
        </label>
        <label className="modal-label">
          Age:
          <input
            type="text"
            name="age"
            value={userData.age}
            onChange={handleChange}
          />
        </label>
        <label className="modal-label">
          Region:
          <input
            type="text"
            name="region"
            value={userData.region}
            onChange={handleChange}
          />
        </label>

        <label className="modal-label">
          Microphone:
          <input
            type="checkbox"
            name="microphone"
            value={userData.microphone}
            onChange={handleChange}
          />
        </label>

        <label className="modal-label">
          Server:
          <input
            type="text"
            name="server"
            value={userData.server}
            onChange={handleChange}
          />
        </label>

        <label className="modal-label">
          About:
          <input
            type="text"
            name="about"
            value={userData.about}
            onChange={handleChange}
          />
        </label>

        <button className="modal-btn" type="button" onClick={handleAddCard}>
          Add Card
        </button>
      </form>
    </Modal>
    </>
  );
};

export default AddCardModal;
