import React from "react";
import { useParams } from "react-router-dom";
import GameFilters from "../components/GameFilters/GameFilters";
import GameCards from "../components/GameCards/GameCards";
import "./CSS/game.css";
import data from "../assets/DataJs/data";
import cards from "../assets/DataJs/cards";

const GamePage = () => {
  const { gameId } = useParams();
  const gameIdNumber = parseInt(gameId, 10);
  const game = data.find((e) => e.id === gameIdNumber);

  const pageTitle = game ? game.name : "Game not found";

  return (
    <div className="container">
      <h1 className="heading">{pageTitle}</h1>
      <div className="container-cards">
        <GameFilters game={game} />
        <GameCards cards={cards} />
      </div>
    </div>
  );
};

export default GamePage;

// import React from "react";
// import { useParams } from "react-router-dom";
// import GameFilters from "../components/GameFilters/GameFilters";
// import GameCards from "../components/GameCards/GameCards";
// import "./CSS/game.css";

// import data from "../assets/DataJs/data";
// import cards from "../assets/DataJs/cards";

// const GamePage = () => {
//   const { gameId } = useParams();
//   const game = data.find((e) => e.id === gameId);
//   return (
//     <div className="container">
//       <h1 className="heading">{game.name}</h1>
//       <div className="container-cards">
//         <GameFilters game={game} />
//         <GameCards cards={cards} />
//       </div>
//     </div>
//   );
// };

// export default GamePage;
