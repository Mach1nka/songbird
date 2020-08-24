import React, { useContext } from 'react';
import GamePanel from '../gamePanel/GamePanel';
import Score from '../score/Score';
import AplicationContext from '../context/AplicationContext';

const Header = () => {
  const { score } = useContext(AplicationContext);
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="logo">
          <img src="../../assets/images/logo.svg" alt="logo" />
        </div>
        <Score score={score} />
      </div>
      <GamePanel />
    </header>
  );
};

export default Header;
