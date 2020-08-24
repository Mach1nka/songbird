import React from 'react';
import GameLevel from './gameLevel/GameLevel';
import GAME_LEVELS from '../../variables/GameLevels';
import AplicationContext from '../context/AplicationContext';

const GamePanel = () => {
  const indexOfArray = useContext(AplicationContext);
  return (
    <ul className="header__game_panel">
      {
        GAME_LEVELS.map((el) => <GameLevel key={`${el.id}_${el.title}`} name={el.title} state={el.currentLvl} />)
      }
    </ul>
  );
};

export default GamePanel;
