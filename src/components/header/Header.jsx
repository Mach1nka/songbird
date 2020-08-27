import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import GamePanel from '../gamePanel/GamePanel';
import Score from '../score/Score';
import AplicationContext from '../context/AplicationContext';

const Header = ({ score, setScore }) => {
  const { isLevelComlete, points } = useContext(AplicationContext);
  useEffect(() => {
    if (isLevelComlete) {
      setScore((prev) => prev + points);
    }
  }, [isLevelComlete]);
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="logo">
          <img src="../../assets/images/logo.svg" alt="logo" />
        </div>
        <Score score={score} />
      </div>
      <GamePanel />
    </header>
  );
};

Header.propTypes = {
  score: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
};

export default Header;
