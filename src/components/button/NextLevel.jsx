import React, { useContext } from 'react';
import AplicationContext from '../context/AplicationContext';

const NextLevel = () => {
  const {
    setIndex, indexOfBirdsData, isLevelComlete, setComplete, setPoints,
  } = useContext(AplicationContext);
  return (
    <button
      type="button"
      className={`button__next-level ${isLevelComlete && 'correct'}`}
      onClick={() => (isLevelComlete
        ? (
          setIndex(indexOfBirdsData + 1),
          setComplete(false),
          setPoints(5))
        : false
      )}
    >
      Next Level
    </button>
  );
};

export default NextLevel;
