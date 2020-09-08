import { POINTS } from '../actions/ACTIONS';

function updatePoints(state = 5, { newValue, type }) {
  switch (type) {
    case POINTS: return newValue;
    default: return state;
  }
}

export default updatePoints;
