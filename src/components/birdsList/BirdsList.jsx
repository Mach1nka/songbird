import React, { useContext } from 'react';
import BirdsListItem from './birdsListItem/BirdsListItem';
import BIRDS_DATA from '../../variables/Data';
import AplicationContext from '../context/AplicationContext';

const BirdsList = () => {
  const { indexOfBirdsData, setListItemData } = useContext(AplicationContext);
  return (
    <div className="birds-list">
      {
        BIRDS_DATA[indexOfBirdsData].map((el) => (
          <BirdsListItem
            key={el.id}
            bird={el.name}
            latName={el.species}
            description={el.description}
            imgSrc={el.image}
            audioSrc={el.audio}
            setData={setListItemData}
          />
        ))
      }
    </div>
  );
};

export default BirdsList;
