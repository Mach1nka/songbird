import React from 'react';
import PropTypes from 'prop-types';
import Player from '../player/Player';

const InfoBlock = ({
  img, birdsName, latName, description, audioSrc,
}) => (
  <div className="birds-info__container">
    <div className="birds-info">
      <img src={img} alt="Bird" className="birds__img" />
      <div className="birds-info__titles">
        <h4 className="titles__name">{birdsName}</h4>
        <h4 className="titles__lat-name">{latName}</h4>
        <Player src={audioSrc} />
      </div>
    </div>
    <p className="birds-description">{description}</p>
  </div>
);

InfoBlock.propTypes = {
  img: PropTypes.string,
  birdsName: PropTypes.string,
  latName: PropTypes.string,
  audioSrc: PropTypes.string,
  description: PropTypes.string,
};

InfoBlock.defaultProps = {
  img: './assets/images/defaultBird.jpg',
  birdsName: 'Ворон',
  latName: 'Corvus corax',
  audioSrc: '',
  description: 'Размеры буревестниковых разные. Самые маленькие из них в длину составляют до 25 см, самые большие - до 1 м, при размахе крыльев около 2 м. Существует поверье, что появление буревестника в воздухе предвещает бурю, о чем говорит само название птицы.',
};

export default InfoBlock;
