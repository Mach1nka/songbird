import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Riddle from '../riddle/Riddle';
import BirdsList from '../birdsList/BirdsList';
import InfoBlock from '../infoBlock/InfoBlock';
import NextLevel from '../button/NextLevel';

const Main = ({ randomValue, changeScore }) => {
  const [listItemData, setListItemData] = useState({});
  return (
    <main>
      <Riddle randomValue={randomValue} />
      <div className="main__container">
        <BirdsList changeScore={changeScore} data={setListItemData} />
        <InfoBlock data={listItemData} />
      </div>
      <NextLevel state />
    </main>
  );
};

Main.propTypes = {
  randomValue: PropTypes.func.isRequired,
  changeScore: PropTypes.func.isRequired,
};

export default Main;
