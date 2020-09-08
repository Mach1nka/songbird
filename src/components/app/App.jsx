import React, { useState } from 'react';
import Header from '../header/Header';
import Main from '../main/Main';
import AplicationContext from '../context/AplicationContext';

const App = () => {
  const [listItemData, setListItemData] = useState({});
  return (
    <AplicationContext.Provider value={{
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
