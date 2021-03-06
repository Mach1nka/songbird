import React from 'react';
import PropTypes from 'prop-types';
import Player from '../player/Player';

const InfoBlock = ({ listItemData }) => {
  if (Object.keys(listItemData).length === 0) {
    return (
      <div className="birds-info__container">
        <p className="birds-info__default">Послушайте плеер.</p>
        <p className="birds-info__default">Выберите птицу из списка</p>
      </div>
    );
  }
  return (
    <div className="birds-info__container">
      <div className="birds-info">
        <img src={listItemData.imgSrc} alt="Bird" className="birds__img" />
        <div className="birds-info__titles">
          <h4 className="titles__name">{listItemData.bird}</h4>
          <h4 className="titles__lat-name">{listItemData.latName}</h4>
          <Player src={listItemData.audioSrc} />
        </div>
      </div>
      <p className="birds-description">{listItemData.description}</p>
    </div>
  );
};

InfoBlock.propTypes = {
  listItemData: PropTypes.shape({
    bird: PropTypes.string,
    imgSrc: PropTypes.string,
    audioSrc: PropTypes.string,
    latName: PropTypes.string,
    description: PropTypes.string,
  }),
};

InfoBlock.defaultProps = {
  listItemData: PropTypes.shape({
    bird: '',
    imgSrc: '',
    audioSrc: '',
    latName: '',
    description: '',
  }),
};

export default InfoBlock;
