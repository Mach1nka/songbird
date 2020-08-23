import React from 'react';
import PropTypes from 'prop-types';

const GameLevel = ({ name, state }) => <li className={`header__game_level ${state && 'correct'}`}>{ name }</li>;

GameLevel.propTypes = {
  name: PropTypes.string.isRequired,
  state: PropTypes.bool.isRequired,
};

export default GameLevel;
