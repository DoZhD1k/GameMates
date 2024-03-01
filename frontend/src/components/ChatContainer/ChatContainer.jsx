import React from 'react'
import chat from "../../assets/DataJs/chat"

const ChatContainer = () => {
  return (
    <div className="grid-chat-container">
    {chat.map((user, index) => (
      <div className="chat-users-items" key={index}>
        <div className="chat-users-item-div">
          <div className="chat-users-item">
            <img className="chat-users-img" src={user.logo} alt="logo"></img>
          </div>
          <div className="chat-users-item">
            {user.nickname}
          </div>
        </div>
      </div>
    ))}
  </div>
  )
}

export default ChatContainer