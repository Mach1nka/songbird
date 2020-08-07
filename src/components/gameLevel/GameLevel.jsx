import React from 'react';
import PropTypes from 'prop-types';

const GameLevel = ({ name }) => <li className="header__game_level">{ name }</li>;

GameLevel.propTypes = {
  name: PropTypes.string.isRequired,
};

export default GameLevel;
