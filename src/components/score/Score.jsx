import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AplicationContext from '../context/AplicationContext';
import setScore from '../../store/actionCreator/score';

const Score = () => {
  const { points } = useContext(AplicationContext);
  const currentScore = useSelector((state) => state.updateScore);
  const isLevelComlete = useSelector((state) => state.updateLevelComplete);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLevelComlete) {
      dispatch(setScore(currentScore + points));
    }
  }, [isLevelComlete]);
  return (
    <div className="score">{`Score: ${currentScore}`}</div>
  );
};

export default Score;
