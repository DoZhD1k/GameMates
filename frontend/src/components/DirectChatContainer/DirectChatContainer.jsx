import React from 'react'
import "./DirectChatContainer.css"
import ChatHeader from '../ChatHeader/ChatHeader'
import ChatMessages from '../ChatMessages/ChatMessages'
import ChatInput from "../ChatInput/ChatInput"

const DirectChatContainer = () => {
  return (
    <div className='chat'>
      <div className='container_card'>
        <ChatHeader />
        <ChatMessages />
        <ChatInput />
      </div>
    </div>
  )
}

export default DirectChatContainer