import React from 'react';
import Riddle from '../riddle/Riddle';
import BirdsList from '../birdsList/BirdsList';
import InfoBlock from '../infoBlock/InfoBlock';
import NextLevel from '../button/NextLevel';

const Main = () => (
  <main>
    <Riddle />
    <div className="main__container">
      <BirdsList />
      <InfoBlock />
    </div>
    <NextLevel state />
  </main>
);

export default Main;
