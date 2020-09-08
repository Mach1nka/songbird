import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = ({ src }) => {
  const isLevelComlete = useSelector((state) => state.updateLevelComplete);
  useEffect(() => {
    if (isLevelComlete) {
      document.querySelector('audio').pause();
    }
  }, [isLevelComlete]);
  return (
    <AudioPlayer
      src={src}
      showJumpControls={false}
      showDownloadProgress={false}
      layout="horizontal-reverse"
      customAdditionalControls={[]}
      autoPlayAfterSrcChange={false}
    />
  );
};

Player.propTypes = {
  src: PropTypes.string,
};

Player.defaultProps = {
  src: '',
};

export default Player;
