import React from 'react';
import { useSelector } from 'react-redux';
import Player from '../player/Player';

const InfoBlock = () => {
  const listItemData = useSelector((state) => state.updateListItemData);
  const checkObjectValues = (obj) => {
    const arrOfValues = Object.values(obj);
    const sortedArr = arrOfValues.filter((el) => el !== undefined);
    return sortedArr;
  };
  if (checkObjectValues(listItemData).length === 0) {
    return (
      <div className="birds-info__container">
        <p className="birds-info__default">Послушайте плеер.</p>
        <p className="birds-info__default">Выберите птицу из списка</p>
      </div>
    );
  }
  return (
    <div className="birds-info__container">
      <div className="birds-info">
        <img src={listItemData.imgSrc} alt="Bird" className="birds__img" />
        <div className="birds-info__titles">
          <h4 className="titles__name">{listItemData.bird}</h4>
          <h4 className="titles__lat-name">{listItemData.latName}</h4>
          <Player src={listItemData.audioSrc} />
        </div>
      </div>
      <p className="birds-description">{listItemData.description}</p>
    </div>
  );
};

export default InfoBlock;
