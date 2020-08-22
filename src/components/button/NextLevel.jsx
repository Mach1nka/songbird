import React from 'react';
import PropTypes from 'prop-types';

const NextLevel = ({ state }) => (
  <button
    type="button"
    className={`button__next-level ${state && 'correct'}`}
  >
    Next Level
  </button>
);

NextLevel.propTypes = {
  state: PropTypes.bool.isRequired,
};

export default NextLevel;
