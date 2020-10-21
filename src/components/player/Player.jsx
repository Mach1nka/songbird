import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = ({ src }) => {
  const isLevelComlete = useSelector((state) => state.updateLevelComplete);
  const playerEl = useRef(null);
  useEffect(() => {
    if (isLevelComlete) {
      playerEl.current.audio.current.pause();
    }
  }, [isLevelComlete]);
  return (
    <AudioPlayer
      ref={playerEl}
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
