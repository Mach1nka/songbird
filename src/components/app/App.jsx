import React, { useState } from 'react';
import Header from '../header/Header';
import Main from '../main/Main';
import AplicationContext from '../context/AplicationContext';

const App = () => {
  const [indexOfArray, setIndex] = useState(0);
  const [defaultPoint, setNewPoint] = useState(5);
  const randomValue = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const [score, setScore] = useState(0);
  return (
    <AplicationContext.Provider value={{
      indexOfArray, defaultPoint, score, setIndex, setNewPoint,
    }}
    >
      <Header />
      <Main randomValue={randomValue} changeScore={setScore} />
    </AplicationContext.Provider>
  );
};

export default App;
