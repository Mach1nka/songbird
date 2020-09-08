import React from 'react';
import { useDispatch } from 'react-redux';
import setIndexOfBirdsData from '../../store/actionCreator/indexOfBirdsData';
import setScore from '../../store/actionCreator/score';

const TryAgain = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        type="button"
        className="final__card__button"
        onClick={() => {
          dispatch(setIndexOfBirdsData(0));
          dispatch(setScore(0));
        }}
      >
        Попробовать еще раз
      </button>
    </div>
  );
};

export default TryAgain;
