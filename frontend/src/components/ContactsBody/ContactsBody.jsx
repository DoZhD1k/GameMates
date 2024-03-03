import React, { useState } from 'react';
import "./ContactsBody.css"
import chat from "../../assets/DataJs/chat";


const ContactsBody = () => {

	const [isGrid, setIsGrid] = useState(true);

	const handleGridToggle = () => {
	  setIsGrid(true);
	};
  
	const handleListToggle = () => {
	  setIsGrid(false);
	};
	
  return (
	<div className="chat-panel">
	<div className="chat-sidebar">
	  <h2>Chat them</h2>
	  <div className="grid-changer">
		<div className='grid-changer-icons'>
		  <span className={`grid-changer-icon ${isGrid ? 'active' : ''}`} onClick={handleGridToggle}>
			<ion-icon name="grid"></ion-icon>
		  </span>
		  <span className={`grid-changer-icon ${!isGrid ? 'active' : ''}`} onClick={handleListToggle}>
			<ion-icon name="filter"></ion-icon>
		  </span>
		</div>
		<div className="grid-chat-container">
		  {isGrid ? (
			chat.map((user, index) => (
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
			))
		  ) : (
			<ul className="list-chat-container">
			  {chat.map((user, index) => (
				<li className="list-chat-container-item" key={index}>
				  <img className="chat-users-img" src={user.logo} alt="logo"></img>
				  <span className='chat-container-text'>{user.nickname}</span>
				  </li>
			  ))}
			</ul>
		  )}
		</div>
	  </div>
	</div>
  </div>
  )
}

export default ContactsBody