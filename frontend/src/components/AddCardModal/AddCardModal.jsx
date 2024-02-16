// import React, { useState } from "react";
// import Modal from "react-modal";

// const AddCardModal = ({ isOpen, onClose }) => {
//   const [userData, setUserData] = useState({
//     id: "",
//     name: "",
//     email: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleAddCard = () => {

//     onClose();
//   };

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onClose}
//       contentLabel="Add User Card"
//     >
//       <h2>Add User Card</h2>
//       <form>
//         <label>
//           ID:
//           <input
//             type="text"
//             name="id"
//             value={userData.id}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={userData.name}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Email:
//           <input
//             type="text"
//             name="email"
//             value={userData.email}
//             onChange={handleChange}
//           />
//         </label>
//         {/* Добавьте другие поля пользователя по аналогии */}
//         <button type="button" onClick={handleAddCard}>
//           Add Card
//         </button>
//       </form>
//     </Modal>
//   );
// };

// export default AddCardModal;

import React, { useState } from "react";
import Modal from "react-modal";
// import

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

  //   if (!game) {
  //     return null;
  //   }

  //   const { ranks, game_mods, languages } = game;

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Если поле - массив (например, languages или game_modes), обновляем его с использованием специальной логики
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
    // Обработка добавления карточки (например, отправка данных на сервер)
    // ...

    // Закрываем модальное окно после добавления
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Add User Card"
    >
      <h2>Add User Card</h2>
      <form>
        <label>
          Nickname:
          <input
            type="text"
            name="nickname"
            value={userData.nickname}
            onChange={handleChange}
          />
        </label>
        <label>
          Steam:
          <input
            type="text"
            name="steam"
            value={userData.steam}
            onChange={handleChange}
          />
        </label>
        <label>
          Discord:
          <input
            type="text"
            name="discord"
            value={userData.discord}
            onChange={handleChange}
          />
        </label>
        <label>
          Age:
          <input
            type="text"
            name="age"
            value={userData.age}
            onChange={handleChange}
          />
        </label>
        <label>
          Region:
          <input
            type="text"
            name="region"
            value={userData.region}
            onChange={handleChange}
          />
        </label>
        {/* <label>
          Languages:
          <select
            name="languages"
            value={userData.languages}
            onChange={handleChange}
          >
            <option value="--">--</option>
            {languages.map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>
        </label> */}
        <label>
          Microphone:
          <input
            type="checkbox"
            name="microphone"
            value={userData.microphone}
            onChange={handleChange}
          />
        </label>
        {/* <label>
          Rank:
          <select name="ranks" value={userData.ranks} onChange={handleChange}>
            <option value="--">--</option>
            {ranks.map((rank) => (
              <option key={rank} value={rank}>
                {rank}
              </option>
            ))}
          </select>
        </label> */}
        <label>
          Server:
          <input
            type="text"
            name="server"
            value={userData.server}
            onChange={handleChange}
          />
        </label>
        {/* <label>
          Game Modes:
          <select
            name="game_modes"
            value={userData.game_modes}
            onChange={handleChange}
          >
            <option value="--">--</option>
            {game_mods.map((mode) => (
              <option key={mode} value={mode}>
                {mode}
              </option>
            ))}
          </select>
        </label> */}
        <label>
          About:
          <input
            type="text"
            name="about"
            value={userData.about}
            onChange={handleChange}
          />
        </label>

        <button type="button" onClick={handleAddCard}>
          Add Card
        </button>
      </form>
    </Modal>
  );
};

export default AddCardModal;
