import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import Player from '../player/Player';
import BIRDS_DATA from '../../variables/Data';
import AplicationContext from '../context/AplicationContext';

const Riddle = ({ listItemData }) => {
  const { indexOfBirdsData, randomValue } = useContext(AplicationContext);
  const currentData = BIRDS_DATA[indexOfBirdsData];
  console.log(listItemData);
  const randomIdxForRiddle = useMemo(() => randomValue(currentData.length),
    [indexOfBirdsData]);
  return (
    <div className="riddle">
      <div className="riddle__image">
        <img src="" alt="Bird" />
      </div>
      <div className="riddle__media">
        <h3 className="mystery_bird">fdfd</h3>
        <Player src={currentData[randomIdxForRiddle].audio} />
      </div>
    </div>
  );
};

Riddle.propTypes = {
  listItemData: PropTypes.shape({
    bird: PropTypes.string,
    imgSrc: PropTypes.string,
    audioSrc: PropTypes.string,
    latName: PropTypes.string,
    description: PropTypes.string,
  }),
};

Riddle.defaultProps = {
  listItemData: PropTypes.shape({
    bird: '',
    imgSrc: '',
    audioSrc: '',
    latName: '',
    description: '',
  }),
};

export default Riddle;
