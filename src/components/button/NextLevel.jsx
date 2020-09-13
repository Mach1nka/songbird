import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import setIndexOfBirdsData from '../../store/actionCreator/indexOfBirdsData';
import setLevelComplete from '../../store/actionCreator/isLevelComplete';
import setPoints from '../../store/actionCreator/points';
import setListItemData from '../../store/actionCreator/listItemData';

const NextLevel = ({ currentLvl }) => {
  const isLevelComlete = useSelector((state) => state.updateLevelComplete);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        type="button"
        className={`button__next-level ${isLevelComlete && 'correct'}`}
        onClick={() => (isLevelComlete
          ? (
            dispatch(setIndexOfBirdsData(currentLvl + 1)),
            dispatch(setListItemData({})),
            dispatch(setLevelComplete(false)),
            dispatch(setPoints(5)))
          : false
        )}
      >
        Next Level
      </button>
    </div>
  );
};

NextLevel.propTypes = {
  currentLvl: PropTypes.number.isRequired,
};

export default NextLevel;
