import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import AplicationContext from '../context/AplicationContext';
import setIndexOfBirdsData from '../../store/actionCreator/indexOfBirdsData';

const TryAgain = () => {
  const { setScore } = useContext(AplicationContext); // setListItemData,
  const dispatch = useDispatch();
  return (
    <div>
      <button
        type="button"
        className="final__card__button"
        onClick={() => {
          dispatch(setIndexOfBirdsData(0));
          setScore(0);
        }}
      >
        Попробовать еще раз
      </button>
    </div>
  );
};

export default TryAgain;
