import React from 'react'
import chat from "../../assets/DataJs/chat"
import isGrid from "../GridChanger/GridChanger"

const ChatContainer = () => {
  return (
    <div className="grid-chat-container">
    {isGrid ? (
      chat.map((user, index) => (
        <div className="chat-users-items" key={index}>
          <div className="chat-users-item-div">
            <div className="chat-users-item">
              <img className="chat-users-img" src={user.img} alt={user.name}></img>
            </div>
            <div className="chat-users-item">
              {user.name}
            </div>
          </div>
        </div>
      ))
    ) : (
      <ul>
        {chat.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    )}
  </div>
  )
}

export default ChatContainer