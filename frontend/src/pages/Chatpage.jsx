import React from 'react'
import "./CSS/Chat.css";
import cs2 from "../assets/Images/cs2.png"

const Chatpage = () => {
  return (
    <div className="chat-panel">
      <div className="chat-sidebar">
        <h2>Chat them</h2>
        <div className="grid-changer">
          <div className='grid-changer-icons'>
            <span className='grid-changer-icon'>
              <ion-icon name="grid"></ion-icon>
            </span>
            <span className='grid-changer-icon'>
              <ion-icon name="filter"></ion-icon>
            </span>
          </div>
        <div className="grid-chat-container">

          <div className="chat-users-items">
            <div className="chat-users-item-div">
              <div className="chat-users-item">
                <img className="chat-users-img" src={cs2} alt='logo'></img>
              </div>
              <div className="chat-users-item">
                DoZhD1k 
              </div>
            </div>
          </div>

          <div className="chat-users-items">
            <div className="chat-users-item-div">
              <div className="chat-users-item">
                <img className="chat-users-img" src={cs2} alt='logo'></img>
              </div>
              <div className="chat-users-item">
                mochi 
              </div>
            </div>
          </div>

          <div className="chat-users-items">
            <div className="chat-users-item-div">
              <div className="chat-users-item">
                <img className="chat-users-img" src={cs2} alt='logo'></img>
              </div>
              <div className="chat-users-item">
                Shiro 
              </div>
            </div>
          </div>

          <div className="chat-users-items">
            <div className="chat-users-item-div">
              <div className="chat-users-item">
                <img className="chat-users-img" src={cs2} alt='logo'></img>
              </div>
              <div className="chat-users-item">
                n ø c t u r n e 
              </div>
            </div>
          </div>

          <div className="chat-users-items">
            <div className="chat-users-item-div">
              <div className="chat-users-item">
                <img className="chat-users-img" src={cs2} alt='logo'></img>
              </div>
              <div className="chat-users-item">
                shapalaqq
              </div>
            </div>
          </div>

          <div className="chat-users-items">
            <div className="chat-users-item-div">
              <div className="chat-users-item">
                <img className="chat-users-img" src={cs2} alt='logo'></img>
              </div>
              <div className="chat-users-item">
                Vshinka 
              </div>
            </div>
          </div>

          <div className="chat-users-items">
            <div className="chat-users-item-div">
              <div className="chat-users-item">
                <img className="chat-users-img" src={cs2} alt='logo'></img>
              </div>
              <div className="chat-users-item">
                ytka45
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Chatpage;