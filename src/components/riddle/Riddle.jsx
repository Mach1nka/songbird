import React from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Riddle = ({ imgSrc, birdsName, audioSrc }) => (
  <div className="riddle">
    <div className="riddle__image">
      <img src={imgSrc} alt="Bird" />
    </div>
    <div className="riddle__media">
      <h3 className="mystery_bird">{birdsName}</h3>
      <AudioPlayer
        src={audioSrc}
        showJumpControls={false}
        showDownloadProgress={false}
        layout="horizontal-reverse"
        customAdditionalControls={[]}
      />
    </div>
  </div>
);

Riddle.propTypes = {
  imgSrc: PropTypes.string,
  birdsName: PropTypes.string,
  audioSrc: PropTypes.string,
};

Riddle.defaultProps = {
  imgSrc: './assets/images/defaultBird.jpg',
  birdsName: '******',
  audioSrc: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3',
};

export default Riddle;
