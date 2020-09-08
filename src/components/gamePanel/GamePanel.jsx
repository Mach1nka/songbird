import React from 'react';
import { useSelector } from 'react-redux';
import GameLevel from './gameLevel/GameLevel';
import GAME_LEVELS from '../../variables/GameLevels';

const GamePanel = () => {
  const currentLvl = useSelector((state) => state.setIndex);
  return (
    <ul className="header__game_panel">
      {
        GAME_LEVELS.map((el, idx) => <GameLevel key={`${el.id}_${el.title}`} name={el.title} currentLvl={currentLvl} elemIdx={idx} />)
      }
    </ul>
  );
};

export default GamePanel;
