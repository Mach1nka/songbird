import React, { useContext, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import Player from '../player/Player';
import BIRDS_DATA from '../../variables/Data';
import AplicationContext from '../context/AplicationContext';

const Riddle = ({ listItemData }) => {
  const { indexOfBirdsData, randomValue, setComplete } = useContext(AplicationContext);
  const currentData = BIRDS_DATA[indexOfBirdsData];
  const randomIdxForRiddle = useMemo(() => randomValue(currentData.length),
    [indexOfBirdsData]);
  useEffect(() => {
    if (listItemData.audioSrc === currentData[randomIdxForRiddle].audio
      && listItemData.setDispatch) {
      setComplete(true);
      listItemData.setDispatch('correct');
      // document.querySelector('#riddle__image').setAttribute('src', listItemData.imgSrc);
      // document.querySelector('#mystery_bird').innerText = listItemData.bird;
    } else if (listItemData.setDispatch) {
      listItemData.setDispatch('incorrect');
    }
  }, [listItemData]);
  return (
    <div className="riddle">
      <div className="riddle__image">
        <img src="./assets/images/defaultBird.jpg" alt="Bird" id="riddle__image" />
      </div>
      <div className="riddle__media">
        <h3 className="mystery_bird" id="mystery_bird">*****</h3>
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
    setDispatch: PropTypes.func,
  }),
};

Riddle.defaultProps = {
  listItemData: PropTypes.shape({
    bird: '',
    imgSrc: '',
    audioSrc: '',
    latName: '',
    description: '',
    setDispatch: () => {},
  }),
};

export default Riddle;
