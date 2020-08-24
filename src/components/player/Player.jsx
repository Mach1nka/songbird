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
    autoPlayAfterSrcChange={false}
  />
);

Player.propTypes = {
  src: PropTypes.string,
};

Player.defaultProps = {
  src: '',
};

export default Player;
