import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
// import reducer from '../../../variables/Reduser';
import AplicationContext from '../../context/AplicationContext';

const BirdsListItem = ({
  bird, latName, description, imgSrc, audioSrc, setData,
}) => {
  const { isLevelComlete } = useContext(AplicationContext);
  const [state, setDispatch] = useState('');
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
            bird, latName, description, imgSrc, audioSrc, setDispatch,
          });
        }
      }}
    >
      <span className={`circle ${state}`} />
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
