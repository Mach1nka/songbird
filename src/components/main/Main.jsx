import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Riddle from '../riddle/Riddle';
import BirdsList from '../birdsList/BirdsList';
import InfoBlock from '../infoBlock/InfoBlock';
import NextLevel from '../button/NextLevel';

const Main = ({ changeScore }) => {
  const [listItemData, setListItemData] = useState({});
  return (
    <main>
      <Riddle listItemData={listItemData} />
      <div className="main__container">
        <BirdsList changeScore={changeScore} data={setListItemData} />
        <InfoBlock data={listItemData} />
      </div>
      <NextLevel />
    </main>
  );
};

Main.propTypes = {
  changeScore: PropTypes.func.isRequired,
};

export default Main;
