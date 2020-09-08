import { IS_LEVEL_COMPLETE } from '../actions/ACTIONS';

function setLevelComplete(value) {
  return {
    type: IS_LEVEL_COMPLETE,
    newState: value,
  };
}

export default setLevelComplete;
