import React, {
  useState, useContext, useMemo, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import Player from '../player/Player';
import BIRDS_DATA from '../../variables/Data';
import AplicationContext from '../context/AplicationContext';

const Riddle = ({ listItemData }) => {
  const { indexOfBirdsData, randomValue, setComplete } = useContext(AplicationContext);
  const currentData = BIRDS_DATA[indexOfBirdsData];
  const randomIdxForRiddle = useMemo(() => randomValue(currentData.length), [indexOfBirdsData]);
  const [name, setName] = useState('*****');
  const [img, setImg] = useState('./assets/images/defaultBird.jpg');
  useEffect(() => {
    if (listItemData.audioSrc === currentData[randomIdxForRiddle].audio
      && listItemData.setStateOfCircle) {
      setComplete(true);
      setName(listItemData.bird);
      setImg(listItemData.imgSrc);
      listItemData.setStateOfCircle('correct');
    } else if (listItemData.setStateOfCircle) {
      listItemData.setStateOfCircle('incorrect');
    }
  }, [listItemData]);
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
  }),
};

export default Riddle;
