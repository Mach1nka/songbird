import { IS_LEVEL_COMPLETE } from '../actions/ACTIONS';

function updateLevelComplete(state = false, { newState, type }) {
  switch (type) {
    case IS_LEVEL_COMPLETE: return newState;
    default: return state;
  }
}

export default updateLevelComplete;
