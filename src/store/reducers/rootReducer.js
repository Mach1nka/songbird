import { combineReducers } from 'redux';
import updateIndex from './indexReducer';
import updateScore from './scoreReducer';
import updateLevelComplete from './levelCompleteReducer';
import updatePoints from './pointsReducer';
import updateListItemData from './listItemDataReducer';

const rootReducer = combineReducers({
  updateIndex, updateScore, updateLevelComplete, updatePoints, updateListItemData,
});

export default rootReducer;
