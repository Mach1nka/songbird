import React from 'react';
import GamePanel from '../gamePanel/GamePanel';
import Score from '../score/Score';

const Header = () => (
  <header className="header">
    <div className="header__wrapper">
      <div className="logo">
        <img src="../../assets/images/logo.svg" alt="logo" />
      </div>
      <Score />
    </div>
    <GamePanel />
  </header>
);

export default Header;
