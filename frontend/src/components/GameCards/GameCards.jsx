import React from "react";
import "./GameCards.css";
import { Link } from "react-router-dom";
import cards from "../../assets/DataJs/cards";
import data from "../../assets/DataJs/data";

// const GameCards = ({ cards }) => {
//   const matchingGame = games.find((game) => game.id === card.gameId);

//   return (
//     <div id="profiles-card" className="card">
//       {cards.map((card, index) => (
// <div
//   key={index}
//   data-age={card.age}
//   data-language={card.languages}
//   data-microphone={card.hasMicrophone}
//   data-rank={card.rank}
//   data-game-mode={card.game_modes}
//   data={card}
//   className="card-profile"
// >
//   <div className="profile-header">
//     <div>
//       <h3 className="profile-heading">
//         <Link className="" href="" tabIndex="0">
//           {card.nickname}
//         </Link>
//       </h3>
//       <span className="profile-subheading">Updated 4 hours ago</span>
//     </div>

//     <div className="popover-container">
//       <i className="fas fa-ellipsis-h options-button-icon"></i>
//     </div>
//   </div>

//   <div className="detail-columns">
//     <h4 className="detail-column-heading">Contacts</h4>
//     <p className="detail">
//       <span className="detail-label">Discord:</span>
//       <span>
//         <span className="copyable">{card.discord}</span>
//         <span className="copyable-copy">Copy</span>
//       </span>
//     </p>

//     <p className="detail">
//       <span className="detail-label">Steam ID: </span>
//       <span>
//         <span className="copyable">{card.steam}</span>
//         <span className="copyable-copy">Copy</span>
//       </span>
//     </p>

//     <h4 className="detail-column-heading">Player details</h4>
//     <p className="detail">
//       <i className="fas fa-calendar-alt detail-icon"></i>
//       <span className="detail-labelless">Is </span>
//       <span className="detail-emphasize">{card.years}</span>
//     </p>

//     <p className="detail">
//       <i className="fas fa-globe-europe detail-icon"></i>
//       <span className="detail-labelless">Lives in </span>
//       <span className="detail-emphasize">{card.region}</span>
//     </p>

//     <p className="detail">
//       <i className="fas fa-comments detail-icon"></i>
//       <span className="detail-labelless">Speaks </span>
//       <span className="detail-emphasize">
//         {card.languages.join(", ")}
//       </span>
//       {/* and */}
//       {/* <span className="detail-emphasize">English</span> */}
//     </p>

//     <p className="detail">
//       <i className="fas fa-microphone detail-icon"></i>
//       <span className="detail-labelless detail-emphasize">
//         Has a microphone
//       </span>
//       and is willing to communicate
//     </p>

//     <h4 className="detail-column-heading">Game details</h4>
//     <p className="detail">
//       <i className="fas fa-medal detail-icon"></i>
//       <span className="detail-label">Rank:</span>
//       <span className="detail-emphasize">{card.rank}</span>
//     </p>

//     <p className="detail">
//       <i className="fas fa-globe-europe detail-icon"></i>
//       <span className="detail-label">Region: </span>
//       <span className="detail-emphasize">{card.region}</span>
//     </p>

//     <p className="detail">
//       <i className="fas fa-crosshairs detail-icon"></i>
//       <span className="detail-label">Interest: </span>
//       <span className="detail-emphasize">
//         {card.game_modes.join(", ")}
//       </span>
//     </p>
//   </div>

// <div className="detail-columning">
//   <h4 className="detail-column-heading">About</h4>
//   <p className="detail-paragraph">{card.about}</p>
// </div>
// </div>
//       ))}

// <div className="pagination">
//   <div className="pagination-left-buttons">
//     <button className="pagination-first-button" disabled="">
//       First
//     </button>
//     <button className="pagination-previous-button" disabled="">
//       Previous
//     </button>
//   </div>

// <div className="pagination-page">1/213</div>
//   <div className="pagination-right-buttons">
//     <button className="pagination-next-button">Next</button>
//     <button className="pagination-last-button">Last</button>
//   </div>
// </div>
// </div>
//   );
// };

// export default GameCards;

// const GameCards = ({ cards }) => {
//   return (
//     <div id="profiles-card" className="card">
//       {cards.map((card, index) => {
//         const matchingGame = data.find((e) => e.id === card.gameId);

