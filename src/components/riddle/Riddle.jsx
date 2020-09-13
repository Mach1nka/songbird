import React, {
  useState, useMemo, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Player from '../player/Player';
import BIRDS_DATA from '../../variables/Data';
import setRandomValue from '../../variables/randomValue';
import setLevelComplete from '../../store/actionCreator/isLevelComplete';
import updatePoints from '../../store/actionCreator/points';
import audioSignal from '../../variables/audioSignal';
import success from '../../assets/audio/success.mp3';
import error from '../../assets/audio/error.mp3';

const Riddle = ({ currentLvl }) => {
  const listItemData = useSelector((state) => state.updateListItemData);
  const points = useSelector((state) => state.updatePoints);
  const dispatch = useDispatch();
  const currentData = BIRDS_DATA[currentLvl];
  const randomIdxForRiddle = useMemo(() => setRandomValue(currentData.length), [currentLvl]);
  const [name, setName] = useState();
  const [img, setImg] = useState();
  useEffect(() => {
    if (listItemData.audioSrc === currentData[randomIdxForRiddle].audio
      && listItemData.setStateOfCircle) {
      dispatch(setLevelComplete(true));
      setName(listItemData.bird);
      setImg(listItemData.imgSrc);
      listItemData.setStateOfCircle('correct');
      audioSignal(success);
    } else if ((listItemData.setStateOfCircle) && (!listItemData.stateOfCircle)) {
      dispatch(updatePoints(points - 1));
      listItemData.setStateOfCircle('incorrect');
      audioSignal(error);
    }
  }, [listItemData]);
  useEffect(() => {
    setName('*****');
    setImg('./assets/images/defaultBird.jpg');
    console.log(`Правильный ответ: ${currentData[randomIdxForRiddle].name}`);
  }, [currentLvl]);
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
  currentLvl: PropTypes.number.isRequired,
};

export default Riddle;
