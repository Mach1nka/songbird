import React from 'react';
import PropTypes from 'prop-types';

const TryAgain = ({ changeIndex, resetScore }) => (
  <div>
    <button
      type="button"
      className="final__card__button"
      onClick={() => {
        changeIndex(0);
        resetScore(0);
      }}
    >
      Попробовать еще раз
    </button>
  </div>
);

TryAgain.propTypes = {
  changeIndex: PropTypes.func.isRequired,
  resetScore: PropTypes.func.isRequired,
};

export default TryAgain;
