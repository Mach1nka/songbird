import React from 'react';
import GameLevel from './gameLevel/GameLevel';
import GAME_LEVELS from '../../variables/GameLevels';

const GamePanel = () => (
  <ul className="header__game_panel">
    {
      GAME_LEVELS.map((el) => <GameLevel key={`${el.id}_${el.title}`} name={el.title} state={el.current} />)
    }
  </ul>
);

export default GamePanel;
