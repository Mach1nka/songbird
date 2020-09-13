import { LIST_ITEM_DATA } from '../actions/ACTIONS';

function setListItemData(data) {
  return {
    type: LIST_ITEM_DATA,
    payload: data,
  };
}

export default setListItemData;
