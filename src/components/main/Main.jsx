import React, { useContext } from 'react';
import Riddle from '../riddle/Riddle';
import BirdsList from '../birdsList/BirdsList';
import InfoBlock from '../infoBlock/InfoBlock';
import NextLevel from '../button/NextLevel';
import FinalCard from '../finalCard/FinalCard';
import AplicationContext from '../context/AplicationContext';

const Main = () => {
  const { indexOfBirdsData, listItemData } = useContext(AplicationContext);
  if (indexOfBirdsData <= 5) {
    return (
      <main>
        <Riddle />
        <div className="main__container">
          <BirdsList />
          <InfoBlock listItemData={listItemData} />
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
