import React, { useState } from 'react';
// import chat from "../assets/DataJs/chat";

const GridChanger = () => {
  const [isGrid, setIsGrid] = useState(true);

  const handleGridToggle = () => {
    setIsGrid(true);
  };

  const handleListToggle = () => {
    setIsGrid(false);
  };

  return (
    <div className='grid-changer-icons'>
      <span className={`grid-changer-icon ${isGrid ? 'active' : ''}`} onClick={handleGridToggle}>
        <ion-icon name="grid"></ion-icon>
      </span>
      <span className={`grid-changer-icon ${!isGrid ? 'active' : ''}`} onClick={handleListToggle}>
        <ion-icon name="filter"></ion-icon>
      </span>
    </div>
  )
}

export default GridChanger