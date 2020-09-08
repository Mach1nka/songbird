import { combineReducers } from 'redux';
import updateIndex from './indexReducer';
import updateScore from './scoreReducer';
import updateLevelComplete from './LevelCompleteReducer';
import updatePoints from './pointsReducer';

const rootReducer = combineReducers({
  updateIndex, updateScore, updateLevelComplete, updatePoints,
});

export default rootReducer;
