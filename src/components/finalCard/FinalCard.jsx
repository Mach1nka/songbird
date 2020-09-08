import React from 'react';
import { useSelector } from 'react-redux';
import TryAgain from '../button/TryAgain';

const FinalCard = () => {
  const currentScore = useSelector((state) => state.updateScore);
  if (currentScore < 30) {
    return (
      <div className="final__card">
        <h3 className="final__card__title">Поздравяем!</h3>
        <p className="final__card__text">
          Вы прошли викторину и набрали
          {' '}
          <span>{currentScore}</span>
          {' '}
          из
          {' '}
          <span>30</span>
          {' '}
          возможных баллов
        </p>
        <div className="final__card__wrapper">
          <TryAgain />
        </div>
      </div>
    );
  }
  return (
    <div className="final__card">
      <h3 className="final__card__title">Поздравяем!</h3>
      <div className="final__card__text">
        <p>
          Вы набрали максимально возможный балл, здесь вам больше делать нечего :)
        </p>
        <a target="_blank" rel="noreferrer" href="https://o-prirode.ru/pticy/">Ты можешь улучшить свои знания здесь</a>
      </div>
      <div className="final__card__wrapper">
        <TryAgain />
      </div>
    </div>
  );
};

export default FinalCard;
