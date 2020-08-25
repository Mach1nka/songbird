import React, { useState } from 'react';
import Header from '../header/Header';
import Main from '../main/Main';
import AplicationContext from '../context/AplicationContext';
// import getRandomValue from '../../variables/getRandomValue';

const App = () => {
  const [isLevelComlete, setComplete] = useState(false);
  const [indexOfBirdsData, setIndex] = useState(0);
  const [defaultPoint, setNewPoint] = useState(5);
  const randomValue = (max) => Math.floor(Math.random() * (max - 0)) + 0;
  const [score, setScore] = useState(0);
  return (
    <AplicationContext.Provider value={{
      indexOfBirdsData,
      defaultPoint,
      score,
      setIndex,
      setNewPoint,
      isLevelComlete,
      setComplete,
      randomValue,
    }}
    >
      <Header />
      <Main changeScore={setScore} />
    </AplicationContext.Provider>
  );
};

export default App;
