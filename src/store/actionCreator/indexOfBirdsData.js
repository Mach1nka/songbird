import { INDEX_OF_BIRDS_DATA } from '../actions/ACTIONS';

function setIndexOfBirdsData(value) {
  return {
    type: INDEX_OF_BIRDS_DATA,
    newIndex: value,
  };
}

export default setIndexOfBirdsData;
