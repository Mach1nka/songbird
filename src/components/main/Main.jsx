import React from 'react';
import Riddle from '../riddle/Riddle';
import BirdsList from '../birdsList/BirdsList';

const Main = () => (
  <main>
    <Riddle />
    <div className="main__container">
      <BirdsList />
    </div>
  </main>
);

export default Main;
