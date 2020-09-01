import ACTION_1 from '../actions/ACTION_1';

function indexOfBirdsData(state = {}, action) {
  switch (action.type) {
    case ACTION_1: return { value: action.value_1 };
    default: return state;
  }
}

export default indexOfBirdsData;
