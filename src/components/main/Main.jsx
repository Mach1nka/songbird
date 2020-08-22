import React from 'react';
import Riddle from '../riddle/Riddle';
import BirdsList from '../birdsList/BirdsList';
import InfoBlock from '../infoBlock/InfoBlock';

const Main = () => (
  <main>
    <Riddle />
    <div className="main__container">
      <BirdsList />
      <InfoBlock />
    </div>
  </main>
);

export default Main;
