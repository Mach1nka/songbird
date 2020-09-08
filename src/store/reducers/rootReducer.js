import { combineReducers } from 'redux';
import updateIndex from './indexReducer';
import updateScore from './scoreReducer';

const rootReducer = combineReducers({ updateIndex, updateScore });

export default rootReducer;
