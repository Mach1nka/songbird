import React, { useState, useContext } from 'react';
import Riddle from '../riddle/Riddle';
import BirdsList from '../birdsList/BirdsList';
import InfoBlock from '../infoBlock/InfoBlock';
import NextLevel from '../button/NextLevel';
import FinalCard from '../finalCard/FinalCard';
import AplicationContext from '../context/AplicationContext';

const Main = () => {
  const { indexOfBirdsData } = useContext(AplicationContext);
  const [listItemData, setListItemData] = useState({});
  if (indexOfBirdsData <= 5) {
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
  }
  return (
    <main>
      <FinalCard />
    </main>
  );
};

export default Main;
