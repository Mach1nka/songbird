/*eslint-disable*/
const reducer = (state, action) => {
  switch (action.type) {
    case 'correct':
      return { style: 'correct' };
      break;
    case 'incorrect':
      return { style: 'incorrect' };
      break;
    default: return state;
  }
};

export default reducer;
/*eslint-disable*/
