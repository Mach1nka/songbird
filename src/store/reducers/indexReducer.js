import INDEX_OF_BIRDS_DATA from '../actions/ACTIONS';

function setIndex(state = 0, { newIndex, type }) {
  switch (type) {
    case INDEX_OF_BIRDS_DATA: return newIndex;
    default: return state;
  }
}

export default setIndex;
