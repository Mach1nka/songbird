import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import AplicationContext from '../context/AplicationContext';
import setIndexOfBirdsData from '../../store/actionCreator/indexOfBirdsData';
import setLevelComplete from '../../store/actionCreator/isLevelComplete';

const NextLevel = ({ currentLvl }) => {
  const {
    setPoints, setListItemData,
  } = useContext(AplicationContext);
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
            setListItemData({}),
            dispatch(setLevelComplete(false)),
            setPoints(5))
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
