import React, { useContext, useEffect } from 'react';
import AplicationContext from '../context/AplicationContext';

const Score = () => {
  const {
    isLevelComlete, points, score, setScore,
  } = useContext(AplicationContext);
  useEffect(() => {
    if (isLevelComlete) {
      setScore((prev) => prev + points);
    }
  }, [isLevelComlete]);
  return (
    <div className="score">{`Score: ${score}`}</div>
  );
};

export default Score;
