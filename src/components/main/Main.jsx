import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import Riddle from '../riddle/Riddle';
import BirdsList from '../birdsList/BirdsList';
import InfoBlock from '../infoBlock/InfoBlock';
import NextLevel from '../button/NextLevel';
import FinalCard from '../finalCard/FinalCard';
import AplicationContext from '../context/AplicationContext';

const Main = () => {
  const { listItemData } = useContext(AplicationContext);
  const currentLvl = useSelector((state) => state.setIndex);
  if (currentLvl <= 5) {
    return (
      <main>
        <Riddle currentLvl={currentLvl} />
        <div className="main__container">
          <BirdsList currentLvl={currentLvl} />
          <InfoBlock listItemData={listItemData} />
        </div>
        <NextLevel currentLvl={currentLvl} />
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
