import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import AplicationContext from '../../context/AplicationContext';

const BirdsListItem = ({
  bird, latName, description, imgSrc, audioSrc,
}) => {
  const { isLevelComlete, indexOfBirdsData, setListItemData } = useContext(AplicationContext);
  const [stateOfCircle, setStateOfCircle] = useState('');
  useEffect(() => {
    setStateOfCircle();
  }, [indexOfBirdsData]);
  return (
    <button
      type="button"
      className="list__item"
      onClick={() => {
        if (isLevelComlete) {
          setListItemData({
            bird, latName, description, imgSrc, audioSrc,
          });
        } else {
          setListItemData({
            bird, latName, description, imgSrc, audioSrc, setStateOfCircle, stateOfCircle,
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
};

export default BirdsListItem;
