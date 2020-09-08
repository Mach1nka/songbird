import { POINTS } from '../actions/ACTIONS';

function setPoints(value) {
  return {
    type: POINTS,
    newValue: value,
  };
}

export default setPoints;
