export let initialState = {
  search: '',
  counter: 1,
};

export const actionTypes = {
  SET_SEARCH: 'SET_SEARCH',
  SET_COUNTER: 'SET_COUNTER',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH:
      return {
        ...state,
        search: action.value,
      };
    case actionTypes.SET_COUNTER:
      return {
        ...state,
        counter: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
