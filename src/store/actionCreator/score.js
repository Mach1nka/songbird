import { SCORE } from '../actions/ACTIONS';

function setScore(value) {
  return {
    type: SCORE,
    newScore: value,
  };
}

export default setScore;
