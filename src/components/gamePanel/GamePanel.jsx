import React, { useContext } from 'react';
import GameLevel from './gameLevel/GameLevel';
import GAME_LEVELS from '../../variables/GameLevels';
import AplicationContext from '../context/AplicationContext';

const GamePanel = () => {
  const { indexOfBirdsData } = useContext(AplicationContext);
  return (
    <ul className="header__game_panel">
      {
        GAME_LEVELS.map((el, idx) => <GameLevel key={`${el.id}_${el.title}`} name={el.title} currentLvl={indexOfBirdsData} elemIdx={idx} />)
      }
    </ul>
  );
};

export default GamePanel;
