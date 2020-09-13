import React from 'react';
import { useSelector } from 'react-redux';
import Riddle from '../riddle/Riddle';
import BirdsList from '../birdsList/BirdsList';
import InfoBlock from '../infoBlock/InfoBlock';
import NextLevel from '../button/NextLevel';
import FinalCard from '../finalCard/FinalCard';

const Main = () => {
  const currentLvl = useSelector((state) => state.updateIndex);
  if (currentLvl <= 5) {
    return (
      <main>
        <Riddle currentLvl={currentLvl} />
        <div className="main__container">
          <BirdsList currentLvl={currentLvl} />
          <InfoBlock />
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
