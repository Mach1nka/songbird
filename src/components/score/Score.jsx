import React from 'react';
import PropTypes from 'prop-types';

const Score = ({ score }) => <div className="score">{`Score: ${score}`}</div>;

Score.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Score;
