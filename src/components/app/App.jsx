import React, { useState } from 'react';
import Header from '../header/Header';
import Main from '../main/Main';
import AplicationContext from '../context/AplicationContext';

const App = () => {
  const [listItemData, setListItemData] = useState({});
  const [isLevelComlete, setComplete] = useState(false);
  const [points, setPoints] = useState(5);
  // можно убрать из context и app
  const [score, setScore] = useState(0);
  return (
    <AplicationContext.Provider value={{
      points,
      setPoints,
      isLevelComlete,
      setComplete,
      score,
      setScore,
      listItemData,
      setListItemData,
    }}
    >
      <Header />
      <Main />
    </AplicationContext.Provider>
  );
};

export default App;
