import React from 'react';
import "./CSS/Chat.css";
import GridChanger from "../components/GridChanger/GridChanger"
import ChatContainer from '../components/ChatContainer/ChatContainer';

const Chatpage = () => {
  return (
    <div className="chat-panel">
      <div className="chat-sidebar">
        <h2>Chat them</h2>
        <div className="grid-changer">
          <GridChanger />
          <ChatContainer />
        </div>
      </div>
    </div>
  );
};

export default Chatpage;
