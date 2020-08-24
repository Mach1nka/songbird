import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import BirdsListItem from './birdsListItem/BirdsListItem';
import BIRDS_DATA from '../../variables/Data';
import AplicationContext from '../context/AplicationContext';

const BirdsList = ({ data }) => {
  const { indexOfArray } = useContext(AplicationContext);
  return (
    <div className="birds-list">
      {
        BIRDS_DATA[indexOfArray].map((el) => (
          <BirdsListItem
            key={el.id}
            bird={el.name}
            latName={el.species}
            description={el.description}
            imgSrc={el.image}
            audioSrc={el.audio}
            setData={data}
          />
        ))
      }
    </div>
  );
};

BirdsList.propTypes = {
  // changeScore: PropTypes.func.isRequired,
  data: PropTypes.func.isRequired,
};
// changeScore
export default BirdsList;
