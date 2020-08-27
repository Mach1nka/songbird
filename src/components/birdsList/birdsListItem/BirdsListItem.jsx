import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import AplicationContext from '../../context/AplicationContext';

const BirdsListItem = ({
  bird, latName, description, imgSrc, audioSrc, setData,
}) => {
  const { isLevelComlete, indexOfBirdsData } = useContext(AplicationContext);
  const [stateOfCircle, setStateOfCircle] = useState('');
  useEffect(() => {
    setStateOfCircle('');
    setData({});
  }, [indexOfBirdsData]);
  return (
    <button
      type="button"
      className="list-item"
      onClick={() => {
        if (isLevelComlete) {
          setData({
            bird, latName, description, imgSrc, audioSrc,
          });
        } else {
          setData({
            bird, latName, description, imgSrc, audioSrc, setStateOfCircle,
          });
        }
      }}
    >
      <span className={`circle ${stateOfCircle}`} />
      {bird}
    </button>
  );
};

BirdsListItem.propTypes = {
  bird: PropTypes.string.isRequired,
  latName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  audioSrc: PropTypes.string.isRequired,
  setData: PropTypes.func.isRequired,
};

export default BirdsListItem;
