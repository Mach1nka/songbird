import React from 'react';
import PropTypes from 'prop-types';
import BirdsListItem from './birdsListItem/BirdsListItem';
import BIRDS_DATA from '../../variables/Data';

const BirdsList = ({ currentLvl }) => (
  <div className="birds-list">
    {
      BIRDS_DATA[currentLvl].map((el) => (
        <BirdsListItem
          key={el.id}
          bird={el.name}
          latName={el.species}
          description={el.description}
          imgSrc={el.image}
          audioSrc={el.audio}
          currentLvl={currentLvl}
        />
      ))
    }
  </div>
);

BirdsList.propTypes = {
  currentLvl: PropTypes.number.isRequired,
};

export default BirdsList;
