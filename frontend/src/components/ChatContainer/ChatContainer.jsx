import React from 'react';
import "./ChatContainer.css";
import DirectChatContainer from '../DirectChatContainer/DirectChatContainer'
import ConstactsContainer from '../ConstactsContainer/ConstactsContainer'


const ChatContainer = () => {
  return (
    <div className='grid_chat'>
      <ConstactsContainer />
      <DirectChatContainer />
    </div>
  );
};

export default ChatContainer;