//         return (
//           matchingGame && (
//             <div
//               key={index}
//               data-age={card.age}
//               data-language={card.languages}
//               data-microphone={card.hasMicrophone}
//               data-rank={card.rank}
//               data-game-mode={card.game_modes}
//               data={card}
//               className="card-profile"
//             >
//               <div className="profile-header">
//                 <div>
//                   <h3 className="profile-heading">
//                     <Link className="" href="" tabIndex="0">
//                       {card.nickname}
//                     </Link>
//                   </h3>
//                   <span className="profile-subheading">
//                     Updated 4 hours ago
//                   </span>
//                 </div>

//                 <div className="popover-container">
//                   <i className="fas fa-ellipsis-h options-button-icon"></i>
//                 </div>
//               </div>

//               <div className="detail-columns">
//                 <h4 className="detail-column-heading">Contacts</h4>
//                 <p className="detail">
//                   <span className="detail-label">Discord:</span>
//                   <span>
//                     <span className="copyable">{card.discord}</span>
//                     <span className="copyable-copy">Copy</span>
//                   </span>
//                 </p>

//                 <p className="detail">
//                   <span className="detail-label">Steam ID: </span>
//                   <span>
//                     <span className="copyable">{card.steam}</span>
//                     <span className="copyable-copy">Copy</span>
//                   </span>
//                 </p>

//                 <h4 className="detail-column-heading">Player details</h4>
//                 <p className="detail">
//                   <i className="fas fa-calendar-alt detail-icon"></i>
//                   <span className="detail-labelless">Is </span>
//                   <span className="detail-emphasize">{card.years}</span>
//                 </p>

//                 <p className="detail">
//                   <i className="fas fa-globe-europe detail-icon"></i>
//                   <span className="detail-labelless">Lives in </span>
//                   <span className="detail-emphasize">{card.region}</span>
//                 </p>

//                 <p className="detail">
//                   <i className="fas fa-comments detail-icon"></i>
//                   <span className="detail-labelless">Speaks </span>
//                   <span className="detail-emphasize">
//                     {card.languages.join(", ")}
//                   </span>
//                   {/* and */}
//                   {/* <span className="detail-emphasize">English</span> */}
//                 </p>

//                 <p className="detail">
//                   <i className="fas fa-microphone detail-icon"></i>
//                   <span className="detail-labelless detail-emphasize">
//                     Has a microphone
//                   </span>
//                   and is willing to communicate
//                 </p>

//                 <h4 className="detail-column-heading">Game details</h4>
//                 <p className="detail">
//                   <i className="fas fa-medal detail-icon"></i>
//                   <span className="detail-label">Rank:</span>
//                   <span className="detail-emphasize">{card.rank}</span>
//                 </p>

//                 <p className="detail">
//                   <i className="fas fa-globe-europe detail-icon"></i>
//                   <span className="detail-label">Region: </span>
//                   <span className="detail-emphasize">{card.region}</span>
//                 </p>

//                 <p className="detail">
//                   <i className="fas fa-crosshairs detail-icon"></i>
//                   <span className="detail-label">Interest: </span>
//                   <span className="detail-emphasize">
//                     {card.game_modes.join(", ")}
//                   </span>
//                 </p>
//               </div>

//               <div className="detail-columning">
//                 <h4 className="detail-column-heading">About</h4>
//                 <p className="detail-paragraph">{card.about}</p>
//               </div>
//             </div>
//           )
//         );
//       })}

//       <div className="pagination">
//         <div className="pagination-left-buttons">
//           <button className="pagination-first-button" disabled="">
//             First
//           </button>
//           <button className="pagination-previous-button" disabled="">
//             Previous
//           </button>
//         </div>

//         <div className="pagination-page">1/213</div>
//         <div className="pagination-right-buttons">
//           <button className="pagination-next-button">Next</button>
//           <button className="pagination-last-button">Last</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GameCards;

