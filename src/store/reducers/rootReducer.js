import { combineReducers } from 'redux';
import updateIndex from './indexReducer';
import updateScore from './scoreReducer';
import updateLevelComplete from './LevelCompleteReducer';

const rootReducer = combineReducers({ updateIndex, updateScore, updateLevelComplete });

export default rootReducer;
