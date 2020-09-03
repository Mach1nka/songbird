import React, { useState } from 'react';
import Header from '../header/Header';
import Main from '../main/Main';
import AplicationContext from '../context/AplicationContext';

const App = () => {
  const [listItemData, setListItemData] = useState({});
  const [isLevelComlete, setComplete] = useState(false);
  const [indexOfBirdsData, setIndex] = useState(0);
  const [points, setPoints] = useState(5);
  const randomValue = (max) => Math.floor(Math.random() * (max - 0)) + 0;
  // можно убрать из context и app
  const [score, setScore] = useState(0);
  return (
    <AplicationContext.Provider value={{
      indexOfBirdsData,
      points,
      setIndex,
      setPoints,
      isLevelComlete,
      setComplete,
      randomValue,
      score,
      listItemData,
      setListItemData,
    }}
    >
      <Header setScore={setScore} />
      <Main />
    </AplicationContext.Provider>
  );
};

export default App;
