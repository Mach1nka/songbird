import React, {
  useState, useContext, useMemo, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import Player from '../player/Player';
import BIRDS_DATA from '../../variables/Data';
import AplicationContext from '../context/AplicationContext';
import audioSignal from '../../variables/audioSignal';
import success from '../../assets/audio/success.mp3';
import error from '../../assets/audio/error.mp3';

const Riddle = ({ listItemData }) => {
  const {
    indexOfBirdsData, randomValue, setComplete, setPoints,
  } = useContext(AplicationContext);
  const currentData = BIRDS_DATA[indexOfBirdsData];
  const randomIdxForRiddle = useMemo(() => randomValue(currentData.length), [indexOfBirdsData]);
  const [name, setName] = useState();
  const [img, setImg] = useState();
  useEffect(() => {
    if (listItemData.audioSrc === currentData[randomIdxForRiddle].audio
      && listItemData.setStateOfCircle) {
      setComplete(true);
      setName(listItemData.bird);
      setImg(listItemData.imgSrc);
      listItemData.setStateOfCircle('correct');
      audioSignal(success);
    } else if ((listItemData.setStateOfCircle) && (!listItemData.stateOfCircle)) {
      setPoints((prev) => prev - 1);
      audioSignal(error);
      listItemData.setStateOfCircle('incorrect');
    }
  }, [listItemData]);
  useEffect(() => {
    setName('*****');
    setImg('./assets/images/defaultBird.jpg');
    console.log(`Правильный ответ: ${currentData[randomIdxForRiddle].name}`);
  }, [indexOfBirdsData]);
  return (
    <div className="riddle">
      <div className="riddle__image">
        <img src={img} alt="Bird" id="riddle__image" />
      </div>
      <div className="riddle__media">
        <h3 className="mystery_bird" id="mystery_bird">{name}</h3>
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
    setStateOfCircle: PropTypes.func,
    stateOfCircle: PropTypes.string,
  }),
};

Riddle.defaultProps = {
  listItemData: PropTypes.shape({
    bird: '',
    imgSrc: '',
    audioSrc: '',
    latName: '',
    description: '',
    setStateOfCircle: () => {},
    stateOfCircle: '',
  }),
};

export default Riddle;
