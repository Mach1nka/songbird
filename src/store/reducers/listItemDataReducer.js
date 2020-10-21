import { LIST_ITEM_DATA } from '../actions/ACTIONS';

function updateListItemData(state = {}, action) {
  switch (action.type) {
    case LIST_ITEM_DATA: return {
      ...state,
      bird: action.payload.bird,
      latName: action.payload.latName,
      description: action.payload.description,
      imgSrc: action.payload.imgSrc,
      audioSrc: action.payload.audioSrc,
      setStateOfCircle: action.payload.setStateOfCircle,
      stateOfCircle: action.payload.stateOfCircle,
    };
    default: return state;
  }
}

export default updateListItemData;
