import React, { useState } from 'react';
import Riddle from '../riddle/Riddle';
import BirdsList from '../birdsList/BirdsList';
import InfoBlock from '../infoBlock/InfoBlock';
import NextLevel from '../button/NextLevel';

const Main = () => {
  const [listItemData, setListItemData] = useState({});
  return (
    <main>
      <Riddle listItemData={listItemData} />
      <div className="main__container">
        <BirdsList data={setListItemData} />
        <InfoBlock data={listItemData} />
      </div>
      <NextLevel />
    </main>
  );
};

export default Main;
