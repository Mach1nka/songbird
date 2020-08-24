import React from 'react';
import PropTypes from 'prop-types';

const BirdsListItem = ({
  bird, latName, description, imgSrc, audioSrc, setData,
}) => (
  <button
    type="button"
    className="list-item"
    onClickCapture={() => setData({
      bird, latName, description, imgSrc, audioSrc,
    })}
  >
    <span className="circle" />
    {bird}
  </button>
);

BirdsListItem.propTypes = {
  bird: PropTypes.string.isRequired,
  latName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  audioSrc: PropTypes.string.isRequired,
  setData: PropTypes.func.isRequired,
};

export default BirdsListItem;
