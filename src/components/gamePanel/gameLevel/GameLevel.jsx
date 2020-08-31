import React from 'react';
import PropTypes from 'prop-types';

const GameLevel = ({ name, currentLvl, elemIdx }) => <li className={`header__game_level ${currentLvl === elemIdx && 'correct'}`}>{ name }</li>;

GameLevel.propTypes = {
  name: PropTypes.string.isRequired,
  currentLvl: PropTypes.number.isRequired,
  elemIdx: PropTypes.number.isRequired,
};

export default GameLevel;
