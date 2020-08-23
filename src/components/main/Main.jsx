import React from 'react';
import PropTypes from 'prop-types';
import Riddle from '../riddle/Riddle';
import BirdsList from '../birdsList/BirdsList';
import InfoBlock from '../infoBlock/InfoBlock';
import NextLevel from '../button/NextLevel';

const Main = ({ randomValue, changeScore }) => (
  <main>
    <Riddle />
    <div className="main__container">
      <BirdsList />
      <InfoBlock />
    </div>
    <NextLevel state />
  </main>
);

Main.propTypes = {
  randomValue: PropTypes.func.isRequired,
  changeScore: PropTypes.func.isRequired,
};

export default Main;