const GameCards = () => {
  return (
    <div id="profiles-card" className="card">
      {cards.map((card, index) => {
        const matchingGame = data.find((game) => game.id === card.gameId);

        if (!matchingGame) {
          return null;
        } else {
          return (
            <React.Fragment>
              <div
                key={index}
                data-age={card.age}
                data-language={card.languages}
                data-microphone={card.hasMicrophone}
                data-rank={card.rank}
                data-game-mode={card.game_modes}
                data={card}
                className="card-profile"
              >
                <div className="profile-header">
                  <div key={card.nickname}>
                    <h3 className="profile-heading">
                      <Link className="" href="" tabIndex="0">
                        {card.nickname}
                      </Link>
                    </h3>
                    <span className="profile-subheading">
                      Updated 4 hours ago
                    </span>
                  </div>

                  <div className="popover-container">
                    <i className="fas fa-ellipsis-h options-button-icon"></i>
                  </div>
                </div>

                <div key={card.discord} className="detail-columns">
                  <h4 className="detail-column-heading">Contacts</h4>
                  <p className="detail">
                    <span className="detail-label">Discord:</span>
                    <span>
                      <span className="copyable">{card.discord}</span>
                      <span className="copyable-copy">Copy</span>
                    </span>
                  </p>

                  <p key={card.steam} className="detail">
                    <span className="detail-label">Steam ID: </span>
                    <span>
                      <span className="copyable">{card.steam}</span>
                      <span className="copyable-copy">Copy</span>
                    </span>
                  </p>

                  <h4 className="detail-column-heading">Player details</h4>
                  <p key={card.years} className="detail">
                    <i className="fas fa-calendar-alt detail-icon"></i>
                    <span className="detail-labelless">Is </span>
                    <span className="detail-emphasize">{card.years}</span>
                  </p>

                  <p key={card.region} className="detail">
                    <i className="fas fa-globe-europe detail-icon"></i>
                    <span className="detail-labelless">Lives in </span>
                    <span className="detail-emphasize">{card.region}</span>
                  </p>

                  <p key={card.languages} className="detail">
                    <i className="fas fa-comments detail-icon"></i>
                    <span className="detail-labelless">Speaks </span>
                    <span className="detail-emphasize">
                      {card.languages.join(", ")}
                    </span>
                    {/* and */}
                    {/* <span className="detail-emphasize">English</span> */}
                  </p>

                  <p className="detail">
                    <i className="fas fa-microphone detail-icon"></i>
                    <span className="detail-labelless detail-emphasize">
                      Has a microphone
                    </span>
                    and is willing to communicate
                  </p>

                  <h4 className="detail-column-heading">Game details</h4>
                  <p key={card.rank} className="detail">
                    <i className="fas fa-medal detail-icon"></i>
                    <span className="detail-label">Rank:</span>
                    <span className="detail-emphasize">{card.rank}</span>
                  </p>

                  <p key={card.server} className="detail">
                    <i className="fas fa-globe-europe detail-icon"></i>
                    <span className="detail-label">Region: </span>
                    <span className="detail-emphasize">{card.server}</span>
                  </p>

                  <p key={card.game_modes} className="detail">
                    <i className="fas fa-crosshairs detail-icon"></i>
                    <span className="detail-label">Interest: </span>
                    <span className="detail-emphasize">
                      {card.game_modes.join(", ")}
                    </span>
                  </p>
                </div>

                <div key={card.about} className="detail-columning">
                  <h4 className="detail-column-heading">About</h4>
                  <p className="detail-paragraph">{card.about}</p>
                </div>
              </div>
            </React.Fragment>
          );
        }
      })}
    </div>
  );
};

export default GameCards;

// import React from "react";
// import "./GameCards.css";

// const GameCards = () => {
//   const data = [
//     {
//       id: 1,
//       name: "Dota 2",
//     },
//     { id: 3, name: "Valorant" },
//   ];
//   const cards = [
//     {
//       cardId: 1,
//       gameId: 1,
//       gameName: "Dota 2",
//       nickname: "person 1",
//     },
//     { cardId: 2, gameId: 3, gameName: "Valorant", nickname: "person 2" },
//   ];
//   const currentGameName = "Valorant";

//   return (
//     <div id="profiles-card" className="card">
//       {cards
//         .filter((card) => {
//           return card.gameName === currentGameName;
//         })
//         .map((card) => {
//           const matchingGame = data.find((game) => game.name === card.gameName);

//           if (!matchingGame) {
//             return null;
//           }

//           return (
//             <div className="card-profile">
//               <h3>Test</h3>
//               <p>Nickname: {card.nickname}</p>
//             </div>
//           );
//         })}
//     </div>
//   );
// };

// export default GameCards;
