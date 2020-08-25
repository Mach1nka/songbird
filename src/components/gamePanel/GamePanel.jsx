import React, { useContext, useEffect } from 'react';
import GameLevel from './gameLevel/GameLevel';
import GAME_LEVELS from '../../variables/GameLevels';
import AplicationContext from '../context/AplicationContext';

const GamePanel = () => {
  const { indexOfBirdsData } = useContext(AplicationContext);
  useEffect(() => {
    const panelElements = document.querySelectorAll('.header__game_level');
    panelElements.forEach((el, idx) => (idx === indexOfBirdsData
      ? el.classList.add('correct')
      : el.classList.remove('correct')));
  }, [indexOfBirdsData]);
  return (
    <ul className="header__game_panel">
      {
        GAME_LEVELS.map((el) => <GameLevel key={`${el.id}_${el.title}`} name={el.title} />)
      }
    </ul>
  );
};

export default GamePanel;
