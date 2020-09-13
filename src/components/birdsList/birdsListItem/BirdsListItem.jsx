import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import setListItemData from '../../../store/actionCreator/listItemData';

const BirdsListItem = ({
  bird, latName, description, imgSrc, audioSrc, currentLvl,
}) => {
  const isLevelComlete = useSelector((state) => state.updateLevelComplete);
  const dispatch = useDispatch();
  const [stateOfCircle, setStateOfCircle] = useState('');
  useEffect(() => {
    setStateOfCircle();
  }, [currentLvl]);
  return (
    <button
      type="button"
      className="list__item"
      onClick={() => {
        if (isLevelComlete) {
          dispatch(setListItemData({
            bird, latName, description, imgSrc, audioSrc,
          }));
        } else {
          dispatch(setListItemData({
            bird, latName, description, imgSrc, audioSrc, setStateOfCircle, stateOfCircle,
          }));
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
  currentLvl: PropTypes.number.isRequired,
};

export default BirdsListItem;
