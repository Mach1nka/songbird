import React from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = ({ src }) => (
  <AudioPlayer
    src={src}
    showJumpControls={false}
    showDownloadProgress={false}
    layout="horizontal-reverse"
    customAdditionalControls={[]}
  />
);

Player.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Player;
