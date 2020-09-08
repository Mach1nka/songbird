import { SCORE } from '../actions/ACTIONS';

function updateScore(state = 0, { newScore, type }) {
  switch (type) {
    case SCORE: return newScore;
    default: return state;
  }
}

export default updateScore;
