import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import AplicationContext from '../context/AplicationContext';
import setIndexOfBirdsData from '../../store/actionCreator/indexOfBirdsData';

const NextLevel = ({ currentLvl }) => {
  const {
    isLevelComlete, setComplete, setPoints, setListItemData,
  } = useContext(AplicationContext);
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className={`button__next-level ${isLevelComlete && 'correct'}`}
      onClick={() => (isLevelComlete
        ? (
          dispatch(setIndexOfBirdsData(currentLvl + 1)),
          setListItemData({}),
          setComplete(false),
          setPoints(5))
        : false
      )}
    >
      Next Level
    </button>
  );
};

NextLevel.propTypes = {
  currentLvl: PropTypes.number.isRequired,
};

export default NextLevel;
