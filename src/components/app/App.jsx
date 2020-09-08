import React, { useState } from 'react';
import Header from '../header/Header';
import Main from '../main/Main';
import AplicationContext from '../context/AplicationContext';

const App = () => {
  const [listItemData, setListItemData] = useState({});
  const [points, setPoints] = useState(5);
  return (
    <AplicationContext.Provider value={{
      points,
      setPoints,
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
