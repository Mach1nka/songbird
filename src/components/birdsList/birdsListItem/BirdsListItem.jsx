import React from 'react';
import PropTypes from 'prop-types';

const BirdsListItem = ({
  bird, latName, description, imgSrc, audioSrc, setData,
}) => (
  <li
    className="list-item"
    onClickCapture={() => setData({
      bird, latName, description, imgSrc, audioSrc,
    })}
  >
    <span className="circle" />
    {bird}
  </li>
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
