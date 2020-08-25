import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AplicationContext from '../context/AplicationContext';

const NextLevel = ({ state }) => {
  const { setIndex, indexOfBirdsData } = useContext(AplicationContext);
  return (
    <button
      type="button"
      className={`button__next-level ${state && 'correct'}`}
      onClick={() => { setIndex(indexOfBirdsData + 1); }}
    >
      Next Level
    </button>
  );
};

NextLevel.propTypes = {
  state: PropTypes.bool.isRequired,
};

export default NextLevel;
